/**
 * @flow
 */
'use strict';
import React, {PureComponent} from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
const {connect} = require('react-redux');
const TimerMixin = require('react-timer-mixin');
const SceneUtils = require('../../utils/SceneUtils');

const {risklogin,} = require('../../actions/index');
class FlyLogin extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {

            netData:'',

        }
    }

    //测试redux状态持久化
    doLogin=()=>{
        var params={
            username: "sample_deptB_manager@ilabhz",
            password: 'test1234'
        };
        let promise = this.props.dispatch(risklogin(params));
        promise.then((data) => {
            this.setState({
                netData:'token=='+data.token,
            });

            this.timer = TimerMixin.setTimeout(()=>{
                SceneUtils.gotoScene('Tabs',null,'replace');
            },3000);

        }).catch((err) => {
            let a=100;

        });
    };

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", }}>
                <Text style={{color:'red',fontSize:28,marginTop:50}}>登录页面</Text>
                <View style={{marginTop: 20}}>
                    <Button
                        title="点击将登录状态保存起来"
                        onPress={() =>{this.doLogin()}}
                    />
                </View>

                <Text style={{color:'red',fontSize:28,marginTop:20}}>{this.state.netData}</Text>
            </View>
        );
    }

}
function select(store) {
    return {

    };
}
module.exports = connect(select)(FlyLogin);
