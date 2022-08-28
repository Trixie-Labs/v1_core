// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./AddressManagerInterface.sol";

contract UserAddressManager is AddressManagerInterface {

    uint256 addressesCount;
    mapping(address => bool) userAddresses;
    mapping(uint256 => address) userIndex;

    constructor() {
        addressesCount = 0;
    }

    function newAddres(address adr) public virtual override {
        if(userAddresses[adr]==false){
            addressesCount++;
            userAddresses[adr] = true;
            userIndex[addressesCount] = adr;
        }
    }

    function getNumberOfAddresses() public view virtual override returns (uint) {
        return addressesCount;
    }

    function getAddress(uint256 index) public view virtual override returns (address) {
        return userIndex[index];
    }
}