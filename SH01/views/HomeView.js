import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import Header from "../components/home/header";
import Carousel from "../components/home/carousel";

class Home extends Component {
  render() {
    const { login } = this.props;
    console.log(this.props);
    return (
      <View>
        <Header />
        <Carousel />
      </View>
    );
  }
}

const mapState2Props = state => ({
  login: state.login
});

export default connect(mapState2Props)(Home);
