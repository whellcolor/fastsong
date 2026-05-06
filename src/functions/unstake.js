async function unstakeNFT(account, tokenId) {
  try {
    const tx = prepareContractCall({
      contract: stakingContract,
      method: "function unstake(uint256 tokenId)",
      params: [tokenId],
    });

    await sendTransaction({ transaction: tx, account });

    alert("NFT berhasil di-unstake!");
  } catch (err) {
    console.error(err);
  }
}
