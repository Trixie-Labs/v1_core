import { ethers } from "ethers";
import { initWallet1 } from './utils/initWallet';
import * as userManager from "../artifacts/contracts/UserAddressManager.sol/UserAddressManager.json";

async function main() {
    const signer = await initWallet1();
    console.log("Deploying Address Manager");
    const manager = new ethers.ContractFactory(
        userManager.abi, 
        userManager.bytecode,
        signer
    );
    const factoryContract = await manager.deploy();
    await factoryContract.deployed();
    console.log("Completed");
    console.log(`Address Manager deployed at ${factoryContract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
