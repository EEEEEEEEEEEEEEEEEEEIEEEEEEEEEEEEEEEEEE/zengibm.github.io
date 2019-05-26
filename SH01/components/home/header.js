import React, { Component } from "react";
import api from "../../../fetch/fetch";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from "react-native";
import { MarqueeHorizontal } from "react-native-marquee-ab";

export default class extends Component {
  constructor() {
    super();
    this.state = {
      marquee: []
    };
    this.handlebtn = this.handlebtn.bind(this);
  }
  componentWillMount() {
    api
      .getCommonApi("http://spider.hphrj.com/api/getFetchGonggaoList")
      .then(res => {
        const marquee = [];
        if (res.code == 200) {
          res.data.forEach((v, k) => {
            marquee.push({
              value: !!v.title ? v.title : "",
              label: k
            });
          });
        }
        this.setState({
          marquee
        });
      });
  }
  handlebtn() {}
  render() {
    const pic = "../../static/img/icon_guangbo.png";
    // const marquee = this.state.marquee;
    const { marquee } = this.state;
    return (
      <View>
        <View style={styles.header}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "row"
            }}
          >
            <Image
              source={require(pic)}
              style={{
                width: 26,
                height: 26,
                marginLeft: 8,
                marginRight: 13
              }}
            />
            <Text style={styles.viewtext}>最新公告:</Text>
          </View>
          <MarqueeHorizontal
            textList={marquee}
            speed={60}
            width={230}
            height={44}
            direction={"left"}
            reverse={false}
            bgContainerStyle={{ backgroundColor: "#322e4f" }}
            textStyle={{ fontSize: 16, color: "#fff" }}
            onTextClick={item => {
              alert("" + JSON.stringify(item));
            }}
          />
          <TouchableHighlight
            onPress={() => {
              this.handlebtn();
            }}
          >
            <Text style={styles.button}>客服</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 44,
    backgroundColor: "#322e4f",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingRight: 7
  },
  viewtext: {
    fontSize: 14,
    color: "#fff"
  },
  button: {
    width: 43,
    height: 24,
    lineHeight: 13,
    paddingTop: 8,
    marginRight: 7,
    borderRadius: 3,
    backgroundColor: "#f7cf2a",
    textAlign: "center",
    fontSize: 13,
    color: "#333",
    borderRadius: 3
  }
});
