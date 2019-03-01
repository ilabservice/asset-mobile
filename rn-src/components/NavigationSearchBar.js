/**
 * 通用顶部标题栏
 * Created by meekoma on 2018/3/15.
 */
import React, {PureComponent} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View,TextInput} from 'react-native';
import DeviceUtils from '../utils/DeviceUtils';
import Color from "../common/Color";
import CommonStatusBar from "./CommonStatusBar";
import LinearGradient from 'react-native-linear-gradient';

const SceneUtils = require('../utils/SceneUtils');

export type Props = {
    onPressRight: () => Void;
    onFilter: () => Void;
    rightText: string;
    showfiltercon: boolean;
};


class NavigationSearchBar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static defaultProps = {
        showfiltercon:true
    };

    render() {
        if (DeviceUtils.IS_TABLET) {
            /**
             * 平板布局
             */
            return (
                <View style={styles.titleBar}>

                </View>
            )
        } else {
            /**
             * 手机布局
             */
            return (
                <View style={{width: DeviceUtils.WIDTH, height: 44 + DeviceUtils.STATUS_BAR_HEIGHT,}}>
                    <LinearGradient
                        start={{x: 1, y: 0}} end={{x: 0.3, y: 0}}
                        colors={['#7CD7FF', '#78CEFF', '#6CAAFF']}
                        style={styles.titleBar}>
                        <CommonStatusBar/>
                        <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between'}}>
                            <View style={{
                                flex:1,
                                height: 30,
                                flexDirection:'row',
                                alignItems:'center',
                                backgroundColor: 'white',
                                borderRadius: 15,
                                marginLeft: 15

                            }}>
                                <Image source={require('../images/search.png')} style={{width: 15, height: 15,marginLeft: 15}}
                                       resizeMode="contain"/>
                                <TextInput
                                    style={{flex:1,height:30,marginLeft: 10}}
                                    placeholder={"搜索智能柜编号"}
                                    placeholderTextColor={"#D0D0D0"}
                                    underlineColorAndroid={'transparent'}
                                    selectionColor={Color.THEME}
                                    autoCapitalize={'none'}
                                    autoCorrect={false}
                                    onChangeText={(text) => this.key = text}
                                />
                                {this.props.showfiltercon?
                                <TouchableOpacity style={{paddingRight: 15,paddingLeft: 15,height:30, justifyContent:'center',}} onPress={() => {
                                    if(this.props.onFilter){
                                        this.props.onFilter();
                                    }
                                }}>
                                    <Image source={require('../images/cabinet/filter.png')} style={{width: 13, height: 13}}
                                           resizeMode="contain"/>
                                </TouchableOpacity>:<View/>
                                }
                            </View>
                            {this.props.rightText?
                                <TouchableOpacity style={{paddingRight: 15,paddingLeft: 22}} onPress={() => {
                                    if(this.props.onPressRight){
                                        this.props.onPressRight();
                                    }
                                }}>
                                    <Text style={{fontSize: 16, color: '#FFFFFF', textAlign: 'center',}}>{this.props.rightText}</Text>
                                </TouchableOpacity>:
                                <TouchableOpacity style={{paddingRight: 15,paddingLeft: 22}} onPress={() => {
                                    if(this.props.onPressRight){
                                        this.props.onPressRight();
                                    }
                                }}>
                                    <Image source={require('../images/cabinet/add.png')} style={{width: 30, height: 30}} resizeMode="contain"/>
                                </TouchableOpacity>
                            }
                        </View>
                    </LinearGradient>
                </View>
            )
        }
    }

    back = () => {
        SceneUtils.goBack();
    };

    /**
     * 获取刘海屏适配后的TitleBar高度
     */
    static getHeight = () => {
        if (DeviceUtils.IS_TABLET) {
            return 60 + DeviceUtils.STATUS_BAR_HEIGHT;
        } else {
            return 44 + DeviceUtils.STATUS_BAR_HEIGHT;
        }
    };
}

const styles_pad = StyleSheet.create({
    titleBar: {
        height: 60 + DeviceUtils.STATUS_BAR_HEIGHT,

    },

});
const styles_mobile = StyleSheet.create({
    titleBar: {
        position: 'absolute',
        top: 0,
        width: DeviceUtils.WIDTH,
        height: 44 + DeviceUtils.STATUS_BAR_HEIGHT,
        paddingTop: DeviceUtils.STATUS_BAR_HEIGHT,
        alignItems: 'center',
        flexDirection: 'row',
    },

});
const styles = DeviceUtils.IS_TABLET ? styles_pad : styles_mobile;

module.exports = NavigationSearchBar;