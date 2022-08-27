import { Contract, BigNumber } from "ethers";
import { initWallet1 } from "../utils/initWallet";
import * as ERC20_ABI from "../../artifacts/contracts/ERC20/ERC20.sol/ERC20.json";
import IUniswapV2Router02 from "@uniswap/v2-periphery/build/IUniswapV2Router02.json";
import IUniswapV2Factory from "@uniswap/v2-core/build/IUniswapV2Factory.json";
import IUniswapV2Pair from "@uniswap/v2-core/build/IUniswapV2Pair.json";
import { ERC20 } from '../../typechain-types'
import { ethers } from "hardhat";

const toWei = (num: number) => ethers.utils.parseEther(num.toString())
const toUSDC = (num: number) =>  (num * (10 ** (6))).toString();

async function main() {
  const signer = await initWallet1();
  const uniswapV2Router02 = new Contract(
    "0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
    //"0x4302CCa5982403a31edbA0fc2f77811490f7D9F2", 
    IUniswapV2Router02.abi,
    signer
  );

   const address = await uniswapV2Router02.WETH();
   const addressFactory = await uniswapV2Router02.factory();
   console.log("WETH");
   console.log(address);
   console.log("factory");
   console.log(addressFactory);

  const uniswapV2Factory = new Contract(
    "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    IUniswapV2Factory.abi,
    signer
  );

  //token 0
  const ERC20_0: ERC20 = new Contract(
    "0x1FD9E61afb18F572bD37204F557400b858398efC",
    ERC20_ABI.abi,
    signer
  ) as ERC20;

  console.log("Giving allowance to token 0 -> " + ERC20_0.address + " -> " + uniswapV2Router02.address);
  let tx = await ERC20_0.approve("0x7a250d5630b4cf539739df2c5dacb4c659f2488d", toWei(2));
  const result = await tx.wait();
  //console.log(result);
  const allowance_0 = await ERC20_0.allowance(signer.address, uniswapV2Router02.address);
  console.log(allowance_0);

  //token 1
  const ERC20_1: ERC20 = new Contract(
    "0xb7a4F3E9097C08dA09517b5aB877F7a917224ede",
    //"0x697A44416B503eCb1fed64c73E11C3aEC7368A31",
    ERC20_ABI.abi,
    signer
  ) as ERC20;

  console.log("Giving allowance to token 1 -> " + ERC20_1.address + " - " + uniswapV2Router02.address);
  tx = await ERC20_1.approve("0x7a250d5630b4cf539739df2c5dacb4c659f2488d", toUSDC(2));
  const result_1 = await tx.wait();
  //console.log(result_1);
  const allowance_1 = await ERC20_1.allowance(signer.address, uniswapV2Router02.address);
  console.log(allowance_1);
  console.log("adding liquidity... uniswap v2")
  const date = new Date();
  date.setMinutes(date.getMinutes() + 30); 

  console.log(`with parameters: Token_0: ${ERC20_0.address},  Token_1: ${ERC20_1.address}, Amount_0: ${toWei(1)}, Amount_1: ${toWei(0.0001)}, To: ${signer.address},  deadline: ${date.getTime()}`)

   const liquidity = await uniswapV2Router02.addLiquidity(
     ERC20_0.address,
     ERC20_1.address,
     toWei(1),
     toUSDC(1),
     toWei(1),
     toUSDC(1),
     signer.address,
     date.getTime()
    //,{gasLimit: 1000000}
  );
  const r = await liquidity.wait()
  console.log(r)

  const pairAddress = await uniswapV2Factory.getPair(
    ERC20_0.address,
    ERC20_1.address
  );
  
  console.log("Pair address:");
  console.log(pairAddress);
 if(pairAddress === "0x0000000000000000000000000000000000000000") return;

  //0x073551e75AcE713297E160be7Ec9acF3f992C7fc

  const uniswapPair = new Contract(pairAddress, IUniswapV2Pair.abi, signer);
  console.log("Pair addresses");
  const reserves = await uniswapPair.getReserves();
  console.log(reserves);
  console.log("reserves");
  console.log(reserves[0]);
  console.log(reserves[1]);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
