import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { agaraClient } from "./agaraClient";
import { agaraMintNFT } from "./agaraMint";
import { agaraStakeNFT } from "./agaraStake";
import { agaraUnstakeNFT } from "./agaraUnstake";
import { agaraStyles } from "./agaraStyles";
import AgaraWidgets from "./AgaraWidgets";

export default function AgaraApp() {
  const account = useActiveAccount();


  
  return (
    <div style={agaraStyles.body}>
      <div style={agaraStyles.box}>
        <h2>Agara NFT PRO</h2>

        <ConnectButton client={agaraClient} />

        <button
          onClick={() => agaraMintNFT(account)}
          style={agaraStyles.button}
        >
          Mint NFT
        </button>

        <button
          onClick={() => agaraStakeNFT(account, 0)}
          style={agaraStyles.button}
        >
          Stake NFT #0
        </button>

        <button
          onClick={() => agaraUnstakeNFT(account, 0)}
          style={agaraStyles.button}
        >
          Unstake NFT #0
        </button>
      </div>
    </div>

    <AgaraWidgets />
  );
}
