
// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.6.0) (token/ERC20/IERC20.sol)
pragma solidity ^0.8.0;

/**
 * /// TODO: add explanation here...
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20AirDrop {

    function airDropTokens(bytes32 root_, uint256 rewardAmount_) external;

    /// TODO: add explanation here...
    function claim(bytes32[] calldata proof_) external;

}