import { ethers } from "ethers";
import { initWallet1 } from './utils/initWallet';
import * as tokenPriceConsumer from "../artifacts/contracts/TokenPriceConsumer.sol/TokenPriceConsumer.json";

async function main() {
    const signer = await initWallet1();
    console.log("Deploying Token Price Consumer");
    const factory = new ethers.ContractFactory(
        tokenPriceConsumer.abi, 
        tokenPriceConsumer.bytecode,
        signer
    );
    const priceConsumer = await factory.deploy();
    await priceConsumer.deployed();
    console.log("Completed");
    console.log(`Token Price Consumer Contract deployed at ${priceConsumer.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
