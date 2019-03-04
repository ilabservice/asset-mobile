/**
 * @flow
 */
'use strict';
import React, {PureComponent,Component} from 'react';
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
    DeviceEventEmitter, Animated, ImageBackground, Modal, FlatList,
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
import ModalDropdown from "../../components/ModalDropdown";
import DropdownSelect from "../../components/DropdownSelect";
class CabinetEdit extends Component {
    props: Props;

    constructor(props) {
        super(props);
        this.state = {
            showPop: false,
            chemicalKinds:['氧化剂','催化剂','酸','还原剂','强碱','浓硫酸'],
            selectKindIndex:0,

            layersArr:[{chemicalKinds:['氧化剂','催化剂','酸','还原剂','强碱','浓硫酸'],gridsArr:[0,1,2,3,4,5,6,7]}],
            gridsArr:[0,1]

        };

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
    };

    addLayer=()=>{

        alert(90);
    };
    addGrid=(layerIndex)=>{
        let sa=this.state.gridsArr;

        sa.push(sa[sa.length-1]+1);
        this.setState({
            gridsArr:sa,
        });
    };
    renderCardThree=()=>{
        return(
            <View style={{width:DeviceUtils.WIDTH-30,backgroundColor: 'white',marginTop: 10,borderRadius:7,paddingBottom: 10}}>
                <View style={{flexDirection:'row',marginLeft:10,marginTop:11,alignItems:'center',marginBottom: 15}}>
                    <Image style={{width: 4, height: 18,}} source={require('../../images/cabinet/shit.png')}/>
                    <Text style={{color: '#383838', fontSize: 15,marginLeft:4}}>智能柜层格信息</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    <ImageBackground source={require('../../images/cabinet/ceng.png')} style={{width: 55, height: 55,alignSelf:'center',marginLeft:15,alignItems:'center'}}>
                        <Text style={{
                            color: 'white',
                            fontSize: 9,
                            marginTop: 33,
                        }}>第一层</Text>
                    </ImageBackground>
                    <View style={{flex:1,}}>
                        <CustomTextInput
                            value={"32424"}
                            labelWidth={60}
                            height={30}
                            text={'种类描述:'}
                            onChangeText={this._onTextChange}
                            ContainerStyle={[styles.ContainerStyle,{ marginLeft:0,}]}
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
                            ContainerStyle={[styles.ContainerStyle,{ marginLeft:0,}]}
                            placeholder=""
                            underlineColorAndroid="transparent"
                            textInputStyle={styles.textInput}
                        />
                        <DropdownSelect
                            ContainerStyle={{height:30,marginBottom: 10,marginLeft:0,marginRight:20,}}
                            leftWrapper={{width:60}}
                            leftText={'种类名称:'}
                            // leftMargin={70}
                            leftMargin={35}
                            itemHeight={30}
                            rightWrapper={{borderColor:'#D9D9D9',marginLeft:10}}
                        />
                    </View>
                </View>
                <Text style={{color: '#565656', fontSize: 14,marginLeft:15,}}>按种类添加格：</Text>
                {this.renderChemicalKinds()}
                {this.renderGrids()}
                <TouchableOpacity style={{alignItems:'center',marginTop:10}}  onPress={() => this.addLayer()}>
                    <Image style={{width: 43, height: 43,}} source={require('../../images/cabinet/addb.png')}/>
                    <Text style={{color: '#4D9EFF', fontSize: 10}}>添加层</Text>
                </TouchableOpacity>
            </View>
        )
    };

    renderChemicalKinds=()=>{
        var content =this.state.chemicalKinds.map((item, i) => {
            let color=(this.state.selectKindIndex==i)?'white':'#7EBAFF';
            let bac=(this.state.selectKindIndex==i)?'#86BDFF':'white';
            let borderStyle=(this.state.selectKindIndex==i)?null:{borderColor:'#7EBAFF',borderWidth:1};
            return (
                <TouchableOpacity key={i} style={[{height: 23,marginLeft: 8,backgroundColor:bac,marginTop:10,justifyContent: 'center',borderRadius:10},borderStyle]}
                                  onPress={() => this.pressItem(1,i,item)}>
                    <Text style={{color:color, fontSize: 12,alignSelf: 'center',paddingLeft: 10,paddingRight: 10}}>{item}</Text>
                </TouchableOpacity>
            )
        });
        return (
            <View style={{flexDirection:'row', flexWrap:'wrap',marginLeft:7,marginRight:20}}>
                {content}
            </View>
        );
    };

