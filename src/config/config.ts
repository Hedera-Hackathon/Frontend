import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { cookieStorage, createStorage, http } from "wagmi";
import { hederaTestnet } from "wagmi/chains";

export const projectId = "a8a94eaa29bf7b1d3a0d94172c58e6ac";

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const wagmiConfig = defaultWagmiConfig({
  chains: [hederaTestnet], // required
  projectId,
  metadata,
  ssr: true,
  transports: {
    [hederaTestnet.id]: http()
  },
  storage: createStorage({
    storage: cookieStorage,
  }),
  enableWalletConnect: true, // Optional - true by default
  enableInjected: true, // Optional - true by default
  enableEIP6963: true, // Optional - true by default
  enableCoinbase: true, // Optional - true by default
});

export default wagmiConfig;
