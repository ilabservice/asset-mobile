/**
 * @flow
 */
'use strict';
import React, {PureComponent} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button,
    ImageBackground,
    TouchableNativeFeedback,
    Dimensions,
    TouchableOpacity,
    TextInput,
    Linking,
    ScrollView,
    AppState,
    TouchableHighlight,
    InteractionManager,
    DeviceEventEmitter, Animated, Image,
} from 'react-native';
import DeviceUtils from "../../utils/DeviceUtils";
import Color from "../../common/Color";
import CommonStatusBar from "../../components/CommonStatusBar";
import CuttingLine from "../../components/CuttingLine";

const {connect} = require('react-redux');
const SceneUtils = require('../../utils/SceneUtils');

// const FlyHeader = require('../../components/FlyHeader');


const alarmIcons = [{
    title: '有毒气体',
    iconSource: require('../../images/home/ico1.png'),
    content: 3
}, {
    title: '门未关超市',
    iconSource: require('../../images/home/ico2.png'),
    content: 1
}, {
    title: '低库存',
    iconSource: require('../../images/home/ico3.png'),
    content: 2
}, {
    title: '领用超时',
    iconSource: require('../../images/home/ico4.png'),
    content: 500
}];

class FlyScreenHome extends PureComponent {
    props: Props;

    constructor(props) {
        super(props);
        this.state = {};

    }

    componentDidMount() {
        let that = this;
        InteractionManager.runAfterInteractions(() => {

        });
    }

    componentWillReceiveProps(nextProps: Props) {
        if (nextProps.isLoggedIn && (nextProps.isLoggedIn != this.props.isLoggedIn)) {

        }
    }

