import React, { Component } from "react";
import { withRouter } from "react-router-dom";
const TestPage: React.SFC = () => {
  return <div>this is test page</div>;
};

interface IHeaderProps {
  localImageSrc: string;
  onLineImageSrc: string;
}

const Header: React.SFC<IHeaderProps> = (props: IHeaderProps) => {
  const { localImageSrc, onLineImageSrc } = props;
  return (
    <div className="header-container">
      <img src={localImageSrc} />
      <img src={onLineImageSrc} />
    </div>
  );
};

export default class App extends Component {
  render() {
    return (
      <div>
        <TestPage />
      </div>
    );
  }
}

function sum(x: number, y: number): number {
  return x + y;
}

let mysum: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};


