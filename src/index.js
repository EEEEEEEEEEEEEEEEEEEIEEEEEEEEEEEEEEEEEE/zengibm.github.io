import React, { Component } from "react";
import ReactDOM from "react-dom";
import './index.scss'

const App = () => <div >hello wolrd
    <img src={require('./z.jpg')} />
</div>;

ReactDOM.render(<App />, document.getElementById("root"));
