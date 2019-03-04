/**
 * @flow
 */
'use strict';
import React, {PureComponent,Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    ListView,
    Modal, Button,
} from 'react-native';
var Dimensions = require('Dimensions');
const {width,height} = Dimensions.get('window');

import NavigationBar from "../components/NavigationBar";
import Language from "../common/language/Language";
const {connect} = require('react-redux');
const SceneUtils = require('../utils/SceneUtils');

const headH =64;

class Screen2 extends PureComponent {
    constructor(props){
        super(props);
        this.state=({
            showPop: false,

        });
    }
    componentWillMount(){

    }
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="点击"
                    onPress={() =>{
                        this.setState({ showPop: !this.state.showPop })
                    } }
                />

                <View style={{ position: 'absolute', top: headH, left: 0, width: width, height: height }}>
                    <MorePopWidows width={90} height={100} show={this.state.showPop} closeModal={(show) => {
                        this.setState({showPop: show})
                    }} {...this.props}/>
                </View>
            </View>
        );
    }

}


const mTop =64
let mwidth = 95;
let mheight = 100;
const marginTop = mTop;
class MorePopWidows extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: this.props.show,
        }
        mwidth = this.props.width ;
        mheight = this.props.height ;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ isVisible: nextProps.show });
    }

    closeModal() {
        this.setState({
            isVisible: false
        });
        this.props.closeModal(false);
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    transparent={true}
                    visible={this.state.isVisible}
                    animationType={'fade'}
                    onRequestClose={() => this.closeModal()}>
                    <TouchableOpacity style={styles.container} activeOpacity={1} onPress={() => this.closeModal()}>

                        <View style={styles.modal}>
                            <TouchableOpacity activeOpacity={1}  style={styles.itemView}>
                                <Text style={styles.textStyle}>扫一扫</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={1} onPress={() => Alert.alert('点击了付款码')} style={styles.itemView}>
                                <Text style={styles.textStyle}>付款码</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </Modal>
            </View>
        )
    }
}




const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
    },
    modal: {
        backgroundColor: '#696969',
        width: mwidth,
        height: mheight,
        position: 'absolute',
        left: width - mwidth - 10,
        top: marginTop,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
    },
    itemView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    textStyle: {
        color: '#fff',
        fontSize: 14,
        marginLeft: 2,
    },
    imgStyle: {
        width: 20,
        height: 20,
    },

});

function select(store) {
    return {

    };
}
module.exports = connect(select)(Screen2);