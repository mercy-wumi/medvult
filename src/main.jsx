import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, lightTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { goerli, sepolia } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import {jsonRpcProvider} from "wagmi/providers/jsonRpc";

const { chains, publicClient } = configureChains(
  [sepolia],
  [jsonRpcProvider({
    rpc: () => ({
      http: "https://ethereum-sepolia.publicnode.com"
    })
  })]
  // [alchemyProvider({ apiKey: process.env.ALCHEMY_KEY }), publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "MedVult EHR",
  projectId: "61dc6ed076b9412c881d08329e5614fc",
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function MainApp({children}) {
  return <React.StrictMode>{children}</React.StrictMode>
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <MainApp>
        <App />
        </MainApp>
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
