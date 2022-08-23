import { ethers } from "ethers";
import { initWallet1 } from './utils/initWallet';
import * as ERC20 from "../artifacts/contracts/ERC20/ERC20.sol/ERC20.json";
import * as ERC20Mintable from "../artifacts/contracts/ERC20/ERC20Mintable.sol/ERC20Mintable.json";
import * as ERC20Burnable from "../artifacts/contracts/ERC20/ERC20Burnable.sol/ERC20Burnable.json";
import * as ERC20MintBurn from "../artifacts/contracts/ERC20/ERC20MintBurn.sol/ERC20MintBurn.json";
import * as ERC20AirDrop from "../artifacts/contracts/ERC20/ERC20AirDrop.sol/ERC20AirDrop.json";
import * as ERC20Ownable from "../artifacts/contracts/ERC20/ERC20Ownable.sol/ERC20Ownable.json";
import * as ERC20Pausable from "../artifacts/contracts/ERC20/ERC20Pausable.sol/ERC20Pausable.json";
import * as ERC20MintPause from "../artifacts/contracts/ERC20/ERC20MintPause.sol/ERC20MintPause.json";
import * as ERC20BurnPause from "../artifacts/contracts/ERC20/ERC20BurnPause.sol/ERC20BurnPause.json";
import * as ERC20MintBurnPause from "../artifacts/contracts/ERC20/ERC20MintBurnPause.sol/ERC20MintBurnPause.json";
import * as ERC20FlashMint from "../artifacts/contracts/ERC20/ERC20FlashMint.sol/ERC20FlashMint.json";
import * as ERC20Snapshots from "../artifacts/contracts/ERC20/ERC20Snapshot.sol/ERC20Snapshot.json";

