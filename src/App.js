import React, { Component } from 'react';

class Time extends React.Component {
  state = {
    time: ''
  };
  getTime() {
    let date = new Date();
    let Year = date.getFullYear();
    let Month = date.getMonth();
    let Day = date.getDate();
    let Hour = date.getHours();
    let Minute = date.getMinutes();
    let Seconds = date.getSeconds();
    let time =
      Year +
      '年' +
      Month +
      '月' +
      Day +
      '日' +
      Hour +
      ':' +
      Minute +
      ':' +
      Seconds;
    return time;
  }
  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        return {
          time: this.getTime()
        };
      });
    }, 1000);
  }
  render() {
    let timetext = this.state.time;
    return (
      <div>
        <h1>{timetext}</h1>
      </div>
    );
  }
}
const divStyle = {
  width: '100px',
  background: "linearGradient(to right, pink, pink) noRepeat center / 100%"
}
export default class App extends Component {
  componentWillMount() {
    console.log('im app');
  }
  render() {
    return (
      <div>
        <h1>im 1222</h1>
        <h2>hello wolrd</h2>
        <Time />
      </div>
    );
  }
}
