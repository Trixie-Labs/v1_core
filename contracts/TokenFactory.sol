// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC20/IERC20.sol";
import "./ERC20/IERC20AirDrop.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title Token Factory
/// @author wgcisotto
/// @dev EIP-1167: Minimal Proxy Contract - https://eips.ethereum.org/EIPS/eip-1167 
/// @notice The Factory contract creates Minimal Proxies using EIP1167,
/// @notice which point to ERC20 contracts implementation, this saving on gas
contract TokenFactory is Ownable {

    /// TODO: this classe must be upgradable to support new clone in the future

    /// TODO: check how to manage service Fee
    uint256 public serviceFee; // = 50000000000000000; // 0.05 ETH

    /// @notice Event emitted --- explain here
    event TokenCreated(address newTokenAddress);

    constructor(uint256 _serviceFee){
        serviceFee = _serviceFee;
        ///TODO: have a look on   // EIP712 niceties
    }

    /// @notice Creates and initializes the ERC20 MinimalProxy contract
    /// @param libraryAddress_ is an address of implementation, to which the MinimalProxy should point to
    /// @param name_ is the ERC20 token name
    /// @param symbol_ is the ERC20 token symbol
    /// @param totalSupply_ is the ERC20 token totalSupply that will be minted to msg.sender
    function createERC20(address libraryAddress_, string memory name_, string memory symbol_, uint8 decimals_, uint256 totalSupply_) payable external {
        // The service fee should be paid when calling this function
        //TODO: change here to charge an amount for the service 
        //require(msg.value >= serviceFee, "Service Fee wasn't paid");
        address clone = createClone(libraryAddress_);
        IERC20(clone).init(msg.sender, name_, symbol_, decimals_, totalSupply_);
        emit TokenCreated(clone);
    }

    /// @notice Creates a MinimalProxy contract via EIP1167 assembly code
    /// @dev Using this implementation: https://github.com/optionality/clone-factory
    /// @param target is an address of implementation, to which the MinimalProxy will point to
    /// @return result is an address of a newly created MinimalProxy
    function createClone(address target) internal returns (address result) {
        bytes20 targetBytes = bytes20(target);
        assembly {
            let clone := mload(0x40)
            mstore(clone, 0x3d602d80600a3d3981f3363d3d373d3d3d363d73000000000000000000000000)
            mstore(add(clone, 0x14), targetBytes)
            mstore(add(clone, 0x28), 0x5af43d82803e903d91602b57fd5bf30000000000000000000000000000000000)
            result := create(0, clone, 0x37)
        }
    }

    /// @notice Withdraw `amount` from the owner pool
    function withdraw(uint256 amount) public onlyOwner {
        ///TODO
    }

}