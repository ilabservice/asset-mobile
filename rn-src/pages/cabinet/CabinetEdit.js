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
import Button from "../../components/Button";
const {connect} = require('react-redux');
const SceneUtils = require('../../utils/SceneUtils');
import Swipeable from 'react-native-swipeable';
import RefreshFlatList from "../../components/RefreshFlatList";
import DeviceUtils from "../../utils/DeviceUtils";
import CuttingLine from "../../components/CuttingLine";
import CustomModal from "../../components/CustomModal";
import NavigationBar from "../../components/NavigationBar";
import CustomTextInput from "../../components/CustomTextInput";

class CabinetEdit extends PureComponent {
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

    componentWillUnmount() {
    }

    _onTextChange = (text) => {
        this.setState({
            password: text,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title={"添加智能柜"}/>
                {/*第一个card*/}
                <View style={{width:DeviceUtils.WIDTH-30,height:256,backgroundColor: 'white',marginTop: 10,borderRadius:7}}>
                    <View style={{flexDirection:'row',marginLeft:15,marginTop:11,alignItems:'center',marginBottom: 15}}>
                        <Image style={{width: 4, height: 18,}} source={require('../../images/cabinet/shit.png')}/>
                        <Text style={{color: '#383838', fontSize: 14,marginLeft:7}}>智能柜基本信息</Text>
                    </View>
                    <CustomTextInput
                        value={"32424"}
                        labelWidth={60}
                        height={30}
                        text={'柜子名称'}
                        onChangeText={this._onTextChange}
                        ContainerStyle={styles.ContainerStyle}
                        autoFocus={true}
                        placeholder="易燃品柜"
                        underlineColorAndroid="transparent"
                        textInputStyle={styles.textInput}
                    />
                    <CustomTextInput
                        value={"32424"}
                        labelWidth={60}
                        height={30}
                        text={'总层数:'}
                        onChangeText={this._onTextChange}
                        ContainerStyle={styles.ContainerStyle}
                        placeholder="请输入柜子层数"
                        underlineColorAndroid="transparent"
                        textInputStyle={styles.textInput}
                    />
                    <CustomTextInput
                        value={"32424"}
                        labelWidth={60}
                        height={30}
                        text={'描述'}
                        onChangeText={this._onTextChange}
                        ContainerStyle={styles.ContainerStyle}
                        placeholder=""
                        underlineColorAndroid="transparent"
                        textInputStyle={styles.textInput}
                    />
                    <CustomTextInput
                        value={"32424"}
                        labelWidth={60}
                        height={30}
                        text={'品 牌:'}
                        onChangeText={this._onTextChange}
                        ContainerStyle={styles.ContainerStyle}
                        placeholder=""
                        underlineColorAndroid="transparent"
                        textInputStyle={styles.textInput}
                    />
                    <CustomTextInput
                        value={"32424"}
                        labelWidth={60}
                        height={30}
                        text={'序列号:'}
                        onChangeText={this._onTextChange}
                        ContainerStyle={styles.ContainerStyle}
                        placeholder=""
                        underlineColorAndroid="transparent"
                        textInputStyle={styles.textInput}
                    />
                </View>

                {/*第二个card*/}
                <View style={{width:DeviceUtils.WIDTH-30,height:142,backgroundColor: 'white',marginTop: 10,borderRadius:7}}>
                    <View style={{flexDirection:'row',marginLeft:15,marginTop:11,alignItems:'center',marginBottom: 15}}>
                        <Image style={{width: 4, height: 18,}} source={require('../../images/cabinet/shit.png')}/>
                        <Text style={{color: '#383838', fontSize: 14,marginLeft:7}}>智能柜种类信息</Text>
                    </View>
                    <CustomTextInput
                        value={"32424"}
                        labelWidth={60}
                        height={30}
                        text={'种类名称:'}
                        onChangeText={this._onTextChange}
                        ContainerStyle={styles.ContainerStyle}
                        placeholder=""
                        underlineColorAndroid="transparent"
                        textInputStyle={styles.textInput}
                    />
                    <CustomTextInput
                        value={"32424"}
                        labelWidth={60}
                        height={30}
                        text={'种类描述:'}
                        onChangeText={this._onTextChange}
                        ContainerStyle={styles.ContainerStyle}
                        placeholder=""
                        underlineColorAndroid="transparent"
                        textInputStyle={styles.textInput}
                    />
                </View>

                <Button style={{alignSelf: 'center'}}
                        title={'确定'} disabled={false}
                        onPress={() => alert(90)}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.THEME,
        alignItems: 'center'
    },
    ContainerStyle: {
        height: 30,
        marginBottom: 10,
    },
    textInput:{
        borderColor:'#D9D9D9',
        borderWidth: 1,
    },
});

function select(store) {
    return {};
}

module.exports = connect(select)(CabinetEdit);