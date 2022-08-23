import Web3 from "web3";
import { Contract, ethers } from "ethers";
import { initWallet1, initWallet2, initWallet3 } from "./utils/initWallet";
import * as ERC20AirDropJson from "../artifacts/contracts/ERC20/ERC20AirDrop.sol/ERC20AirDrop.json";
import { ERC20AirDrop } from "../typechain-types";
import keccak256 from "keccak256";
import MerkleTree from "merkletreejs";

const toWei = (num: number) => ethers.utils.parseEther(num.toString());
const fromWei = (num: number) => ethers.utils.formatEther(num);

async function main() {
  const signer = await initWallet3();
  const { erc20Address, addressEligible } = validations();
  const ERC20AirDropContract: ERC20AirDrop = new Contract(
    erc20Address,
    ERC20AirDropJson.abi,
    signer
  ) as ERC20AirDrop;
  console.log(`Claiming Tokens`);
  // Get elligble addresses and then hash them to get leaf nodes
  const address = [
    "0xfb542204Ed21212258a8DD6288C96676970382B7",
    "0x531d57798205714B688cCEA0b5D99427c1B184F1",
    "0x47fd5f1600721D53d64F7B161FF79152C31408CE",
  ];
  const leafNodes = address.map((address) => keccak256(address));
  // Generate merkleTree from leafNodes
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
  console.log(merkleTree);
  //Every eligible account claims their airdrop
  const proof = merkleTree.getHexProof(keccak256(addressEligible));
  console.log(proof);
  //const proof = Web3.utils.asciiToHex(addressEligible);
  console.log(`claiming`);
  const result = await ERC20AirDropContract.claim(proof);
  console.log(result)
  console.log(`done! you can check your balance`);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

function validations() {
  if (process.argv.length < 3) {
    throw new Error("ERC20 address missing");
  }
  const erc20Address = process.argv[2];
  if (process.argv.length < 4) {
    throw new Error("Missing address to claim the Tokens");
  }
  const addressEligible = process.argv[3];

  return { erc20Address, addressEligible };
}
