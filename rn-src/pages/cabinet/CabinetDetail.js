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
    FlatList,
    TextInput,
    Linking,
    ScrollView,
    AppState,
    TouchableHighlight,
    InteractionManager,
    DeviceEventEmitter, Animated, ImageBackground,
} from 'react-native';
import NavigationBar from "../../components/NavigationBar";
import Color from "../../common/Color";

const {connect} = require('react-redux');
const SceneUtils = require('../../utils/SceneUtils');
import Swipeable from 'react-native-swipeable';
import RefreshFlatList from "../../components/RefreshFlatList";
import DeviceUtils from "../../utils/DeviceUtils";
import CuttingLine from "../../components/CuttingLine";
import CustomModal from "../../components/CustomModal";
import SegmentedControlTab from "../../components/SegmentedControlTab";
import Collapsible from 'react-native-collapsible';
import LinearGradient from 'react-native-linear-gradient';

const itemWidth=(DeviceUtils.WIDTH-90)/2;
class CabinetDetail extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            collapsed: true,
            currentCollapsedIndex:-1,
        };
        this.datas = [
            {
                title: '第一层',
                count:10
            },
            {
                title: '第二层',
                count:9
            },
            {
                title: '第三层',
                count:60
            },
        ];
        this.data =[0,1,2,3,4,5,6,7,8,9]
        this.moDatas = [
            {
                title: '温度',
                status:0,
                value:'2.00℃',
                iconSource: require('../../images/cabinet/temp.png'),
                textColor:'#1AA7FB'
            },
            {
                title: '湿度',
                status:0,
                value:'4.00%',
                iconSource: require('../../images/cabinet/hum.png'),
                textColor:'#1CCDC3'
            },
            {
                title: '电流',
                status:0,
                value:'2.00A',
                iconSource: require('../../images/cabinet/current.png'),
                textColor:'#FCBF03'
            },{
                title: '电压',
                status:0,
                value:'220.00V',
                iconSource: require('../../images/cabinet/voltage.png'),
                textColor:'#FF9A49'
            }
        ];
    }

    componentDidMount() {
        let that = this;
        InteractionManager.runAfterInteractions(() => {


        });
    }

    handleCollapse=(index)=>{
        if(index==this.state.currentCollapsedIndex){
            this.setState({ currentCollapsedIndex:-1 });
            return;
        }
        this.setState({
            currentCollapsedIndex:index
        });

        // if(index==1){
        //     this.ScrollView.scrollTo({x:0, y:125, animated:true});
        // }
        // if(index==2){
        //     this.ScrollView.scrollTo({x:0, y:250, animated:true});
        // }
    };

    renderCards=()=>{
        var content = this.datas.map((item, i) => {
            var flag=(this.state.currentCollapsedIndex==i)?false:true;

            if(this.state.currentCollapsedIndex!=-1 && this.state.currentCollapsedIndex!=i){
                return(<View/>)
            }

            return (
                <View style={styles.header}>
                    <ImageBackground style={{position:'absolute',top:0,left:0,width: 52, height: 15,justifyContent: 'center'}} source={require('../../images/cabinet/first.png')}>
                        <Text style={{fontSize:10,color:'#4B92FF',marginLeft: 4}}>{item.title}</Text>
                    </ImageBackground>
                    <View style={{flexDirection:'row',flex:1,height:100}}>
                        {/*左边*/}
                        <View style={{flex:1,alignItems: 'center',justifyContent:'center'}}>
                            <ImageBackground style={{width: 51, height: 51,justifyContent:'center'}} source={require('../../images/cabinet/cir.png')}>
                                <Text style={{fontSize:14,color:'#B09CFF',marginLeft: 4,alignSelf: 'center'}}>{item.count}</Text>
                            </ImageBackground>
                            <View style={{flexDirection:'row'}}>
                                <Image style={{width: 10, height: 10}} source={require('../../images/cabinet/normal.png')}/>
                                <Text style={{color: '#B8B8B8', fontSize: 12,}}>化学品总数</Text>
                            </View>
                        </View>
                        {/*中间*/}
                        {flag?
                        <TouchableOpacity  onPress={() => {this.handleCollapse(i);}} >
                            <View style={{flex:1,}}/>
                            <Image style={{width: 23, height: 20,marginBottom:5}} source={require('../../images/cabinet/down.png')}/>
                        </TouchableOpacity>:
                            <View style={{width: 23,}}/>
                        }
                        {/*右边*/}
                        <View style={{flex:1,alignItems: 'center',justifyContent:'center'}}>
                            <ImageBackground style={{width: 51, height: 51,justifyContent:'center'}} source={require('../../images/cabinet/cir.png')}>
                                <Text style={{fontSize:14,color:'#B09CFF',marginLeft: 4,alignSelf: 'center'}}>{item.count}</Text>
                            </ImageBackground>
                            <View style={{flexDirection:'row'}}>
                                <Image style={{width: 10, height: 10}} source={require('../../images/cabinet/normal.png')}/>
                                <Text style={{color: '#B8B8B8', fontSize: 12,}}>化学品总数</Text>
                            </View>
                        </View>
                    </View>
                    {flag?<LinearGradient
                        start={{x:0, y: 0.3}} end={{x:0, y: 1}}
                        colors={['#C9F3FF','#A3DAFF']}
                        style={{height:5}}/>:
                        <LinearGradient
                            start={{x:0, y: 0.2}} end={{x:0, y: 0.6}}
                            colors={['#efefef','#F8F8F8']}
                            style={{height:20}}/>
                    }

                    <Collapsible collapsed={flag} align="center">
                        <FlatList
                            style={{backgroundColor:'#F8F8F8'}}
                            renderItem={({item, index}) => this._renderItem({item, index})}
                            data={this.data}
                            numColumns={2}
                            columnWrapperStyle={styles.columnStyle}
                            horizontal={false}
                            ListFooterComponent={this._renderFootorComponent()}
                        />
                    </Collapsible>
                </View>
            )
        });
        return (
            <View>
                {content}
            </View>
        )
    };

    _renderFootorComponent=()=>{
        return (
            <View style={{height:30,}}>
                <TouchableOpacity style={{width:100,height:30,alignSelf:'center'}} onPress={() => {this.setState({ currentCollapsedIndex:-1 });}} >
                    <Image style={{width: 23, height: 20,alignSelf:'center'}} source={require('../../images/cabinet/up.png')}/>
                </TouchableOpacity>
            </View>
        );
    };

    _renderItem=({item, index})=>{
        return (
            <View  key={index+''} style={{width:itemWidth,height:110,backgroundColor:'white',marginLeft:20,marginBottom:20}}>
                <View style={{flexDirection:'row',marginLeft:15,marginTop:11,alignItems:'center'}}>
                    <Image style={{width: 26, height: 26,alignSelf:'center'}} source={require('../../images/cabinet/wine.png')}/>
                    <Text style={{color: '#4B92FF', fontSize: 12,marginLeft:7}}>{index}</Text>
                </View>
                <CuttingLine style={{marginTop: 7,marginBottom:7}}/>
                <View style={{flexDirection:'row',marginLeft:15,alignItems:'center'}}>
                    <ImageBackground style={{width: 30, height: 14}} source={require('../../images/cabinet/status1.png')}>
                        <Text style={{fontSize:10,color:'#FFFFFF',alignSelf:'center'}}>状态</Text>
                    </ImageBackground>
                    <Text style={{fontSize:10,color:'#8D8D8D',marginLeft:7}}>待归还</Text>
                </View>
                <View style={{flexDirection:'row',marginLeft:15,alignItems:'center',marginTop:7}}>
                    <ImageBackground style={{width: 30, height: 14}} source={require('../../images/cabinet/status2.png')}>
                        <Text style={{fontSize:10,color:'#FFFFFF',alignSelf:'center'}}>位置</Text>
                    </ImageBackground>
                    <Text style={{fontSize:10,color:'#8D8D8D',marginLeft:7}}>17</Text>
                </View>
            </View>
        )
    };

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title={"智能柜详情"} rightIcon={require("../../images/cabinet/edit.png")}/>
                <View style={{
                    width: DeviceUtils.WIDTH * 0.62,
                    marginTop: 10,
                    marginBottom: 13,
                    height: 24,
                    alignSelf: 'center'
                }}>
                    <SegmentedControlTab
                        selectedIndex={this.state.selectedIndex}
                        activeTabStyle={{backgroundColor: '#4B92FF',}}
                        onTabPress={(index)=>{this.setState({selectedIndex: index,})}}
                        values={['化学品信息', '监控信息']}
                        tabStyle={{width: DeviceUtils.WIDTH * 0.32, height: 26, backgroundColor: '#EDF5FA'}}
                        tabTextStyle={{fontsize: 12, color: '#4B92FF'}}
                        activeTabTextStyle={{fontsize: 12, color: 'white'}}
                        borderRadius={30}
                    />
                </View>
                {this.state.selectedIndex==0?
                <ScrollView style={{flex:1,}} ref={(ref)=>this.ScrollView=ref}>
                    {this.renderCards()}
                </ScrollView>:
                    <View style={{height:180,backgroundColor:"white",marginLeft:15,marginRight:15,borderRadius:7}}>
                        <Text style={{color: '#323232', fontSize: 14,marginLeft:15,marginTop: 7}}>智能柜编号：795#233</Text>
                        <CuttingLine style={{marginTop: 7,marginBottom:7}}/>
                        {this.renderIcons()}
                    </View>
                }
            </View>
        )
    }

    renderIcons = () => {
        var content =this.moDatas.map((item, i) => {
            var borderBottom=(i==0 || i==1)? {
                borderBottomColor:'#EEEEEE',
                borderBottomWidth: 0.5,
                }:null;
            let textColor=item.textColor;

            var borderRight=(i==0 || i==2)? {
                borderRightColor:'#EEEEEE',
                borderRightWidth: 0.5,
            }:null;

            var paddingLeft=(i==1 || i==3)? {
                paddingLeft:15
            }:null;

            return (
                <View key={i} style={[{width:(DeviceUtils.WIDTH-60)/2,height:70}
                ,borderBottom,paddingLeft]}>
                    <View style={{width:40,flexDirection:'row',paddingTop: 11}}>
                        <Image style={{width: 10, height: 10,alignSelf:'center'}} source={require('../../images/cabinet/unnormal.png')}/>
                        <Text style={{color: '#A4A4A4', fontSize: 10,}}>{item.title}</Text>
                    </View>
                    <View style={[{flexDirection:'row',marginLeft:32},borderRight]}>
                        <Image style={{width: 34, height: 34,alignSelf:'center'}} source={item.iconSource}/>
                        <View style={{justifyContent:'space-between',marginLeft:11}}>
                            <Text style={{color: '#757575', fontSize: 14,paddingTop:1}}>{item.title}</Text>
                            <Text style={{color:textColor, fontSize: 12,}}>{item.title}</Text>
                        </View>
                    </View>
                </View>
            )
        });
        return (
            <View style={{flex:1,flexDirection:'row', flexWrap:'wrap',justifyContent:'center'}}>
                {content}
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.THEME,
    },

    header: {
        backgroundColor: 'white',
        flex:1,
        marginLeft: 15,
        marginRight: 15,
        marginBottom:20,
    },
    active: {
        backgroundColor: 'green',
        // flex:1,
        marginLeft: 15,
        marginRight: 15,
    },
    columnStyle:{
        // marginLeft: 10,
        // marginRight: 10
    },



    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '300',
        marginBottom: 20,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },

    selectors: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selector: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    activeSelector: {
        fontWeight: 'bold',
    },
    selectTitle: {
        fontSize: 14,
        fontWeight: '500',
        padding: 10,
    },
    multipleToggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 30,
        alignItems: 'center',
    },
    multipleToggle__title: {
        fontSize: 16,
        marginRight: 8,
    },

});

function select(store) {
    return {};
}

module.exports = connect(select)(CabinetDetail);