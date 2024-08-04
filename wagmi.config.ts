import { projectAbi, tokenAbi } from "@/abis";
import { defineConfig } from "@wagmi/cli";
import { react } from "@wagmi/cli/plugins";

export default defineConfig([
  {
    out: "src/hooks/contracts/generated/project.ts",
    contracts: [
      {
        name: "Project",
        abi: projectAbi,
      },
    ],
    plugins: [react()],
  },
  {
    out: "src/hooks/contracts/generated/token.ts",
    contracts: [
      {
        name: "Token",
        abi: tokenAbi,
      },
    ],
    plugins: [react()],
  },
]);
