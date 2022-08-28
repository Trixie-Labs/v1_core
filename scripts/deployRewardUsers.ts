import { ethers } from "ethers";
import { initWallet1 } from './utils/initWallet';
import * as rewardUsers from "../artifacts/contracts/RewardUsers.sol/RewardUsers.json";

async function main() {
    const signer = await initWallet1();
    console.log("Deploying Reward Users");
    const rewardUsersFactory = new ethers.ContractFactory(
        rewardUsers.abi, 
        rewardUsers.bytecode,
        signer
    );
    //5 mim - manager - trixie token - 1000000000000000000 token 
    const factoryContract = await rewardUsersFactory.deploy("300", "0xFF0337Fe38245f507b5876A9E84ceBbc653A6219", "0xc3668295ce7fa9892A2b7171b1d6BB697B508a93", "1000000000000000000");
    await factoryContract.deployed();
    console.log("Completed");
    console.log(`Reward Users deployed at ${factoryContract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
