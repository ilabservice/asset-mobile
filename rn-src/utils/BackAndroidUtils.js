/**
 *
 * @flow
 * for Android
 *
 */
import React from 'react';
import {ToastAndroid,BackHandler,} from 'react-native';
import SceneUtils from "./SceneUtils";

var BackAndroidUtils = {
    addBackAndroidListener:()=>{
        BackHandler.addEventListener('hardwareBackPress', () => {
            return handleBack();
        });
    },

    removeBackAndroidListener:()=>{
        BackHandler.removeEventListener('hardwareBackPress', null);
    },

    customerHandleBack:(handleBack)=>{
        let routes = SceneUtils.getCurrentRoutes();
        let lastRoute = routes[routes.length - 1];
        lastRoute.handleBack = handleBack;
    },

}

function handleBack() {
    var time;
    const routers = SceneUtils.getCurrentRoutes();
    if (routers.length > 1) {

        const top = routers[routers.length - 1];
        // if (top.ignoreBack) {
        //     return true;
        // }
        const handleBack = top.handleBack;
        if (handleBack) {
            return handleBack();
        }
        SceneUtils.goBack();
        return true;
    } else {
        if (this.lastBackPressed && this.lastBackPressed + 2000 > Date.now()) {
            return false;
        }
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        return true;
    }
};

module.exports = BackAndroidUtils;
