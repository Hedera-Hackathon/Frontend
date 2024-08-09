import { projectAbi } from "@/abis";
import config from "@/config";
import { projectContract } from "@/constants/contract";
import { ContractWrite } from "@/types/contract";
import { readContract } from "@wagmi/core";
import { useReadContract, useWalletClient } from "wagmi";

type WriteContractParams = {
  functionName: ContractWrite;
  args: any;
};

export const useContractWrite = () => {
  const {data: walletClient} = useWalletClient();
  const mutate = async ({ functionName, args }: WriteContractParams) => {
    try {
      const response = await walletClient?.writeContract({
        address: projectContract,
        functionName,
        args,
        abi: projectAbi,
      });
      return response;
    } catch (error) {
      console.error("Contract write failed", error);
      throw error;
    }
  };
  return { mutate };
};

export const useContractRead = (functionName: any, args?: any) => {

  return useReadContract({
    abi: projectAbi,
    address: projectContract,
    functionName,
    args
  });
}
