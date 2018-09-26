import React from "react";
import { render } from "react-dom";
import './css/style.scss';


import Index from './component/app/app'
class App extends React.Component {
  render() {
    return (
      <div>
        <h3>first app</h3>
        <Index />
      </div>
    );
  }
}


render(<App />, document.getElementById('root'))