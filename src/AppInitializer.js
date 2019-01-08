import React, {Component} from "react";
import ReactDOM from "react-dom";
import App from "./App";

const render = (elementId) => {
  ReactDOM.render(
    React.createElement(App, {}),
    document.getElementById(elementId)
  );
};

const init = elementId => {
  render(elementId);
};

export default init;