    renderAlarmIcons = (icons) => {
        var content = icons.map((item, i) => {
            return (
                <TouchableOpacity key={i} onPress={() => {
                    alert(0)
                }} activeOpacity={0.7} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ImageBackground source={item.iconSource}
                                     style={{width: 63, height: 63, alignItems: 'center',}}
                                     resizeMode="stretch">
                        <Text style={{
                            color: 'white',
                            fontSize: 17,
                            fontWeight: 'bold',
                            marginTop: 17,
                        }}>{item.content}</Text>
                    </ImageBackground>
                    <Text style={{color: '#B8B8B8', fontSize: 12, marginTop: 11}}>{item.title}</Text>
                </TouchableOpacity>
            )
        });
        return (
            <View style={{height: 100, flexDirection: 'row', alignItems: 'center'}}>
                {content}
            </View>
        )
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <CommonStatusBar/>
                <ImageBackground source={require('../../images/home/top.png')}
                                 style={{position: 'absolute', top: 0, width: '100%', height: 175}}
                                 resizeMode="stretch">
                    <View style={styles.topWrapper}>
                        <Image source={require('../../images/home/logo.png')} style={{width: 79, height: 22}}
                               resizeMode="contain"/>
                        <Image source={require('../../images/home/message.png')} style={{width: 17, height: 22}}
                               resizeMode="contain"/>
                    </View>
                </ImageBackground>
                {/*第一块*/}
                <View style={styles.cardone}>
                    <View style={styles.onetop}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 14}}>
                            <Image source={require('../../images/home/alarm.png')} style={{width: 22, height: 22}}
                                   resizeMode="contain"/>
                            <Text style={{color: Color.TEXT, fontSize: 14, marginLeft: 8, paddingTop: 4}}>报警统计</Text>
                        </View>
                        <View style={styles.oneRight}>
                            <Text style={{color:'white',fontSize:14,}}>3</Text>
                        </View>
                    </View>
                    <CuttingLine style={{marginTop: 11}}/>
                    {this.renderAlarmIcons(alarmIcons)}
                </View>
                {/*第二块*/}
                <View style={styles.cardTwo}>
                    <View style={styles.onetop}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 13}}>
                            <Image source={require('../../images/home/cabinet.png')} style={{width: 22, height: 22}}
                                   resizeMode="contain"/>
                            <Text style={{color: Color.TEXT, fontSize: 14, marginLeft: 8, paddingTop: 2}}>智能柜总数</Text>
                        </View>
                        <View style={[styles.oneRight,{backgroundColor:'#308BFF'}]}>
                            <Text style={{color:'white',fontSize:14,}}>3</Text>
                        </View>
                    </View>
                    <CuttingLine style={{marginTop: 10,marginBottom: 10}}/>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <ImageBackground source={require('../../images/home/gui1.png')}
                                         style={{width: 141, height: 73, alignItems: 'center',marginLeft:16,justifyContent:'center'}}
                                         resizeMode="stretch">
                            <Text style={{
                                color: 'white',
                                fontSize: 19,
                                fontWeight: 'bold',
                            }}>1212</Text>
                            <View style={{flexDirection:'row',alignItems:"center"}}>
                                <Image source={require('../../images/home/gui3.png')} style={{width: 11, height: 20}}
                                       resizeMode="contain"/>
                            <Text style={{
                                color: 'white',
                                fontSize: 10,
                                marginTop:10,
                            }}>安全柜</Text>
                            </View>
                        </ImageBackground>
                        <ImageBackground source={require('../../images/home/gui2.png')}
                                         style={{width: 141, height: 73, alignItems: 'center',marginRight:16,justifyContent:'center'}}
                                         resizeMode="stretch">
                            <Text style={{
                                color: 'white',
                                fontSize: 19,
                                fontWeight: 'bold',
                            }}>123131</Text>

                            <Text style={{
                                color: 'white',
                                fontSize: 10,
                                marginTop:10,
                            }}>药品柜</Text>
                        </ImageBackground>
                    </View>
                </View>

                {/*第三块*/}
                <View style={styles.cardTwo}>
                    <View style={styles.onetop}>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 13}}>
                            <Image source={require('../../images/home/huaxue.png')} style={{width: 22, height: 22}}
                                   resizeMode="contain"/>
                            <Text style={{color: Color.TEXT, fontSize: 14, marginLeft: 8, paddingTop: 2}}>智能柜总数</Text>
                        </View>
                        <View style={[styles.oneRight,{backgroundColor:'#C850EE'}]}>
                            <Text style={{color:'white',fontSize:14,}}>300</Text>
                        </View>
                    </View>
                    <CuttingLine style={{marginTop: 10,marginBottom: 10}}/>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <ImageBackground source={require('../../images/home/hua1.png')}
                                         style={{width: 72, height: 72, alignItems: 'center',marginLeft:16,justifyContent:'center'}}
                                         resizeMode="stretch">
                            <Text style={{
                                color: 'white',
                                fontSize: 19,
                                fontWeight: 'bold',
                            }}>1212</Text>
                            <Text style={{
                                color: 'white',
                                fontSize: 10,
                                marginTop:10,
                            }}>柜中</Text>

                        </ImageBackground>
                        <ImageBackground source={require('../../images/home/hua2.png')}
                                         style={{width: 72, height: 72, alignItems: 'center',marginRight:16,justifyContent:'center'}}
                                         resizeMode="stretch">
                            <Text style={{
                                color: 'white',
                                fontSize: 19,
                                fontWeight: 'bold',
                            }}>123131</Text>

                            <Text style={{
                                color: 'white',
                                fontSize: 10,
                                marginTop:10,
                            }}>柜外</Text>
                        </ImageBackground>
                        <ImageBackground source={require('../../images/home/hua3.png')}
                                         style={{width: 72, height: 72, alignItems: 'center',marginRight:16,justifyContent:'center'}}
                                         resizeMode="stretch">
                            <Text style={{
                                color: 'white',
                                fontSize: 19,
                                fontWeight: 'bold',
                            }}>123131</Text>

                            <Text style={{
                                color: 'white',
                                fontSize: 10,
                                marginTop:10,
                            }}>柜外</Text>
                        </ImageBackground>
                    </View>
                </View>


                {/*<Text style={{fontSize: 30, color: '#555555', alignSelf: 'center'}}>首页</Text>*/}
                {/*<Button*/}
                    {/*title="去页面1"*/}
                    {/*onPress={() =>*/}
                        {/*// SceneUtils.gotoTabView('FlyScreenMine')*/}
                        {/*SceneUtils.gotoScene('Screen1')*/}
                    {/*}*/}
                {/*/>*/}
            </ScrollView>
        )
    }

}

const styles_mobile = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.THEME,
    },
    topWrapper: {
        width: DeviceUtils.WIDTH,
        marginTop: DeviceUtils.STATUS_BAR_HEIGHT,
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
    },
    cardone: {
        marginLeft: 15,
        marginRight: 15,
        height: 155,
        backgroundColor: 'white',
        marginTop: 64 + DeviceUtils.STATUS_BAR_HEIGHT,
        borderRadius: 5,
        shadowColor: '#33353A',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 0.1,
    },
    onetop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 11
    },
    oneRight: {
        width: 22,
        height: 22,
        marginRight: 14,
        backgroundColor: "#FF6864",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardTwo:{
        marginTop: 10,
        marginLeft:15,
        marginRight:15,
        height: 140,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: '#33353A',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 0.1,
    },
});
const styles_pad = StyleSheet.create({});
const styles = DeviceUtils.IS_TABLET ? styles_pad : styles_mobile;

function select(store) {
    return {};
}

module.exports = connect(select)(FlyScreenHome);