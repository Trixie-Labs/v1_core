[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Encode-Club-Solidity-Group-14/project_week_02/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/Encode-Club-Solidity-Group-14/project_week_02/tree/main)
[![codecov](https://codecov.io/gh/Encode-Club-Solidity-Group-14/project_week_02/branch/main/graph/badge.svg?token=ZISTHFFZFW)](https://codecov.io/gh/Encode-Club-Solidity-Group-14/project_week_02)

# Trixie Token management 

description about the project goes here ...


**Getting Started**

Before everything, clone the project:

```
https://github.com/Encode-Club-Solidity-Group-14/token-management-smart-contract.git
```

**Building**

```
yarn install
```

```
yarn hardhat compile
```

**Tests**

```
yarn hardhat test
```

**Coverage check**

```
npx hardhat coverage
```

# Scritps Usage

**Deploying Tokens supported in our platform**

Script: ``deploySupportedToken.ts``

```
yarn ts-node --files .\scripts\deploySupportedToken.ts
```

### Ropsten

- Trixie ER20 Contract deployed at [0x0Cf1C7Fc3e6D1547BD55CBD2E275a7478078473D](https://ropsten.etherscan.io/address/0x1F441bD0E8896E1D6a1D890033Ea82Bd3103dF0e)
- Trixie ERC20Mintable Contract deployed at [0x7880e7f542BEa49271c90A90Dd572a2140391795](https://ropsten.etherscan.io/address/0x7880e7f542BEa49271c90A90Dd572a2140391795)
- Trixie ERC20Burnable Contract deployed at [0x74a5cbC84b1F9e8c615146b1977287F37492Ae31](https://ropsten.etherscan.io/address/0x74a5cbC84b1F9e8c615146b1977287F37492Ae31)
- Trixie ERC20MintBurn Contract deployed at [0xA0dE07D8Cdcf2807219891d1a975E7453183e0aB](https://ropsten.etherscan.io/address/0xA0dE07D8Cdcf2807219891d1a975E7453183e0aB)
- Trixie ERC20AirDrop Contract deployed at [0xF6EF2d0859EA664C0CA2324722889AF3a6dE5b59](https://ropsten.etherscan.io/address/0xF6EF2d0859EA664C0CA2324722889AF3a6dE5b59)
- Trixie ERC20Ownable Contract deployed at [0xEbeaf3E82024Cb4766eF414854fe9fd06f4A0FdB](https://ropsten.etherscan.io/address/0xEbeaf3E82024Cb4766eF414854fe9fd06f4A0FdB)
- Trixie ERC20Pausable Contract deployed at [0x9D2516cf23AE80b1A40F16fCb90EC535Fbc38622](https://ropsten.etherscan.io/address/0x9D2516cf23AE80b1A40F16fCb90EC535Fbc38622)
- Trixie ERC20MintPause Contract deployed at [0xc25bebb97236dd17472AF0Ef1a1B491583825F58](https://ropsten.etherscan.io/address/0xc25bebb97236dd17472AF0Ef1a1B491583825F58)
- Trixie ERC20BurnPause Contract deployed at [0x9DE68fFC591246A390F1bE83F7B1972f0E3bBB94](https://ropsten.etherscan.io/address/0x9DE68fFC591246A390F1bE83F7B1972f0E3bBB94)
- Trixie ERC20MintBurnPause Contract deployed at [0xa5766e54FD492635fDa25C64915B0a745C6f8912](https://ropsten.etherscan.io/address/0xa5766e54FD492635fDa25C64915B0a745C6f8912)
- Trixie ERC20FlashMint Contract deployed at [0xC802f89b2b8ad815a1bb4CF9Da3DDdc60b25267A](https://ropsten.etherscan.io/address/0xC802f89b2b8ad815a1bb4CF9Da3DDdc60b25267A)
- Trixie ERC20Snapshots Contract deployed at [0x3863be412f3B44312E7A0b55298E56ac54aDEfeC](https://ropsten.etherscan.io/address/0x3863be412f3B44312E7A0b55298E56ac54aDEfeC)

### Kovan

- ERC20 0xFBFCdc423b57d9Ec13A9937b764d7A7f9D5D8EE8
- ERC20Mintable 0x43105B041E6061A592A9763Af56447a51709932A
- ERC20Burnable 0x294eb269DD01e2700dB044F9fA9bF86dBf71aB45
- ERC20MintBurn 0xbCe3A7084aA6C74D212B36863cA7cCddcf15AB99
- ERC20AirDrop 0x442b3f9b04882fD61F28B05e2F29aB2eA7FA8B65
- ERC20Ownable 0xDF65B5F6f59796Beb2ac4abAe81126dD25B3CFd2
- ERC20Pausable 0x3ACc0eDEb0E81ae604f30c6BD43A936426974655
- ERC20MintPause 0x6D9C62164d5da6721683771B4B6957113dECBFF2
- ERC20BurnPause 0x3473d3f8fAdfCd45A6d997946023a7E8a70835D4
- ERC20MintBurnPause 0x0041Fd737A0cB5f526EcdfFA018347e944Fe8d8A
- ERC20FlashMint 0xD2d1801c72a9885c7E4a9Ab92064dbA41E0B5F0b
- ERC20Snapshots 0xC70203a256a124cD130F8FFDB9c8be861779375b

**Factory Responsible for contract Cloning**

Script: ``deployFactory.ts``

```
yarn ts-node --files .\scripts\deployFactory.ts
```

### Ropsten

- Trixie ER20 Factory deployed at [0x5E0f0240dE7Ff0d80a3eead4c1350C2a2Ba07fDe](https://ropsten.etherscan.io/address/0x5E0f0240dE7Ff0d80a3eead4c1350C2a2Ba07fDe)

### Kovan

- Trixie ER20 Factory deployed at 0x42da1D68EF9889E9AC71Ad323797B6F046588b4b

**Cloning ERC20**

This script can be used to clone all ER20 tokens except by the ER20AirDrop. ER20AirDrop requires two additional parameters to be deployed

Script: ``cloneERC20.ts {factory_address} {token_to_be_clone_address} {new_token_name} {new_token_symbol} {new_token_decimals} {new_token_totalSupply}``

```
yarn ts-node --files .\scripts\clone_ERC20.ts 0x801C6E48a292789FaBA743AC6f1656dEc3DbBb97 0x30B868ea1E44676E0EFB61b91969F762402eb835 TRIXIE TRX 18 100000000000000
```

**Cloning ERC20 AirDrop**

TODO

