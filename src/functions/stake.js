const stakingContract = getContract({
  address: "0xd8519A8b8825Aa0DcC73aAD572f447FAE102fe88",
  chain: ethereum,
  client: client,
});

async function stakeNFT(account, tokenId) {
  try {
    const tx = prepareContractCall({
      contract: stakingContract,
      method: "function stake(uint256 tokenId)",
      params: [tokenId],
    });

    await sendTransaction({ transaction: tx, account });

    alert("NFT berhasil di-stake!");
  } catch (err) {
    console.error(err);
  }
}
