// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC20BurnOwnable.sol";
import "./IERC20Metadata.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

/**
 * TODO: describe here this contract 
 * @dev Extension of {ERC20} that allows token holders to destroy both their own
 * tokens and those that they have an allowance for, in a way that can be
 * recognized off-chain (via event analysis).
 */
contract ERC20BurnPause is ERC20BurnOwnable, Pausable {
    
    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount) internal whenNotPaused override {
        super._beforeTokenTransfer(from, to, amount);
    }
}