    renderGrids=()=>{
        let layerIndex=0;

        let content =this.state.gridsArr.map((item, i) => {
            if(i==(this.state.gridsArr.length-1)){
                return(
                    <TouchableOpacity key={i} style={{marginLeft: 15,marginTop:10}} onPress={() => this.addGrid(layerIndex)}>
                        <Image  style={{width: 25, height:25, alignItems: 'center',justifyContent:'center'}} source={require('../../images/cabinet/adds.png')}/>
                    </TouchableOpacity>
                )
            }else{
                return (
                    <TouchableOpacity key={i} onPress={() => this.pressItem(1,i,item)}>
                        <ImageBackground  style={{width: 30, height:30, alignItems: 'center',justifyContent:'center',marginTop:10,marginLeft:15,}} source={require('../../images/cabinet/gridnormal.png')}>
                            <Text style={{color: '#4D9EFF', fontSize: 12,}}>{item}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                )
            }
        });
        return (
            <View style={{flexDirection:'row', flexWrap:'wrap',backgroundColor:'#F9F9F9',marginRight:20,marginLeft:20,borderRadius:10,marginTop:15,paddingBottom: 10,alignItems:'center'}}>
                {content}
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title={"添加智能柜"}/>
                <ScrollView>
                    {/*第一个card*/}
                    {this.renderCardOne()}
                    {/*第二个card*/}
                    {this.renderCardTwo()}
                    {/*第三个card*/}
                    {this.renderCardThree()}
                    <Button style={{alignSelf: 'center'}} title={'确定'} disabled={false} onPress={() => alert(90)}/>
                </ScrollView>
            </View>
        )
    }

    renderCardOne=()=>{
        return(
            <View style={{width:DeviceUtils.WIDTH-30,height:256,backgroundColor: 'white',marginTop: 10,borderRadius:7}}>
                <View style={{flexDirection:'row',marginLeft:10,marginTop:11,alignItems:'center',marginBottom: 15,}}>
                    <Image style={{width: 4, height: 18,}} source={require('../../images/cabinet/shit.png')}/>
                    <Text style={{color: '#383838', fontSize: 15,marginLeft:4}}>智能柜基本信息</Text>
                </View>
                <CustomTextInput
                    value={"32424"}
                    labelWidth={60}
                    height={30}
                    text={'柜子名称:'}
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
                    text={'描述:'}
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

        )
    }

    renderCardTwo=()=>{
        return(
            <View style={{width:DeviceUtils.WIDTH-30,height:142,backgroundColor: 'white',marginTop: 10,borderRadius:7}}>
                <View style={{flexDirection:'row',marginLeft:10,marginTop:11,alignItems:'center',marginBottom: 15}}>
                    <Image style={{width: 4, height: 18,}} source={require('../../images/cabinet/shit.png')}/>
                    <Text style={{color: '#383838', fontSize: 15,marginLeft:4}}>智能柜种类信息</Text>
                </View>
                <DropdownSelect
                    ContainerStyle={{height:30,marginBottom: 10,marginLeft:20,marginRight:20,}}
                    leftWrapper={{width:60}}
                    leftText={'种类名称:'}
                    leftMargin={35}
                    itemHeight={30}
                    rightWrapper={{borderColor:'#D9D9D9',marginLeft:10}}
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
        // backgroundColor:'pink',
        marginLeft:20,
        marginRight:20,
    },
    textInput:{
        borderColor:'#D9D9D9',
        borderWidth: 1,
        // backgroundColor:'red',
        marginLeft:10,
        paddingLeft: 5,
    },

    dropdown_3: {
        width: 150,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 1,
    },
    dropdown_3_dropdownTextStyle: {
        backgroundColor: '#000',
        color: '#fff'
    },
    dropdown_3_dropdownTextHighlightStyle: {
        backgroundColor: '#fff',
        color: '#000'
    },
});

function select(store) {
    return {};
}

module.exports = connect(select)(CabinetEdit);