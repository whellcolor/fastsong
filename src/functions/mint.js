import { prepareContractCall, sendTransaction } from "thirdweb";

// MINT FUNCTION
async function mintNFT(account) {
  try {
    const transaction = prepareContractCall({
      contract,
      method: "function mintTo(address to)",
      params: [account.address],
    });

    await sendTransaction({
      transaction,
      account,
    });

    alert("Mint berhasil!");
  } catch (err) {
    console.error(err);
    alert("Mint gagal");
  }
}
