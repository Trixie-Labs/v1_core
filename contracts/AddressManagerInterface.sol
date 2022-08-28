// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

interface AddressManagerInterface {

    function newAddres(address adr) external;

    function getNumberOfAddresses() external view returns (uint);

    function getAddress(uint256 index) external view returns (address);

}