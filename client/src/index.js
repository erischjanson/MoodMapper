
import ReactDOM from "react-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Main />, document.getElementById("root"));
registerServiceWorker();
