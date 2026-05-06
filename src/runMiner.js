function runMiner() {
  if (!mining) return;

  const hash = Math.random() * 50;

  fetch("http://localhost:3000/mine", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      address: userAddress,
      hash: hash
    })
  });

  setTimeout(runMiner, 1000);
}
