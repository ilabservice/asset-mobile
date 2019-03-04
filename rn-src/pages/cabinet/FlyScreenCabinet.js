/**
 * @flow
 */
'use strict';
import React, {PureComponent} from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    Button,
    TouchableNativeFeedback,
    Dimensions,
    TouchableOpacity,
    TextInput,
    Linking,
    ScrollView,
    AppState,
    TouchableHighlight,
    InteractionManager,
    DeviceEventEmitter, Animated, ImageBackground,
} from 'react-native';
import NavigationSearchBar from "../../components/NavigationSearchBar";
import Color from "../../common/Color";

const {connect} = require('react-redux');
const SceneUtils = require('../../utils/SceneUtils');
import Swipeable from 'react-native-swipeable';
import RefreshFlatList from "../../components/RefreshFlatList";
import DeviceUtils from "../../utils/DeviceUtils";
import CuttingLine from "../../components/CuttingLine";
import CustomModal from "../../components/CustomModal";


class FlyScreenCabinet extends PureComponent {
    props: Props;

    constructor(props) {
        super(props);
        this.state = {};

    }

    componentDidMount() {
        let that = this;
        InteractionManager.runAfterInteractions(() => {

            this.timer = setTimeout(
                () => {
                    this.flatlist.setData([1, 2, 3, 4, 5, 6, 7, 8])
                }, 300);
        });
    }

    componentWillReceiveProps(nextProps: Props) {
        if (nextProps.isLoggedIn && (nextProps.isLoggedIn != this.props.isLoggedIn)) {

        }
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    /**
     * 渲染列表
     */
    renderItem = ({item, index}) => {
        return (
            <Swipeable key={index} rightButtonWidth={60} rightButtons={[
                <TouchableOpacity
                    style={{height: 100, backgroundColor: Color.THEME, justifyContent: 'center', paddingLeft: 15}}
                    activeOpacity={1}
                    onPress={() => this.delModal.open()}>
                    <Image style={{width: 35, height: 35}} source={require('../../images/cabinet/del.png')}/>
                </TouchableOpacity>
            ]}>
                <TouchableOpacity style={{
                    flex: 1, flexDirection: 'row', backgroundColor: 'white',
                    borderRadius: 8,
                    shadowColor: '#33353A',
                    shadowOffset: {width: 0, height: 2},
                    shadowRadius: 2,
                    shadowOpacity: 0.1,
                }} onPress={() =>{SceneUtils.gotoScene('CabinetDetail')}} activeOpacity={0.85}>
                    {/*左边*/}
                    <View style={{
                        height: 100,
                        justifyContent: 'center',
                        paddingLeft: 15,
                        paddingRight: 15,

                    }}>
                        <Image style={{width: 55, height: 55}} source={require('../../images/cabinet/gui.png')}/>
                        <View style={{flexDirection: 'row', marginTop: 5}}>
                            <Image style={{width: 10, height: 10}} source={require('../../images/cabinet/normal.png')}/>
                            <Text style={{color: '#B8B8B8', fontSize: 12,}}>状态正常</Text>
                        </View>
                    </View>
                    {/*右边*/}
                    <View style={{flex: 1, justifyContent: 'center',}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{color: '#383838', fontSize: 14,}}>智能柜编号：795#233</Text>
                            <Image style={{width: 15, height: 15, marginRight: 9}}
                                   source={require('../../images/cabinet/tan.png')}/>
                        </View>
                        <CuttingLine style={{marginTop: 5, marginBottom: 5, marginLeft: 0, marginRight: 50}}/>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image style={{width: 10, height: 10}} source={require('../../images/cabinet/kind.png')}/>
                            <Text style={{color: '#BAB8BE', fontSize: 14, marginLeft: 5}}>类别：实验室智能安全柜</Text>
                        </View>

                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 8,}}>
                            <Image style={{width: 10, height: 10}} source={require('../../images/cabinet/count.png')}/>
                            <Text style={{color: '#BAB8BE', fontSize: 14, marginLeft: 5}}>存放化学品数 ：36</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Swipeable>
        )
    };

    render() {
        return (
            <View style={styles.container}>
                <NavigationSearchBar
                    leftText={"iLabCabinet"}
                    // onPressRight={()=>{SceneUtils.gotoScene('CabinetEdit')}}
                     onPressRight={()=>{SceneUtils.gotoScene('Screen2')}}
                    onFilter={()=>{SceneUtils.gotoScene('CabinetSearch')}}
                />
                <RefreshFlatList
                    style={styles.list}
                    ref={o => this.flatlist = o}
                    deviderWidth={DeviceUtils.IS_TABLET ? 16 : 12}
                    deviderColor={'transparent'}
                    enableLoadMore={false}
                    renderItem={this.renderItem}
                    onRefresh={this.onRefresh}
                    onPressReload={this.onRefresh}/>

                <CustomModal ref={(ref)=> this.delModal= ref} pressBackdropToClose={true} animationType={'fade'}>
                    <View style={{width:DeviceUtils.WIDTH*0.7,height:208,alignItems:'center'}}>
                        <View style={{width:263,height:170,backgroundColor:"white",position:'absolute',top:38}}>
                            <View style={{flex: 1,marginTop:38,justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color:'#54A2FF', fontSize: 16,}}>确定删除此智能柜吗？</Text>
                            </View>
                            <View style={{flexDirection:'row',height:35}}>
                                <TouchableOpacity  onPress={() => {alert(0)}} activeOpacity={0.7}
                                                  style={{flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#BBDAFF'}}>
                                    <Text style={{color:'#54A2FF', fontSize: 16,}}>取消</Text>

                                </TouchableOpacity>
                                <TouchableOpacity  onPress={() => {alert(0)}} activeOpacity={0.7}
                                                  style={{flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#54A2FF'}}>
                                    <Text style={{color:'white', fontSize: 16,}}>确定</Text>

                                </TouchableOpacity>
                            </View>
                        </View>
                        <Image source={require('../../images/cabinet/ball.png')}
                               style={{width: 58, height: 76}}resizeMode="contain"/>
                    </View>
                </CustomModal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.THEME,
    },
    list: {
        marginLeft: 15, marginRight: 15
    }
});

function select(store) {
    return {};
}

module.exports = connect(select)(FlyScreenCabinet);