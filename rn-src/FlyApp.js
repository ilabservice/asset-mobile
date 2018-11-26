/**
 * @providesModule FlyApp
 * @flow
 */
'use strict';
import React, {PureComponent} from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    NativeModules,
    NativeAppEventEmitter,
    SafeAreaView,
    AsyncStorage,
    BackHandler,
    InteractionManager, DeviceEventEmitter, Platform
} from 'react-native';
import {connect} from 'react-redux';
import AppNavigator from "./pages/FlyRouters";
const StartPageView = require("./pages/splash/StartPageView");
const TimerMixin = require('react-timer-mixin');
class App extends PureComponent {
    constructor(props) {
        super(props);
        (this : any).skip = this.skip.bind(this);

        this.state={
            type:'startPage'
        };
    }


    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.time = TimerMixin.setTimeout(()=>{
                this.skip();
            },3000);
        })

    }

    skip(){
        clearInterval(this.time);
        this.setState({type:'mainPage'});
    }

    //default：黑色文字（默认)     light-content：白色文字
    render() {
        let view = (this.state.type=='startPage')?(<StartPageView skipfunc={this.skip}/>):(<AppNavigator/>);
        return (
            <View style={styles.container}>
                {view}
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    }
});

function select(store) {
    return {

    };
}

module.exports = connect(select)(App);
