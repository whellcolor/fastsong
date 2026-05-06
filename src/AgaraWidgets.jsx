// ================= IMPORT =================
import {
  BridgeWidget,
  CheckoutWidget,
  SwapWidget,
  TransactionWidget,
} from "thirdweb/react";

import { prepareTransaction, toUnits } from "thirdweb";
import { ethereum, arbitrum } from "thirdweb/chains";
import { agaraClient } from "./agaraClient";

// ================= MAIN COMPONENT =================
export default function AgaraWidgets() {
  return (
    <div style={{ display: "grid", gap: "20px" }}>
      
      {/* 🔁 BRIDGE */}
      <BridgeWidget
        client={agaraClient}
        currency="USD"
        theme="dark"
      />

      {/* 🔄 BRIDGE + PREFILL SWAP */}
      <BridgeWidget
        client={agaraClient}
        swap={{
          prefill: {
            buyToken: {
              chainId: 8453, // Base
              tokenAddress: "0xd8519A8b8825Aa0DcC73aAD572f447FAE102fe88",
            },
            sellToken: {
              chainId: 137, // Polygon
            },
          },
        }}
        buy={{
          amount: "100",
          chainId: 8453,
          tokenAddress: "0xd8519A8b8825Aa0DcC73aAD572f447FAE102fe88",
          buttonLabel: "Buy Token",
        }}
      />

      {/* 💳 CHECKOUT */}
      <CheckoutWidget
        client={agaraClient}
        chain={arbitrum}
        amount="0.01"
        seller="0x123...abc"
        supportedTokens={{
          8453: [
            {
              address: "0xd8519A8b8825Aa0DcC73aAD572f447FAE102fe88",
              name: "USDC",
              symbol: "USDC",
            },
          ],
        }}
      />

      {/* 🔄 SWAP */}
      <SwapWidget
        client={agaraClient}
        prefill={{
          buyToken: {
            chainId: 8453,
            tokenAddress: "0xd8519A8b8825Aa0DcC73aAD572f447FAE102fe88",
          },
          sellToken: {
            chainId: 137,
          },
        }}
      />

      {/* 💸 TRANSACTION SIMPLE */}
      <TransactionWidget
        client={agaraClient}
        transaction={prepareTransaction({
          to: "0xd8519A8b8825Aa0DcC73aAD572f447FAE102fe88",
          chain: ethereum,
          client: agaraClient,
        })}
        amount="0.1"
      />

      {/* 💸 TRANSACTION WITH VALUE */}
      <TransactionWidget
        client={agaraClient}
        transaction={prepareTransaction({
          to: "0xd8519A8b8825Aa0DcC73aAD572f447FAE102fe88",
          chain: ethereum,
          client: agaraClient,
          value: toUnits("0.001", 18),
        })}
        connectOptions={{
          connectModal: {
            size: "compact",
            title: "Sign in",
          },
        }}
      />
    </div>
  );
}
