import { prepareContractCall, sendTransaction } from "thirdweb";
import { agaraNFTContract } from "./agaraContracts";

export async function agaraMintNFT(account) {
  const tx = prepareContractCall({
    contract: agaraNFTContract,
    method: "function mintTo(address to)",
    params: [account.address],
  });

  await sendTransaction({
    transaction: tx,
    account,
  });

  alert("Mint NFT berhasil!");
}
