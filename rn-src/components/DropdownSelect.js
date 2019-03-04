/**
 * 选择组件，支持多选
 */
'use strict';
import React, {PureComponent} from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    Modal,
    FlatList,
    NativeModules,
    ProgressBarAndroid,
    ActivityIndicator, TouchableOpacity, Text, Image, ImageBackground, TextInput, TouchableWithoutFeedback
} from 'react-native';
import DeviceUtils from "../utils/DeviceUtils";
const PropTypes = require('prop-types');


// let MARGIN=35;
// let ITEM_HEIGHT=30;

class DropdownSelect extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isVisible:false,
            xValue:100,
            modalWidth:100,
        };
        this.MARGIN=this.props.leftMargin;
       this.ITEM_HEIGHT=this.props.itemHeight;
    }

    static propTypes = {
        ContainerStyle: PropTypes.any,
        leftWrapper: PropTypes.any,
        rightWrapper:PropTypes.any,
        leftText:PropTypes.string,
        leftMargin:PropTypes.number.isRequired,//用以修正modal弹出位置
        itemHeight:PropTypes.number.isRequired,//用以修正modal弹出位置
    };

    static defaultProps = {
        backdropColor: 'rgba(0, 0, 0, 0.6)',
        datas: [{label: 'asdda', value: 670}, {label: 'dg', value: 672}, {
            label: 'dfbfd ',
            value: 673
        }, {label: 'dfgdgd', value: 674}, {label: 'dfgdfg', value: 675}, {label: 'vsdfs', value: 676}, {
            label: 'nkvsjk',
            value: 678
        },]
    };

    componentWillReceiveProps(nextProps) {
        // this.setState({isVisible: nextProps.show});
    }

    componentDidMount() {

    }

    closeModal=()=> {
        this.setState({
            isVisible: false
        });
    };
    openModal=()=> {
        this.setState({
            isVisible: true
        });
    };

    _onLayout=(event)=>{
        NativeModules.UIManager.measure(event.target, (x, y, width, height, pageX, pageY) => {
            this.setState({
                xValue:x+this.MARGIN,
                yValue:pageY+this.ITEM_HEIGHT,
                modalWidth:width,
            });
        });

    };

    render() {
        let props = this.props;
        return (
            <View style={[styles.container,props.ContainerStyle]}>
                <View style={{flex:1,flexDirection: 'row',}}>
                    <View style={[styles.leftWrapper, props.leftWrapper]}>
                        <Text style={{fontSize:14,color:'#555555'}}>{props.leftText}</Text>
                    </View>
                    <TouchableOpacity style={[styles.rightWrapper,props.rightWrapper ]} onPress={() =>{
                        if(this.state.isVisible){
                            this.closeModal()
                        }else{
                            this.openModal()
                        }
                    }} onLayout={this._onLayout}>
                        <Text style={{fontSize:14,color:'#555555',marginLeft: 5}}>234</Text>
                        <Image source={require('../images/cabinet/sanjiao.png')} style={{width: 9, height: 6,marginRight: 15,}}/>
                    </TouchableOpacity>
                </View>

                <Modal
                    transparent={true}
                    visible={this.state.isVisible}
                    animationType={'fade'}
                    onRequestClose={() => this.closeModal()}>
                    <TouchableOpacity style={styles.modalContainer} activeOpacity={1} onPress={() => this.closeModal()}>
                        <View style={[styles.modal,{backgroundColor: this.props.backdropColor}]}>

                            <View style={{maxHeight:300,minHeight:30,marginLeft:20,marginRight:20}}>
                                <FlatList
                                renderItem={({item, index}) => this._renderItem({item, index})}
                                data={this.props.datas}
                                horizontal={false}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                </Modal>

            </View>

        );
    }


    _renderItem = ({item, index}) => {
        return (
            <View key={index + ''} style={styles.itemStyle}>
                <Text style={{color: '#4B92FF', fontSize: 12, marginLeft: 7}}>{item.label}</Text>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container:{
        height:40,
        // backgroundColor:'pink',
        marginRight:20,
    },
    leftWrapper: {
        width: 80,
        justifyContent:'center',
        // marginLeft: MARGIN,
        alignItems: 'flex-end'
        // backgroundColor:'yellow'
    },
    rightWrapper:{
        flex:1,
        flexDirection:'row',
        borderColor:'red',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent:'space-between',
        // backgroundColor:'yellow'
    },
    modalContainer:{
        width: DeviceUtils.WIDTH,
        height:DeviceUtils.HEIGHT,
        backgroundColor: 'transparent'
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemStyle: {
        width: DeviceUtils.WIDTH,
        height: 30,
        borderWidth:1,
        borderColor:'red',
        backgroundColor: '#efefef',
    },

});
module.exports = DropdownSelect;
