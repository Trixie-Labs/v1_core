import Web3 from 'web3'
import { Contract, ethers } from 'ethers'
import { initWallet1 } from './utils/initWallet'
import * as tokenFactory from '../artifacts/contracts/TokenFactory.sol/TokenFactory.json'
import * as ERC20MintableJson from '../artifacts/contracts/ERC20/ERC20Mintable.sol/ERC20Mintable.json'
import { ERC20Mintable } from '../typechain-types'

async function main() {
  const signer = await initWallet1()
  

  if (process.argv.length < 3) {
    throw new Error('address missing')
  }
  const address = process.argv[2]

  const erc20Mintable: ERC20Mintable = new Contract(
    address,
    ERC20MintableJson.abi,
    signer
  ) as ERC20Mintable;

  const transaction = await erc20Mintable.mint(signer.address, 50000000000000);

  
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})

