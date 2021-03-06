/**
 * 通用顶部标题栏
 * Created by RenPeng on 2018/3/15.
 */
import React, {PureComponent} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import * as Images from '../common/Images';
import DeviceUtils from '../utils/DeviceUtils';
import Color from "../common/Color";
import CommonStatusBar from "./CommonStatusBar";
import LinearGradient from 'react-native-linear-gradient';

const SceneUtils = require('../utils/SceneUtils');

export default class NavigationBar extends PureComponent {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        if (DeviceUtils.IS_TABLET) {
            /**
             * 平板布局
             */
            return (
                <View style={styles.titleBar}>
                    <CommonStatusBar/>
                    <TouchableOpacity activeOpacity={0.75} style={styles.button} onPress={this.back}>
                        {/*<Image style={styles.button_img} source={require("../images/btn_back.png")} resizeMode={'stretch'}/>*/}
                    </TouchableOpacity>
                    <Text style={styles.title} numberOfLines={1}>{this.props.title || '页面标题'}</Text>
                    {this.props.rightText ? (
                        <TouchableOpacity activeOpacity={0.75} style={styles.button}
                                          onPress={this.props.onPressRight && this.props.onPressRight}>
                            <Text style={{fontSize: 18, color: '#FFFFFF', textAlign: 'center',}}
                                  numberOfLines={2}>{this.props.rightText}</Text>
                        </TouchableOpacity>
                    ) : (
                        this.props.rightIcon ? (
                            <TouchableOpacity activeOpacity={0.75} style={styles.button}
                                              onPress={this.props.onPressRight && this.props.onPressRight}>
                                <Image style={{width: 28, height: 28}} source={this.props.rightIcon}/>
                            </TouchableOpacity>
                        ) : (
                            <View style={styles.button}/>
                        )
                    )}
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
                        {this.props.leftText ?
                            <Text style={{fontSize: 16, color: '#FFFFFF', textAlign: 'center', marginLeft: 15}}
                                  numberOfLines={2}>{this.props.leftText}</Text> :
                            <TouchableOpacity activeOpacity={0.75} style={styles.button} onPress={this.back}>
                                <Image style={styles.button_img} source={require("../images/btn_back.png")} resizeMode={'stretch'}/>
                            </TouchableOpacity>
                        }
                        <Text style={styles.title} numberOfLines={1}>{this.props.title}</Text>
                        {this.props.rightText ? (
                            <TouchableOpacity activeOpacity={0.75} style={styles.button}
                                              onPress={this.props.onPressRight && this.props.onPressRight}>
                                <Text style={{fontSize: 16, color: '#FFFFFF', textAlign: 'center',}}
                                      numberOfLines={2}>{this.props.rightText}</Text>
                            </TouchableOpacity>
                        ) : (
                            this.props.rightIcon ? (
                                <TouchableOpacity activeOpacity={0.75} style={styles.button}
                                                  onPress={this.props.onPressRight && this.props.onPressRight}>
                                    <Image style={{width: 22, height: 22}} source={this.props.rightIcon}/>
                                </TouchableOpacity>
                            ) : (
                                <View style={styles.button}/>
                            )
                        )}
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
        paddingTop: DeviceUtils.STATUS_BAR_HEIGHT,
        backgroundColor: Color.THEME,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    title: {
        flex: 1,
        color: "#ffffff",
        textAlign: 'center',
        fontSize: 26,
    },
    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_img: {
        width: 16,
        height: 26
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
        justifyContent: 'center',
        flexDirection: 'row',
    },
    title: {
        flex: 1,
        color: "#ffffff",
        textAlign: 'center',
        fontSize: 20,
    },
    button: {
        width: 60,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_img: {
        width: 12,
        height: 20
    },
});
const styles = DeviceUtils.IS_TABLET ? styles_pad : styles_mobile;