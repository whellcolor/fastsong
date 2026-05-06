// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AgaraReward is ERC20, Ownable {

    mapping(address => uint256) public claimed;

    constructor() ERC20("Agara Reward", "AGR") {}

    // Mint reward (hanya owner / backend)
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    // Claim reward dari backend signature
    function claim(uint256 amount) external {
        require(amount > 0, "Invalid amount");

        claimed[msg.sender] += amount;
        _mint(msg.sender, amount);
    }
}
