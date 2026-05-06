// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC721 {
    function transferFrom(address from, address to, uint256 tokenId) external;
}

contract NFTStaking {
    IERC721 public nft;

    mapping(uint256 => address) public stakedOwner;

    constructor(address _nft) {
        nft = IERC721(_nft);
    }

    function stake(uint256 tokenId) external {
        nft.transferFrom(msg.sender, address(this), tokenId);
        stakedOwner[tokenId] = msg.sender;
    }

    function unstake(uint256 tokenId) external {
        require(stakedOwner[tokenId] == msg.sender, "Not owner");

        nft.transferFrom(address(this), msg.sender, tokenId);
        delete stakedOwner[tokenId];
    }
}
