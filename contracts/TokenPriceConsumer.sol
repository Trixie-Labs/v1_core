// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract TokenPriceConsumer {

    using SafeMath for uint112;
    using SafeMath for uint256;

    AggregatorV3Interface internal priceUSDCFeed;
    AggregatorV3Interface internal priceETHFeed;
    
    /**
     * Network: Kovan
     * Aggregator: USDC/USD
     * Address: 0x9211c6b3BF41A10F78539810Cf5c64e1BB78Ec60
     * Aggregaotor: ETH/USD
     * Address: 0x9326BFA02ADD2366b30bacB125260Af641031331
     */
    constructor() {
        //TODO this address must be included in the constructor
        priceUSDCFeed = AggregatorV3Interface(0x9211c6b3BF41A10F78539810Cf5c64e1BB78Ec60);
        priceETHFeed = AggregatorV3Interface(0x9326BFA02ADD2366b30bacB125260Af641031331);
    }

    /**
     * Returns the latest USDC price in USD
     */
    function getLatestUSDCPrice() public view returns (int) {
        (,int price,,,) = priceUSDCFeed.latestRoundData();
        return price;
    }

    /**
     * Returns the latest ETH price in USD
     */
    function getLatestETHPrice() public view returns (int) {
        (,int price,,,) = priceETHFeed.latestRoundData();
        return price;
    }

    /**
     * Given the token price a quote
     * Returns the latest devired price 
     */
    function getDerivedPrice(int256 tokenPriceInUSDC, address _quote, uint8 _decimals) public view returns (int256) {
        require(_decimals > uint8(0) && _decimals <= uint8(18), "Invalid _decimals");
        int256 decimals = int256(10 ** uint256(_decimals));
        int256 basePrice = tokenPriceInUSDC;
        uint8 baseDecimals = priceUSDCFeed.decimals();
        basePrice = scalePrice(basePrice, baseDecimals, _decimals);
        (,int256 quotePrice,,,) = AggregatorV3Interface(_quote).latestRoundData();
        uint8 quoteDecimals = AggregatorV3Interface(_quote).decimals();
        quotePrice = scalePrice(quotePrice, quoteDecimals, _decimals);
        return basePrice * decimals / quotePrice;
    }

    function scalePrice(int256 _price, uint8 _priceDecimals, uint8 _decimals) internal pure returns (int256) {
        if (_priceDecimals < _decimals) {
            return _price * int256(10 ** uint256(_decimals - _priceDecimals));
        } else if (_priceDecimals > _decimals) {
            return _price / int256(10 ** uint256(_priceDecimals - _decimals));
        }
        return _price;
    }

}