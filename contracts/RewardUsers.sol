// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

// KeeperCompatible.sol imports the functions from both ./KeeperBase.sol and
// ./interfaces/KeeperCompatibleInterface.sol
import "@chainlink/contracts/src/v0.8/KeeperCompatible.sol";
import "./AddressManagerInterface.sol";
import "./ERC20/IERC20Mint.sol";

contract RewardUsers is KeeperCompatibleInterface {
    /**
    * Public counter variable
    */
    uint public counter;

    uint256 public  amount;

    AddressManagerInterface internal manager;
    IERC20Mint internal token;

    /**
    * Use an interval in seconds and a timestamp to slow execution of Upkeep
    */
    uint public immutable interval;
    uint public lastTimeStamp;

    constructor(uint updateInterval, address managerAdr, address erc20Adr, uint256 amountReward) {
      interval = updateInterval;
      lastTimeStamp = block.timestamp;
      counter = 0;
      manager = AddressManagerInterface(managerAdr);
      token = IERC20Mint(erc20Adr);
      amount = amountReward;
    }

    function checkUpkeep(bytes calldata /* checkData */) external view override returns (bool upkeepNeeded, bytes memory /* performData */) {
        upkeepNeeded = (block.timestamp - lastTimeStamp) > interval;
    }

    function performUpkeep(bytes calldata /* performData */) external override {
        if ((block.timestamp - lastTimeStamp) > interval ) {
            lastTimeStamp = block.timestamp;
            uint256 n = manager.getNumberOfAddresses();
            for(uint8 i=1; i<= n; i++){
                address adr = manager.getAddress(i);
                token.mint(adr, amount);
            }

        }
        
    }
}
