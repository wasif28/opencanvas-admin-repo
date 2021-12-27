import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import useWeb3 from "./useWeb3";
import environment from "../utils/Environment";
import { getBep20Contract } from "../utils/contractHelpers";
import BigNumber from "bignumber.js";

export const DistributeMultiple = () => {
  const { account } = useWeb3React();
  const web3 = useWeb3();
  const tokenAddress = environment.disperser;
  const contract = getBep20Contract(tokenAddress, web3);
  const DisperseMulti = useCallback(
    async (allTotal, walletArr, userPrices) => {
      try {
        console.log("total value::::", allTotal);

        const tempArray = [...userPrices];
        for (let elem = 0; elem < tempArray.length; elem++) {
          tempArray[elem] = new BigNumber(tempArray[elem]).multipliedBy(
            new BigNumber(10).pow(18)
          );
        }

        const gas1 = await contract.methods
          .distributeMultiple(walletArr, tempArray)
          .estimateGas({
            from: account,
            value: new BigNumber(allTotal).multipliedBy(
              new BigNumber(10).pow(18)
            ),
            gasPrice: "10000000000",
          });
        // return 0;
        // let dummy = 3000 * allTotal?.length;
        let gas = new BigNumber(gas1).plus(new BigNumber("21000"));
        let trxPrice = gas.multipliedBy(new BigNumber("10000000000"));
        trxPrice = new BigNumber(trxPrice).dividedBy(new BigNumber(10).pow(18));

        let bnbNeedPerTx = trxPrice / userPrices.length;

        console.log("trxPrice", trxPrice);
        console.log("bnbNeedPerTx", bnbNeedPerTx);

        for (let elem = 0; elem < userPrices.length; elem++) {
          userPrices[elem] = new BigNumber(
            userPrices[elem] - bnbNeedPerTx
          ).multipliedBy(new BigNumber(10).pow(18));
        }

        let toSend = allTotal - trxPrice;
        toSend = new BigNumber(toSend).multipliedBy(new BigNumber(10).pow(18));
        // toSend = toSend.plus(new BigNumber(100))
        console.log("userPrices", userPrices);
        const nfts = await contract.methods
          .distributeMultiple(walletArr, userPrices)
          .send({
            from: account,
            gas: gas,
            gasPrice: "10000000000",
            value: toSend,
          })
          .on("transactionHash", (tx) => {
            return tx.transactionHash;
          })
          .catch((error) => {
            console.log("erorrrr in catcccchhh", error);
            return false;
          });
        return nfts;
      } catch (error) {
        console.log("error::::", error);
        return false;
      }
    },
    [account, contract]
  );

  return { DisperseMulti: DisperseMulti };
};

export default DistributeMultiple;
