import { createWallet, inAppWallet } from "thirdweb/wallets";

// 🌐 Social Login (Google + Email)
const socialWallet = inAppWallet({
  auth: {
    options: [
      "google",
      "email",
    ],
  },
});

// 🦊 MetaMask
const metamask = createWallet("io.metamask");

// 🔗 WalletConnect (Trust Wallet dll)
const walletConnect = createWallet("walletConnect");

// 📱 Optional: Coinbase
const coinbase = createWallet("com.coinbase.wallet");

export const agaraWallets = [
  socialWallet,
  metamask,
  walletConnect,
  coinbase,
];
