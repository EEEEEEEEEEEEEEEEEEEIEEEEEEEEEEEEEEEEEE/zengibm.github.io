import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Animated,
  ScrollView,
  TouchableOpacity,
  Easing,
  Linking,
  Dimensions
} from "react-native";
import Carousel from "react-native-snap-carousel";

const WindowWidth = Dimensions.get("window").width;

export default class carousel1 extends Component {
  constructor() {
    super();
    this.state = {
      images: [
        require("../../static/img/index/banner1.png"),
        require("../../static/img/index/banner2.png")
      ]
    };
    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem({ item, index }) {
    return <Image style={styles.image} source={item} key={index} />;
  }

  render() {
    const { images } = this.state;
    return (
      <Carousel
        ref={c => (this._slider1Ref = c)}
        data={images}
        renderItem={this._renderItem}
        sliderWidth={WindowWidth}
        itemWidth={WindowWidth}
        slideStyle={styles.slide}
        autoplay={true}
        autoplayDelay={500}
        autoplayInterval={3000}
        loop={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: WindowWidth,
    height: WindowWidth / 2.5
  },
  image: {
    width: WindowWidth,
    height: WindowWidth / 2.5
  },
  slide: {
    width: WindowWidth,
    height: WindowWidth / 2.5
  },
  box: {
    flex: 1,
    width: WindowWidth,
    height: WindowWidth / 2.5,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold"
  }
});
