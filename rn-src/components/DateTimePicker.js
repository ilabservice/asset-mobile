/**
 * 日期/时间 选择组件
 * Created by RenPeng on 2018/3/28.
 */
import React, {Component} from 'react';
import {
    StyleSheet, Platform, DatePickerIOS, DatePickerAndroid, TimePickerAndroid, TouchableOpacity, Animated,
    View, Text
} from 'react-native';
import DeviceUtils from '../utils/DeviceUtils';
import Color from "../common/Color";
import Language from "../common/language/Language";

export default class DateTimePicker extends Component<{}> {
    // 构造
    constructor(props) {
        super(props);
        this.mode = this.props.mode || 'date';
        // 是否可以点空白处取消
        this.cancelable = props.cancelable || true;
        this.opacity = new Animated.Value(0);
        this.dialogOffset = new Animated.Value(-355 - DeviceUtils.BOTTOM_HEIGHT);
        // 初始状态
        this.state = {
            visible: false,
            date: new Date(),
        };
    }

    render() {
        if (Platform.OS === 'ios' && this.state.visible) {
            return (
                <TouchableOpacity activeOpacity={1} style={styles.root}
                                  onPress={() => this.cancelable && this.dismiss()}>
                    <Animated.View style={[{opacity: this.opacity}, styles.background]}/>
                    <Animated.View style={[{bottom: this.dialogOffset}, styles.dialog]}>
                        <View style={styles.title}>
                            <Text
                                style={{fontSize: 18}}>{this.props.title || Language.get(Language.TEXTS.dashboard.select_date)}</Text>
                        </View>
                        <View style={styles.line}/>
                        <DatePickerIOS
                            style={{height: 215}}
                            date={this.state.date}
                            mode={this.mode}
                            minimumDate={this.props.minDate}
                            maximumDate={this.props.maxDate}
                            onDateChange={(date) => this.setState({date})}/>
                        <View style={styles.line}/>
                        <TouchableOpacity style={styles.item} activeOpacity={0.75} onPress={this.done}>
                            <Text style={styles.text_blue}>{Language.get(Language.TEXTS.other.confirm)}</Text>
                        </TouchableOpacity>
                        <View style={styles.big_line}/>
                        <TouchableOpacity style={styles.item_cancel} activeOpacity={0.75} onPress={this.dismiss}>
                            <Text style={styles.text_red}>{Language.get(Language.TEXTS.other.cancel)}</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </TouchableOpacity>
            )
        } else {
            return null;
        }
    }

    /**
     * 显示对话框
     * @param initDate 默认选择时间
     */
    async show(initDate = new Date()) {
        if (Platform.OS === 'ios') {
            // iOS平台使用自带组件
            if (this.state.visible) return;

            this.setState({
                visible: true,
                date: initDate,
            }, () => {
                Animated.parallel([
                    Animated.timing(this.opacity, {
                        toValue: 1,
                        duration: 200,
                    }),
                    Animated.timing(this.dialogOffset, {
                        toValue: 0,
                        duration: 200,
                    }),
                ]).start();
            });
        } else {
            // Android平台使用两个原生API
            if (this.mode === 'date') {
                // 选择日期
                try {
                    const {action, year, month, day} = await DatePickerAndroid.open({
                        date: initDate,
                        minDate: this.props.minDate,
                        maxDate: this.props.maxDate,
                    });
                    if (action !== DatePickerAndroid.dismissedAction) {
                        this.done(new Date(year, month, day, 0, 0, 0, 0));
                    }
                } catch ({code, message}) {
                    console.warn('Cannot open date picker', message);
                }
            } else if (this.mode === 'time') {
                // 选择时间
                try {
                    const {action, hour, minute} = await TimePickerAndroid.open({
                        hour: initDate.getHours(),
                        minute: initDate.getMinutes(),
                        is24Hour: true,
                    });
                    if (action !== TimePickerAndroid.dismissedAction) {
                        this.done(new Date(initDate.getFullYear(), initDate.getMonth(), initDate.getDate(), hour, minute, 0, 0));
                    }
                } catch ({code, message}) {
                    console.warn('Cannot open time picker', message);
                }
            }
        }
    };

    /**
     * 隐藏对话框
     */
    dismiss = () => {
        if (Platform.OS === 'ios') {
            if (!this.state.visible) return;

            Animated.parallel([
                Animated.timing(this.opacity, {
                    toValue: 0,
                    duration: 200,
                }),
                Animated.timing(this.dialogOffset, {
                    toValue: -355 - DeviceUtils.BOTTOM_HEIGHT,
                    duration: 200,
                }),
            ]).start(() => {
                this.setState({
                    visible: false,
                    date: new Date()
                });
            });
        }
    };

    done = (date) => {
        this.dismiss();
        if (Platform.OS === 'ios') {
            this.props.onSelect && this.props.onSelect(this.state.date);
        } else {
            this.props.onSelect && this.props.onSelect(date);
        }
    };
}

const styles_pad = StyleSheet.create({
    root: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        elevation: 1000,
    },
    background: {
        flex: 1,
        backgroundColor: Color.MARK,
    },
    dialog: {
        position: 'absolute',
        left: 0,
        right: 0,
        backgroundColor: '#fff'
    },
    title: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item_cancel: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_red: {fontSize: 16, color: Color.TEXT_RED},
    text_blue: {fontSize: 16, color: Color.THEME},
    line: {
        backgroundColor: Color.LINE,
        height: DeviceUtils.ONE_PX,
    },
    big_line: {
        backgroundColor: Color.LINE,
        height: 10,
    }
});
const styles_mobile = StyleSheet.create({
    root: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        elevation: 1000,
    },
    background: {
        flex: 1,
        backgroundColor: Color.MARK,
    },
    dialog: {
        position: 'absolute',
        left: 0,
        right: 0,
        backgroundColor: '#fff'
    },
    title: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item_cancel: {
        height: 40 + DeviceUtils.BOTTOM_HEIGHT,
        paddingBottom: DeviceUtils.BOTTOM_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_red: {fontSize: 16, color: Color.TEXT_RED},
    text_blue: {fontSize: 16, color: Color.THEME},
    line: {
        backgroundColor: Color.LINE,
        height: DeviceUtils.ONE_PX,
    },
    big_line: {
        backgroundColor: Color.LINE,
        height: 10,
    }
});
const styles = DeviceUtils.IS_TABLET ? styles_pad : styles_mobile;