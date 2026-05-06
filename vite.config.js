import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import wasm from 'vite-plugin-wasm';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), wasm()],
  optimizeDeps: {
    exclude: ["@ffmpeg/ffmpeg", "@ffmpeg/util"],
  },
});


const response = await fetch("https://api.thirdweb.com/v1/transactions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-secret-key": "G8vNXJOMTp_TuTQV3kgFIQyKAz_L21F3a9SW57zKanPEqK7iGCHyTUcHKuujJR1q3G2h7d4VHaIlDeR3yn0Wjw",
  },
  body: JSON.stringify({
    chainId: "84532",
    from: "3ea7634968af4a7c90b17914bcf7d4bb",
    transactions: [
      {
        type: "contractCall",
        contractAddress: "0x...",
        method: "function mintTo(address to, uint256 amount)",
        params: ["0x...", "100"],
      },
    ],
  }),
});
