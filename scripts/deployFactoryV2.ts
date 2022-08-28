import { ethers } from "ethers";
import { initWallet1 } from './utils/initWallet';
import * as tokenFactoryV2 from "../artifacts/contracts/TokenFactoryV2.sol/TokenFactoryV2.json";

async function main() {
    const signer = await initWallet1();
    console.log("Deploying Factory");
    const factory = new ethers.ContractFactory(
        tokenFactoryV2.abi, 
        tokenFactoryV2.bytecode,
        signer
    );
    const factoryContract = await factory.deploy(0, "0x2C238c0714f63E2F41BFB531A33D854914d52712");
    await factoryContract.deployed();
    console.log("Completed");
    console.log(`Factory Contract deployed at ${factoryContract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
