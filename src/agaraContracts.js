import { getContract } from "thirdweb";
import { ethereum } from "thirdweb/chains";
import { agaraClient } from "./agaraClient";

export const agaraNFTContract = getContract({
  address: "0xd8519A8b8825Aa0DcC73aAD572f447FAE102fe88",
  chain: ethereum,
  client: agaraClient,
});

export const agaraStakeContract = getContract({
  address: "0xd8519A8b8825Aa0DcC73aAD572f447FAE102fe88",
  chain: ethereum,
  client: agaraClient,
});
