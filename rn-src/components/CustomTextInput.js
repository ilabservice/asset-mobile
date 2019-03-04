/**
 * 自定义输入条目
 */
'use strict'
import React, {PureComponent} from 'react';
import {View, StyleSheet, TextInput, Text, Image, TouchableOpacity} from 'react-native';
const PropTypes = require('prop-types');
export type Props = {
    text: string;
    height: number;
    showSegment: boolean;
    defaultValue: string;
    ContainerStyle: any;
    labelWidth: number;
    errMsg: string;
    showErrIcon:boolean;

    //以下为textInput属性
    ref: string;
    placeholder: string;
    editable: boolean;
    keyboardType: string;
    onChangeText: any;
    autoFocus:boolean;
    secureTextEntry:boolean;
    maxLength: number;
    multiline:boolean;
    textInputStyle:any;

    //右侧可添加按钮图片等任意view，
    rightContent: any;
};

const ITEM_HEIGHT = 50;

class CustomTextInput extends PureComponent {
    props : Props;
    static propTypes = {
        text:PropTypes.string,
        height: PropTypes.number,
        showSegment: PropTypes.bool,
        defaultValue: PropTypes.string,
        ContainerStyle: PropTypes.any,
        labelWidth: PropTypes.number,
        errMsg: PropTypes.string,
        showErrIcon: PropTypes.bool,
        ref: PropTypes.string,
        placeholder: PropTypes.string,
        editable: PropTypes.bool,
        keyboardType: PropTypes.string,
        onChangeText: PropTypes.any,
        autoFocus: PropTypes.bool,
        secureTextEntry: PropTypes.bool,
        maxLength: PropTypes.number,
        multiline: PropTypes.bool,
        textInputStyle: PropTypes.any,
        rightContent: PropTypes.any,
    }
    static defaultProps = {
        labelWidth: 100,
        showErrIcon:true,
    };

    getHeight() {
        return (this.props.height) ? this.props.height : ITEM_HEIGHT;
    }

    focus() {
        if (this.refs && this.refs.textInput) {
            this.refs.textInput.focus();
        }
    }

    blur() {
        if (this.refs && this.refs.textInput) {
            this.refs.textInput.blur();
        }
    }

    render() {
        let props = this.props;

        let content = null;

        let height = this.getHeight();

        let errContent = null;

        let errIcon = null;

        if (props.children) {
            content = (
                <View style={styles.rightContentWrapper}>
                    {props.children}
                </View>
            );
        }

        if(props.errMsg){
            errContent=(
                <View style={{backgroundColor:'red'}}>
                    <Text style={styles.errContent}>{"* "+props.errMsg}</Text>
                </View>
            );
            if(props.showErrIcon){
                errIcon = (
                    <Image source={require('../images/cabinet/add.png')} style={{width: 30, height: 30}} resizeMode="contain"/>
                );
            }
        }

        return (
            <View>
                <View style={[styles.container, props.ContainerStyle]}>
                    <View style={[styles.wrapper , props.showSegment?styles.wrapperSegment:null,{height:height}]}>
                        <View style={[styles.leftWrapper, {width: props.labelWidth,height: height}]}>
                            <Text style={styles.text}>{props.text}</Text>
                        </View>
                        <TextInput style={[
                            styles.textInput,
                            props.textInputStyle]}
                                   onChangeText={props.onChangeText}
                                   editable={props.editable}
                                   underlineColorAndroid="transparent"
                                   keyboardType={props.keyboardType}
                                   onSubmitEditing={props.onSubmitEditing}
                                   defaultValue={props.defaultValue}
                                   placeholder={props.placeholder}
                                   onBlur = {props.onBlur}
                                   onFocus = {props.onFocus}
                                   secureTextEntry={props.secureTextEntry}
                                   multiline={props.multiline}
                                   maxLength={props.maxLength}
                                   returnKeyType={props.returnKeyType||"done"}
                                   autoFocus={props.autoFocus}
                                   placeholderTextColor={'#DDDDDD'}
                                   ref={"textInput"}
                                   clearButtonMode={'while-editing'}
                        />
                        {content}
                    </View>
                    {errIcon}
                </View>
                {errContent}
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems:'center',
        marginBottom:0.5
    },
    errContent:{
        color:'green',paddingLeft:10,paddingTop:5,paddingBottom:5,fontSize:14,fontWeight:'bold'
    },
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        // paddingRight: 15,
        // height:50,
    },
    wrapperSegment: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'green'
    },
    leftWrapper: {
        width: 150,
        justifyContent:'center',
        // marginLeft: 15,
        // marginRight: 15,
        alignItems: 'flex-end'
        // backgroundColor:'yellow'
    },
    textInput: {
        fontSize: 14,
        borderWidth: 0,
        // marginTop:2,
        flex: 1
    },
    text: {
        fontSize: 14,
        color: '#565656',
    },
    rightContentWrapper: {
        justifyContent:'center',
        paddingLeft: 10
    }
});

module.exports =CustomTextInput;
