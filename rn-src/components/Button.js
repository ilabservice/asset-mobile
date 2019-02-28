/**
 * 通用按钮
 */
import React, {Component,PureComponent} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import DeviceUtils from '../utils/DeviceUtils';
import Color from "../common/Color";
import LinearGradient from 'react-native-linear-gradient';

class Button extends PureComponent {
    // 构造
    constructor(props) {
        super(props);
        this.color = props.color || Color.THEME;
        // 初始状态
    }

    render() {
        return (
            this.props.disabled ? (
                <View style={[styles.button, {backgroundColor: this.color, opacity: 0.5, ...this.props.style}]}>
                    <Text style={styles.button_text}>{this.props.title || '按钮'}</Text>
                </View>
            ) : (
                <LinearGradient start={{x: 0.1, y: 0}} end={{x: 1, y: 0}}
                                colors={['#7CD7FF','#6CAAFF']}
                                style={{marginTop: 26}}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={[styles.button, this.props.style]}
                        onPress={() => this.props.onPress && this.props.onPress()}>
                        <Text style={styles.button_text}>{this.props.title || '按钮'}</Text>
                    </TouchableOpacity>
                </LinearGradient>
            )
        )
    }
}

const styles_pad = StyleSheet.create({
    button: {
        width: 280,
        height: 46,
        borderRadius: 23,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: {width: 2, height: 5},
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    button_text: {
        fontSize: 18,
        color: "#FFFFFF"
    },
});
const styles_mobile = StyleSheet.create({
    button: {
        width: 267,
        height: 38,
        // borderRadius: 18,
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: {width: 2, height: 5},
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    button_text: {
        fontSize: 15,
        color: "#FFFFFF"
    },
});
const styles = DeviceUtils.IS_TABLET ? styles_pad : styles_mobile;


module.exports =Button;