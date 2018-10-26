"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactDOM = require("react-dom");
function renderApp() {
    ReactDOM.hydrate(/>,, document.getElementById('app'));
}
window.onload = function () {
    renderApp();
};
