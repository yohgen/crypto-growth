<div align='center'>
  <img src='https://user-images.githubusercontent.com/34924430/119693319-d5e4bd00-be54-11eb-8d76-9bc469ac82f0.png' />
</div>
<div align='center'>
  <img src='https://api.netlify.com/api/v1/badges/335e2eb7-74d6-4ef8-9f49-8f51daf63f7b/deploy-status' />
</div>

# [crypto-growth] A Cryptocurrency Growth monitoring app

A [React](https://reactjs.org/) web app that streams 24h price changes for cryptocurrency pairs of your choosing from [Binance](https://www.binance.com/en) WebSocket.

# [🛠️] Development

The app supports regular `create-react-app` [(link)](https://github.com/facebook/create-react-app) functionality:

```bash
npm start   # to start live dev environment

npm build   # to create an optimized build ready for production
```

# [📡] WebSocket and Store

The main part of the app happens to be in [store.js](/src/utils/store.js), which I highly suggest to visit since it contains comments useful for development. The file itself implements Flux-like functionality with `useContext` as well as WebSocket connection.

Another thing to note here is the WebSocket. In order to use WebSocket (without external premade components) one has to use two `useEffect`'s:
* One is needed to initiate a WebSocket connection, so it's also prudent to run it only once (i.e. with empty `[]` deps), or maybe add a custom logic to reconnect on failure/closure.
* And the second one is for receiving messages. It has _no_ deps for a single reason: every time `useEffect` is called, it creates its own closure that remembers all the variables that were called inside its function body, which in turn means that if we call `useEffect` once, it will use the same `useState` variables that were intially created (and because of immutability rule, each time `useState` variable changes, it actually creates new variable that the intial `useEffect` has no access to, and instead uses the old one). In short, we need to 'rebind' WS message callback on each iteration so that it uses the most fresh `useState` variables.

# [📝] License

This work is licensed under [GPL-3.0-or-later](https://spdx.org/licenses/GPL-3.0-or-later.html) (see [NOTICE](/NOTICE)). <br>For attributions of open source work incorporated here see [ATTRIBUTIONS.md](/ATTRIBUTIONS.md).
