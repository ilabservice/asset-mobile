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

const {connect} = require('react-redux');
const SceneUtils = require('../../utils/SceneUtils');
import Swipeable from 'react-native-swipeable';
import RefreshFlatList from "../../components/RefreshFlatList";
import DeviceUtils from "../../utils/DeviceUtils";
import CuttingLine from "../../components/CuttingLine";
import CustomModal from "../../components/CustomModal";
import Button from "../../components/Button";
import DateTimePicker from "../../components/DateTimePicker";
import StringUtils from "../../utils/StringUtils";

const btnWidth=DeviceUtils.WIDTH*0.75;
class ChemicalSearch extends PureComponent {
    props: Props;

    constructor(props) {
        super(props);
        this.state = {
            datas1:['cccc','aaa','bbb','ashkdjhakdhakjd','shit','let','enenen','morning'],
            datas2:['11111122231313','asdasd','enshi'],


            selectedIndex0:-1,
            value0:"",
            selectedIndex1:-1,
            value1:"",

            startText:'开始时间',
            endText:'结束时间',
            startTime:null,
            endTime:null
        };
        this.timeType = '';

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
        this.timer && clearTimeout(this.timer);
    }

    pressItem=(type,index,value)=>{
        //type=0,上面的items
        if(type==0){
            this.setState({
                selectedIndex0:index,
                value0:value
            })
            return;
        }
        //type=1,下面的items
        if(type==1){
            this.setState({
                selectedIndex1:index,
                value1:value
            })
        }
    };

    // justifyContent:'space-between',
    renderItemsOne=()=>{
        var content =this.state.datas1.map((item, i) => {
            return (
                <TouchableOpacity key={i} style={{height: 23,marginLeft: 8,minWidth: (btnWidth-20)/3,backgroundColor:(this.state.selectedIndex0==i)?'#6DACFF':'#F8F8F8',marginTop:10,justifyContent: 'center'}}
                 onPress={() => this.pressItem(0,i,item)}
                >
                   <Text style={{color: (this.state.selectedIndex0==i)?'white':'#404040', fontSize: 12,alignSelf: 'center',paddingLeft: 10,paddingRight: 10}}>{item}</Text>
                </TouchableOpacity>
            )
        });
        return (
            <View style={{width:btnWidth+10,flexDirection:'row', flexWrap:'wrap',}}>
                {content}
            </View>
        );
    };

    renderItemsTwo=()=>{
        var content =this.state.datas2.map((item, i) => {
            return (
                <TouchableOpacity key={i} style={{height: 23,marginLeft: 8,minWidth: (btnWidth-20)/3,backgroundColor:(this.state.selectedIndex1==i)?'#6DACFF':'#F8F8F8',marginTop:10,justifyContent: 'center'}}
                    onPress={() => this.pressItem(1,i,item)}
                >
                    <Text style={{color: (this.state.selectedIndex1==i)?'white':'#404040', fontSize: 12,alignSelf: 'center',paddingLeft: 10,paddingRight: 10}}>{item}</Text>
                </TouchableOpacity>
            )
        });
        return (
            <View style={{width:btnWidth+10,flexDirection:'row', flexWrap:'wrap'}}>
                {content}
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <NavigationSearchBar
                    rightText={"取消"}
                    onPressRight={()=>{SceneUtils.goBack()}}
                    showfiltercon={false}
                />
                <View style={{marginLeft: 15,marginRight: 15,marginTop: 10,backgroundColor: 'white',borderRadius:7,alignItems: 'center'}}>
                    <View style={{width:btnWidth,}}>
                       <Text style={{color: '#323232', fontSize: 14, marginTop: 15}}>化学品类别</Text>
                    </View>
                    {this.renderItemsOne()}
                    <View style={{width:btnWidth,}}>
                        <Text style={{color: '#323232', fontSize: 14, marginTop: 15}}>默认显示</Text>
                    </View>
                    {this.renderItemsTwo()}
                    <View style={{width:btnWidth,}}>
                        <Text style={{color: '#323232', fontSize: 14, marginTop: 15}}>添加时间</Text>
                    </View>
                    <View style={{width:btnWidth,flexDirection:'row',justifyContent:'space-between',marginTop: 10,}}>
                        <TouchableOpacity onPress={() => {this.dateTimePicker.show();this.timeType = 'start'}} style={{flexDirection:'row'}} >
                            <Text style={{color: '#404040', fontSize: 12,}}>{this.state.startText}</Text>
                            <Image style={{width: 6, height: 10,alignSelf:'center',marginLeft:30}} source={require('../../images/cabinet/right.png')}/>
                        </TouchableOpacity>

                        <TouchableOpacity  onPress={() => {this.dateTimePicker.show();this.timeType = 'end'}} style={{flexDirection:'row'}} >
                            <Text style={{color: '#404040', fontSize: 12,}}>{this.state.endText}</Text>
                            <Image style={{width: 6, height: 10,alignSelf:'center',marginLeft:30}} source={require('../../images/cabinet/right.png')}/>
                        </TouchableOpacity>
                    </View>

                    <View style={{width:btnWidth, height:0.5,backgroundColor:'#E6E6E6',marginTop: 10,}}/>
                    <View style={{marginBottom:20}}>
                        <Button wrapperStyle={{marginTop: 20,}}style={{alignSelf: 'center',marginBottom:7}} title={'确定'} disabled={false} onPress={() => alert(90)}/>
                    </View>
                </View>
                <DateTimePicker
                    ref={o => this.dateTimePicker = o}
                    title={"请选择日期"}
                    onSelect={(date) => {
                        var string = StringUtils.dateFormat(date, "yyyy-MM-dd")
                        if (this.timeType == 'start') {
                            this.setState({
                                startTime: date.getTime(),
                                startText: string,
                            })
                        } else {
                            this.setState({
                                endTime: date.getTime(),
                                endText: string,
                            })
                        }
                    }}/>

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

module.exports = connect(select)(ChemicalSearch);
