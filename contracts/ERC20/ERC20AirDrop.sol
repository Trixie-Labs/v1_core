// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "./IERC20AirDrop.sol";
import "./ERC20Ownable.sol";

/**
 * TODO: describe here this contract 
 * @dev Extension of {ERC20} that allows token holders to destroy both their own
 * tokens and those that they have an allowance for, in a way that can be
 * recognized off-chain (via event analysis).
 */
contract ERC20AirDrop is IERC20AirDrop, ERC20Ownable  {

    bytes32 public _root;
    uint256 public _rewardAmount;
    mapping(address => bool) _claimed;

    /// TODO: add explanation here...
    function airDropTokens(bytes32 root_, uint256 rewardAmount_) public onlyOwner {
        _root = root_;
        _rewardAmount = rewardAmount_;
    }

    /// TODO: add explanation here...
    function claim(bytes32[] calldata proof_) external {
        require(!_claimed[msg.sender], "Already claimed air drop");
        _claimed[msg.sender] = true;
        bytes32 _leaf = keccak256(abi.encodePacked(msg.sender));
        require(
            MerkleProof.verify(proof_, _root, _leaf),
            "Incorrect merkle proof"
        );
        _mint(msg.sender, _rewardAmount);
    }

    /// TODO: add explanation here...
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
     /**
     * @dev Destroys `amount` tokens from the caller.
     *
     * See {ERC20-_burn}.
     */
    function burn(uint256 amount) public virtual {
        _burn(_msgSender(), amount);
    }

    /**
     * @dev Destroys `amount` tokens from `account`, deducting from the caller's
     * allowance.
     *
     * See {ERC20-_burn} and {ERC20-allowance}.
     *
     * Requirements:
     *
     * - the caller must have allowance for ``accounts``'s tokens of at least
     * `amount`.
     */
    function burnFrom(address account, uint256 amount) public virtual {
        _spendAllowance(account, _msgSender(), amount);
        _burn(account, amount);
    }

}