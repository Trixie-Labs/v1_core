// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC20.sol";
import "./IERC20Metadata.sol";
import "./utils/Ownable.sol";

/**
 * TODO: describe here this contract 
 * @dev Extension of {ERC20} that allows token holders to destroy both their own
 * tokens and those that they have an allowance for, in a way that can be
 * recognized off-chain (via event analysis).
 */
contract ERC20Ownable is ERC20, Ownable {

    function init(address owner_, string memory name_, string memory symbol_, uint8 decimals_, uint256 totalSupply_) public override {
        super.init(owner_, name_, symbol_, decimals_, totalSupply_);
        super.init(owner_);
    }

}