async function main() {
    const signer = await initWallet1();
    await deployERC20(signer);
    await deployERC20Mintable(signer);
    await deployERC20Burnable(signer);
    await deployERC20MintBurn(signer);
    await deployERC20AirDrop(signer);
    await deployERC20Ownable(signer);
    await deployERC20Pausable(signer);
    await deployERC20MintPause(signer);   
    await deployERC20BurnPause(signer);  
    await deployERC20MintBurnPause(signer);  
    await deployERC20FlashMint(signer);  
    await deployERC20Snapshots(signer);           
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

async function deployERC20(signer: ethers.Wallet) {
  console.log("Deploying ER20 contract");
  const contractFactory = new ethers.ContractFactory(
    ERC20.abi,
    ERC20.bytecode,
    signer
  );
  const ERC20Contract = await contractFactory.deploy();
  console.log("Awaiting confirmations");
  await ERC20Contract.deployed();
  console.log(`ER20 Contract deployed at ${ERC20Contract.address}`);
}

async function deployERC20Mintable(signer: ethers.Wallet) {
  console.log("Deploying ERC20Mintable contract");
  const contractFactory = new ethers.ContractFactory(
    ERC20Mintable.abi,
    ERC20Mintable.bytecode,
    signer
  );
  const ERC20Contract = await contractFactory.deploy();
  console.log("Awaiting confirmations");
  await ERC20Contract.deployed();
  console.log(`ERC20Mintable Contract deployed at ${ERC20Contract.address}`);
}

async function deployERC20Burnable(signer: ethers.Wallet) {
  console.log("Deploying ERC20Burnable contract");
  const contractFactory = new ethers.ContractFactory(
    ERC20Burnable.abi,
    ERC20Burnable.bytecode,
    signer
  );
  const ERC20Contract = await contractFactory.deploy();
  console.log("Awaiting confirmations");
  await ERC20Contract.deployed();
  console.log(`ERC20Burnable Contract deployed at ${ERC20Contract.address}`);
}

async function deployERC20MintBurn(signer: ethers.Wallet) {
  console.log("Deploying ERC20MintBurn contract");
  const contractFactory = new ethers.ContractFactory(
    ERC20MintBurn.abi,
    ERC20MintBurn.bytecode,
    signer
  );
  const ERC20Contract = await contractFactory.deploy();
  console.log("Awaiting confirmations");
  await ERC20Contract.deployed();
  console.log(`ERC20MintBurn Contract deployed at ${ERC20Contract.address}`);
}

async function deployERC20AirDrop(signer: ethers.Wallet) {
  console.log("Deploying ERC20AirDrop contract");
  const contractFactory = new ethers.ContractFactory(
    ERC20AirDrop.abi,
    ERC20AirDrop.bytecode,
    signer
  );
  const ERC20Contract = await contractFactory.deploy();
  console.log("Awaiting confirmations");
  await ERC20Contract.deployed();
  console.log(`ERC20AirDrop Contract deployed at ${ERC20Contract.address}`);
}

async function deployERC20Ownable(signer: ethers.Wallet) {
  console.log("Deploying ERC20Ownable contract");
  const contractFactory = new ethers.ContractFactory(
    ERC20Ownable.abi,
    ERC20Ownable.bytecode,
    signer
  );
  const ERC20Contract = await contractFactory.deploy();
  console.log("Awaiting confirmations");
  await ERC20Contract.deployed();
  console.log(`ERC20Ownable Contract deployed at ${ERC20Contract.address}`);
}

async function deployERC20Pausable(signer: ethers.Wallet) {
  console.log("Deploying ERC20Pausable contract");
  const contractFactory = new ethers.ContractFactory(
    ERC20Pausable.abi,
    ERC20Pausable.bytecode,
    signer
  );
  const ERC20Contract = await contractFactory.deploy();
  console.log("Awaiting confirmations");
  await ERC20Contract.deployed();
  console.log(`ERC20Pausable Contract deployed at ${ERC20Contract.address}`);
}

async function deployERC20MintPause(signer: ethers.Wallet) {
  console.log("Deploying ERC20MintPause contract");
  const contractFactory = new ethers.ContractFactory(
    ERC20MintPause.abi,
    ERC20MintPause.bytecode,
    signer
  );
  const ERC20Contract = await contractFactory.deploy();
  console.log("Awaiting confirmations");
  await ERC20Contract.deployed();
  console.log(`ERC20MintPause Contract deployed at ${ERC20Contract.address}`);
}

async function deployERC20BurnPause(signer: ethers.Wallet) {
  console.log("Deploying ERC20BurnPause contract");
  const contractFactory = new ethers.ContractFactory(
    ERC20BurnPause.abi,
    ERC20BurnPause.bytecode,
    signer
  );
  const ERC20Contract = await contractFactory.deploy();
  console.log("Awaiting confirmations");
  await ERC20Contract.deployed();
  console.log(`ERC20BurnPause Contract deployed at ${ERC20Contract.address}`);
}

async function deployERC20MintBurnPause(signer: ethers.Wallet) {
  console.log("Deploying ERC20MintBurnPause contract");
  const contractFactory = new ethers.ContractFactory(
    ERC20MintBurnPause.abi,
    ERC20MintBurnPause.bytecode,
    signer
  );
  const ERC20Contract = await contractFactory.deploy();
  console.log("Awaiting confirmations");
  await ERC20Contract.deployed();
  console.log(`ERC20MintBurnPause Contract deployed at ${ERC20Contract.address}`);
}

async function deployERC20FlashMint(signer: ethers.Wallet) {
  console.log("Deploying ERC20FlashMint contract");
  const contractFactory = new ethers.ContractFactory(
    ERC20FlashMint.abi,
    ERC20FlashMint.bytecode,
    signer
  );
  const ERC20Contract = await contractFactory.deploy();
  console.log("Awaiting confirmations");
  await ERC20Contract.deployed();
  console.log(`ERC20FlashMint Contract deployed at ${ERC20Contract.address}`);
}

async function deployERC20Snapshots(signer: ethers.Wallet) {
  console.log("Deploying ERC20Snapshots contract");
  const contractFactory = new ethers.ContractFactory(
    ERC20Snapshots.abi,
    ERC20Snapshots.bytecode,
    signer
  );
  const ERC20Contract = await contractFactory.deploy();
  console.log("Awaiting confirmations");
  await ERC20Contract.deployed();
  console.log(`ERC20Snapshots Contract deployed at ${ERC20Contract.address}`);
}



