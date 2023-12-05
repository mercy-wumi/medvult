import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { goerli, sepolia } from "wagmi/chains";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import MedVultContextProvider from "./context/MedVultContext.jsx";

const { chains, publicClient } = configureChains(
  [sepolia, goerli],
  [
    jsonRpcProvider({
      rpc: () => ({
        http: "https://ethereum-sepolia.publicnode.com",
      }),
    }),
  ]
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MedVultContextProvider>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <App />
        </RainbowKitProvider>
      </WagmiConfig>
    </MedVultContextProvider>
  </React.StrictMode>
);
