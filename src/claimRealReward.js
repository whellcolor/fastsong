async function claimRealReward() {
  try {
    const res = await fetch("http://localhost:3000/reward/" + userAddress);
    const data = await res.json();

    const amount = ethers.parseUnits(data.reward.toString(), 18);

    const tx = await contract.claim(amount);
    await tx.wait();

    alert("Reward berhasil diklaim!");
  } catch (err) {
    console.error(err);
  }
}
