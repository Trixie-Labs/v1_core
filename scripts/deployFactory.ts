import { ethers } from "ethers";
import { initWallet1 } from './utils/initWallet';
import * as tokenFactory from "../artifacts/contracts/TokenFactory.sol/TokenFactory.json";

async function main() {
    const signer = await initWallet1();
    console.log("Deploying Factory");
    const factory = new ethers.ContractFactory(
        tokenFactory.abi, 
        tokenFactory.bytecode,
        signer
    );
    const factoryContract = await factory.deploy(0);
    await factoryContract.deployed();
    console.log("Completed");
    console.log(`Factory Contract deployed at ${factoryContract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
