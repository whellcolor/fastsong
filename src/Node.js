import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Simpan reward user
let rewards = {};

app.post("/mine", (req, res) => {
  const { address, hash } = req.body;

  // Simple logic
  const reward = hash * 0.0001;

  rewards[address] = (rewards[address] || 0) + reward;

  res.json({ reward: rewards[address] });
});

app.get("/reward/:address", (req, res) => {
  res.json({ reward: rewards[req.params.address] || 0 });
});

app.listen(3000, () => console.log("Server jalan"));
