import React from "react";
import { render } from "react-dom";
import './css/style.scss';
class App extends React.Component {
  render() {
    return (
      <div>
        <h6>first app</h6>
      </div>
    );
  }
}


render(<App />, document.getElementById('root'))