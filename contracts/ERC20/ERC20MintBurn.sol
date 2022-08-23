// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC20BurnOwnable.sol";
import "./IERC20Metadata.sol";

/**
 * TODO: describe here this contract 
 * @dev Extension of {ERC20} that allows token holders to destroy both their own
 * tokens and those that they have an allowance for, in a way that can be
 * recognized off-chain (via event analysis).
 */
contract ERC20MintBurn is ERC20BurnOwnable {

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

}