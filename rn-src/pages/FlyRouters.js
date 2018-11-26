/**
 * @flow
 */
'use strict';
import React, {PureComponent} from 'react';
const {connect} = require('react-redux');
import { Platform,StyleSheet} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
const SceneUtils = require('../utils/SceneUtils');
const NetworkService = require('../utils/NetworkService');
//页面
const FlyLogin = require('./login/FlyLogin');
const FlyTabsView = require('./FlyTabsView');
const StartPageView = require("./splash/StartPageView");


const Screen1 = require('./Screen1');
const Screen2 = require('./Screen2');
const Screen3 = require('./Screen3');

const RouteList = {
    'Tabs':FlyTabsView,
    'FlyLogin': FlyLogin,
    'startView':StartPageView,


    'Screen1':Screen1,
    'Screen2':Screen2,
    'Screen3':Screen3,

};
var routeConfigs = {};
Object.keys(RouteList).forEach((key) => {
    routeConfigs[key] = {};
    routeConfigs[key].screen = RouteList[key];
});


class FlyRouters extends PureComponent {
    componentDidMount() {
        NetworkService.setToken(this.props.token);

    }

    render() {
        const stackNavigatorConfig = {
            initialRouteName:this.props.token?'Tabs':'FlyLogin',
            initialRouteParams: {user: ''},
            navigationOptions: ({navigation}) => {
                SceneUtils.setStackNavigation(navigation);
                return {
                    header: null,
                    swipeEnabled: false,
                    animationEnabled: false,
                    gesturesEnabled: true,
                }
            },
            mode: Platform.OS === 'ios' ? 'card' : 'modal',
            headerMode:'float',  // screen   no
            headerBackTitleVisible:true,
            headerTransitionPreset:'fade-in-place',//uikit   when headerMode: float is enabled.

        };

        const AppNavigator = createStackNavigator(routeConfigs,stackNavigatorConfig);

        return (<AppNavigator
             onNavigationStateChange={(preState, newState, action) => {
                 SceneUtils.setNavigationStateChangeInfo(preState, newState, action)
             }}
            />);
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

function select(store) {
    return {
        token:store.login.token,
    };
}
module.exports = connect(select)(FlyRouters);