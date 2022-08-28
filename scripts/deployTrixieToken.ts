import { ethers } from "ethers";
import { initWallet1 } from './utils/initWallet';
import * as trixieToken from "../artifacts/contracts/TrixieToken.sol/TrixieToken.json";

async function main() {
    const signer = await initWallet1();
    console.log("Deploying Trixie Token");
    const trixie = new ethers.ContractFactory(
        trixieToken.abi, 
        trixieToken.bytecode,
        signer
    );
    const factoryContract = await trixie.deploy();
    await factoryContract.deployed();
    console.log("Completed");
    console.log(`Trixie ERC20 deployed at ${factoryContract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
