/**
 *
 *
 * @providesModule FlyTabsView
 * @flow
 *
 */
'use strict';
import React, {PureComponent} from 'react';
import {
    View,
    Text,
    DeviceEventEmitter,
    InteractionManager,
    AppState,
    Platform
} from 'react-native';
import {connect} from 'react-redux';
import { createBottomTabNavigator, TabBarBottom, createAppContainer } from 'react-navigation';
const SceneUtils = require('../utils/SceneUtils');
import Ionicons from 'react-native-vector-icons/Ionicons';
const FlyScreenHome = require('./home/FlyScreenHome');
const FlyScreenMine = require('./me/FlyScreenMine');

const FlyScreenShare = require('./share/FlyScreenShare');
const FlyScreenDevice = require('./device/FlyScreenDevice');

const tabInfo = [{
    routeName: 'FlyScreenHome',
    screen: FlyScreenHome,
    title: '首页',
    normalImage: 'ios-information-circle',
    selectedImage: 'ios-information-circle'
},{
    routeName: 'FlyScreenDevice',
    screen:FlyScreenDevice,
    title:'设备',
    normalImage: 'ios-options',
    selectedImage: 'ios-options'
},{
    routeName: 'FlyScreenShare',
    screen: FlyScreenShare,
    title: '分享',
    normalImage: 'ios-information-circle',
    selectedImage: 'ios-information-circle'
},{
    routeName: 'FlyScreenMine',
    screen:FlyScreenMine,
    title:'我的',
    normalImage: 'ios-options',
    selectedImage: 'ios-options'
}];

class FlyTabsView extends PureComponent {
    constructor(props) {
        super(props);
        this.initialRouteName = tabInfo[0].routeName;
    }

    _onNavigationStateChange(preState, newState, action) {
        if (newState) {

        }
    }

    render() {
        let routeConfigs = {};
        tabInfo.forEach((item, idx) => {
            routeConfigs[item.routeName] = {
                screen: item.screen,
                navigationOptions: ({navigation}) => ({
                    tabBarLabel: item.title,
                    tabBarIcon: ({focused, tintColor}) => {
                        // SceneUtils.setTabNavigator(navigation,tabInfo);
                        return (
                            <TabBarItem
                                tintColor={tintColor}
                                focused={focused}
                                routeName={item.routeName}
                                normalImage={item.normalImage}
                                selectedImage={item.selectedImage}
                            />
                        )
                    }

                })
            }
        });
        let tabNavigatorConfig = {
            initialRouteName: this.initialRouteName,
            // tabbarComponent: TabBarBottom,
            tabBarPosition: 'bottom',
            swipeEnabled: false, //11
            animationEnabled: false,
            lazy: true,
            backBehavior: 'none',
            tabBarOptions: {
                pressColor:'blue',
                pressOpacity: 0.7,
                activeTintColor:'#6B718C',
                inactiveTintColor: '#B0B5BB',
                indicatorStyle: {height: 0},
                scrollEnabled: false,
                labelStyle: {
                    fontSize: 11,
                    marginTop: -0.5,
                },
                style: {
                    height: 55,
                    borderTopWidth: 0.5,
                    borderTopColor:'green',
                    backgroundColor:'white'
                },
                showIcon: true,
            }
        };

        let TabsContainer = createBottomTabNavigator(routeConfigs, tabNavigatorConfig);
        return (
                <TabsContainer  ref={nav =>{
                    SceneUtils.setTabNavigator(nav,tabInfo)
                }} />
        );
    }
}

class TabBarItem extends PureComponent {
    render() {
        let imgSource = (this.props.focused) ? this.props.selectedImage : this.props.normalImage;
        return (
            <Ionicons name={imgSource} size={25} color={this.props.tintColor} />
        );
    }
}
function select(store) {
    return {

    };
}

module.exports = connect(select)(FlyTabsView);

