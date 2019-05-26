import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { createNavigator, createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation'

import HomeView from './views/HomeView'
import LiveView from './views/LiveView'
import StudyView from './views/StudyView'
import FindView from './views/FindView'
import MineView from './views/MineView'



const AppNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeView,
            navigationOptions: {
                tabBarLabel: '首页',
            },
        },
        Live: {
            screen: LiveView,
            navigationOptions: {
                tabBarLabel: '直播',
            },
        },
        Study: {
            screen: StudyView,
            navigationOptions: {
                tabBarLabel: '学院',
            },
        },
        Find: {
            screen: FindView,
            navigationOptions: {
                tabBarLabel: '专家',
            },
        },
        Mine: {
            screen: MineView,
            navigationOptions: {
                tabBarLabel: '我的',
            }
        },
    });
export default createAppContainer(AppNavigator);



// export const Apptabnavigator = TabNavigator({
//     Home: {
//         screen: HomeView,
//         navigationOptions: {
//             tabBarLabel: '首页',
//         },
//     },
//     Mine: {
//         screen: MineView,
//         navigationOptions: {
//             tabBarLabel: '我的',
//         }
//     },

// }, {
//         animationEnabled: false, // 切换页面时是否有动画效果
//         tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
//         swipeEnabled: true, // 是否可以左右滑动切换tab
//         backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
//         tabBarOptions: {
//             activeTintColor: '#1890ff', // 文字和图片选中颜色
//             inactiveTintColor: 'gray', // 文字和图片未选中颜色
//             showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
//             indicatorStyle: {
//                 height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
//             },
//             pressOpacity: 0.8,
//             style: {
//                 height: 46,
//                 backgroundColor: '#ffffff',
//                 zIndex: 0,
//                 position: 'relative'
//             },
//             labelStyle: {
//                 fontSize: 11,
//                 paddingVertical: 0,
//                 marginTop: -3,
//             },
//             iconStyle: {
//                 marginTop: -2
//             },
//         },
//     })


// export const AppNavigator = StackNavigator(
//     {
//         Home: { screen: AppTabNavigator, navigationOptions: { header: null } },
//         Mine: { screen: MineView, navigationOptions: { header: null } },
//     },
//     {
//         headerMode: 'screen',
//         initialRouteName: 'Home',
//     }
// );