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
import NavigationBar from "../../components/NavigationBar";
import CustomTextInput from "../../components/CustomTextInput";

class EditCabinet extends PureComponent {
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

    _onTextChange=(text) =>{
        this.setState({
            password:text,
            showPwdRemove: !Utils.isEmpty(text)
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title={"添加智能柜"}/>
                <CustomTextInput
                    value={"32424"}
                    onChangeText={this._onTextChange}
                    style={styles.textInput}
                    placeholder="请设置6-20位数字、字母密码"
                    underlineColorAndroid="transparent"

                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
    },
    textInput: {
        flex:1,
        height: 50,
        fontSize:15,
        marginLeft:9,
        color:'#CCCCCC'
    },
});

function select(store) {
    return {};
}

module.exports = connect(select)(EditCabinet);