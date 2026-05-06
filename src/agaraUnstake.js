import { prepareContractCall, sendTransaction } from "thirdweb";
import { agaraStakeContract } from "./agaraContracts";

export async function agaraUnstakeNFT(account, tokenId) {
  const tx = prepareContractCall({
    contract: agaraStakeContract,
    method: "function unstake(uint256 tokenId)",
    params: [tokenId],
  });

  await sendTransaction({
    transaction: tx,
    account,
  });

  alert("NFT berhasil di-unstake!");
}
