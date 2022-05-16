## 🧱 Prerequisites

- [☊ Node.js](https://nodejs.dev/download/)
- [🧵 Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
- [🖥 VS Code](https://code.visualstudio.com/Download)

## Set up our React App

Run the following command in your terminal to install the blank project, change to the new directory and start the development environment

```bash
yarn create react-app rainbowkit-ankr --template @chakra-ui && cd rainbowkit-ankr && yarn start
```

### Install RainbowKit

Install RainbowKit and its dependencies, [wagmi](https://wagmi-xyz.vercel.app/) and [ethers](https://docs.ethers.io/).

```bash
npm install @rainbow-me/rainbowkit wagmi ethers
```

### Import RainbowKit

Import RainbowKit, wagmi, and ethers to your `index.js` file

```jsx
import '@rainbow-me/rainbowkit/styles.css';

import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { chain, createClient, WagmiProvider } from 'wagmi';
```

### Configure RainbowKit

Configure the wallets, chains and generate the connectors. You will also set up a `wagmi` client in `index.js`

```jsx
// imports

const { chains, provider } = configureChains(
  [chain.mainnet],
  [
    apiProvider.jsonRpc(chain => ({
      rpcUrl: `https://rpc.ankr.com/eth`,
    })),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit & Ankr dApp',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
```

### Wrap your Chakra-UI React App

Wrap your application with `RainbowKitProvider` and `WagmiProvider` in `index.js`

```jsx
function App() {
  return (
    <WagmiProvider client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ChakraProvider theme={theme}>
          <YourChakraReactApp />
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiProvider>
  );
}

root.render(
  <StrictMode>
    <WagmiProvider client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ColorModeScript />
        <App />
      </RainbowKitProvider>
    </WagmiProvider>
  </StrictMode>
);
```

### Add the connect wallet button

Import `ConnectButton` and add the component to your `App.js` file

```jsx
import { ConnectButton } from '@rainbow-me/rainbowkit';

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* styling & components... */}
      <ConnectButton />
      {/* styling & components... */}
    </ChakraProvider>
  );
}
```

### Fix the error

You will see an error regarding webpack and utils, run the following command in your terminal to fix this

```
npm install util
```

### 🎉 Log in with your Wallet of choice

Congratulations! You just created a React App with Ankr, RainbowKit, and Chakra-UI (with built in dark mode 😎)

![2022-05-16 06.28.48.gif](https://ipfs.io/ipfs/bafybeibwizmd2xnhbugx5sevbkeergw23spchc6sqzqvlmpulkgqtchdqu/2022-05-16%2006.28.48.gif)

Next, you can deploy this to a hosting site of your choice. If you do, please comment the link below to share with the community!

+++++++++++++++++++++++++++++++++++++++++++++++

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
