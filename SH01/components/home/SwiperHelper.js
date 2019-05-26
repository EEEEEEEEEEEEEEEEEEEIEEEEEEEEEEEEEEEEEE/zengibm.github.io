import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Animated, ScrollView, TouchableOpacity, Easing, Linking } from 'react-native';
import ViewPager from 'react-native-viewpager';
var PropTypes = require('prop-types');

// const WindowWidth = Dimensions.get('window').width
var IMGS = [
  require("../../static/img/index/banner1.png"),
  require("../../static/img/index/banner2.png")
]
export default class SwiperHelper extends Component {
  constructor(props) {
    super(props);

    var dataSource = new ViewPager.DataSource({ pageHasChanged: (p1, p2) => p1 !== p2 });

    this.state = {
      data: dataSource.cloneWithPages(IMGS),
    }
  }
  _renderPage(data,id)
  {
    return <Image
    source={data}
    style={styles.image} />
  }

  // _renderPage(data, id) {
  //   if (typeof data == 'string') {
  //     return (
  //       <TouchableOpacity style={styles.slide} onPress={() => { }}>
  //         <Image style={styles.image}
  //           resizeMode="stretch"
  //           source={{ uri: data }} />
  //       </TouchableOpacity>
  //     )
  //   } else {
  //     return (
  //       <TouchableOpacity key={id} style={styles.slide} onPress={() => {
  //         if (!!data.link) {
  //           Linking.openURL(data.link);
  //         }
  //       }}>
  //         <Image style={styles.image}
  //           resizeMode="stretch"
  //           source={{ uri: 'http:' + data.mobile_image }} />
  //       </TouchableOpacity>
  //     )
  //   }
  // }
  render() {
    // const { swiperImages = [] } = this.props;
    const {dataSource = []} = this.state
    return (
      <ViewPager
        style={styles.wrapper}
        dataSource={dataSource}
        renderPage={(data, id) => this._renderPage(data, id)}
        isLoop={swiperImages.length > 1}
        autoPlay={swiperImages.length > 1} />
    );
  }
}

// dataSource={dataSource.cloneWithPages(swiperImages.length !== 0 ? IMGS:swiperImages)}
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
    height: WindowWidth / 2.5,
    // justifyContent: 'center',
    // backgroundColor: 'transparent'
  },
  box: {
    flex: 1,
    width: WindowWidth,
    height: WindowWidth / 2.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
})

