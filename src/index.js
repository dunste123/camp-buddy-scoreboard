import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
// import * as serviceWorker from "./serviceWorker";

root.render(<App/>);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
