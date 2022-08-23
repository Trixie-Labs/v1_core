import Web3 from 'web3'
import { Contract, ethers } from 'ethers'
import { initWallet1 } from './utils/initWallet'
import * as tokenFactory from '../artifacts/contracts/TokenFactory.sol/TokenFactory.json'
import { TokenFactory } from '../typechain-types'

async function main() {
  const signer = await initWallet1()
  const { factoryAddress, tokenToCloneAddress, tokenName, tokenSymbol, tokenDecimals, tokenTotalSupply } = validations();
  const tokenFactoryContract: TokenFactory = new Contract(
    factoryAddress,
    tokenFactory.abi,
    signer,
  ) as TokenFactory
  console.log(`Cloning ERC20`)

  //https://docs.ethers.io/v5/api/contract/contract/#Contract--events
 tokenFactoryContract.once('TokenCreated', (data) => {
    console.log(`ERC20 cloned! address at ${data}`);
  })

  await tokenFactoryContract.createERC20(
    tokenToCloneAddress,
    tokenName,
    tokenSymbol,
    tokenDecimals,
    tokenTotalSupply,
  )
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})

function validations() {
  if (process.argv.length < 3) {
    throw new Error('Factory address missing')
  }
  const factoryAddress = process.argv[2]
  if (process.argv.length < 4) {
    throw new Error('ERC20 address to clone missing')
  }
  const tokenToCloneAddress = process.argv[3]
  if (process.argv.length < 5) {
    throw new Error('New Token name missing')
  }
  const tokenName = process.argv[4]
  if (process.argv.length < 6) {
    throw new Error('New Token symbol missing')
  }
  const tokenSymbol = process.argv[5]
  if (process.argv.length < 7) {
    throw new Error('New Token decimals missing')
  }
  const tokenDecimals = process.argv[6]
  if (process.argv.length < 8) {
    throw new Error('New Token total supply missing')
  }
  const tokenTotalSupply = process.argv[7]
  return { factoryAddress, tokenToCloneAddress, tokenName, tokenSymbol, tokenDecimals, tokenTotalSupply }
}

