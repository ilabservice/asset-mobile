/**
 * 带下拉刷新和加载更多的FlatList
 */
import React, {PureComponent} from 'react';
import {
    StyleSheet, View, Text, FlatList, TouchableOpacity, RefreshControl, Image,
    ActivityIndicator
} from 'react-native';
import DeviceUtils from '../utils/DeviceUtils';
import Color from "../common/Color";
import Language from "../common/language/Language";

 class RefreshFlatList extends PureComponent{
    // 构造
    constructor(props) {
        super(props);
        this.enableRefresh = this.props.enableRefresh !== false;    // 是否开启下拉刷新
        this.enableLoadMore = this.props.enableLoadMore !== false;  // 是否开启上拉更多
        this.deviderWidth = this.props.deviderWidth !== undefined ? this.props.deviderWidth : 1;  // 分割线宽度
        this.deviderColor = this.props.deviderColor || Color.LINE;                  // 分割线颜色
        // 初始状态
        this.state = {
            data: this.props.data || [],
            status: 0, // 状态：0首次加载，1正常，2没有更多了，3有数据但是网络失败，4空列表,
            isRefreshing: false,
        };
        this.isLoading = false;
    }

    render() {
        // 刚进入列表时，返回Loading页面
        if (this.state.status === 0) {
            return (
                <View style={styles.page_root}>
                    <ActivityIndicator size={'large'} color={'#7CD7FF'}/>
                    <Text style={{
                        marginTop: 15,
                        fontSize: 16,
                        color: '#7CD7FF'
                    }}>{Language.get(Language.TEXTS.other.loading)}</Text>
                </View>
            );
        }

        // 请求失败，且没有列表数据，显示可刷新的错误界面
        if (this.state.status === 3) {
            return (
                <View style={styles.page_root}>
                    <Image style={{width: 100, height: 100}} source={require('../images/list/net_error.png')}/>
                    <Text style={{
                        marginTop: 15,
                        fontSize: 16,
                        color: Color.TEXT
                    }}>{Language.get(Language.TEXTS.other.abnormal_data)}</Text>
                    <TouchableOpacity
                        style={{
                            marginTop: 15,
                            paddingVertical: 2,
                            borderBottomWidth: DeviceUtils.ONE_PX,
                            borderBottomColor: Color.THEME
                        }}
                        activeOpacity={0.75} onPress={this.handlePressReload}>
                        <Text style={{
                            fontSize: 16,
                            color: Color.THEME
                        }}>{Language.get(Language.TEXTS.other.reload)}</Text>
                    </TouchableOpacity>
                </View>
            );
        }

        // 请求正常，但无数据
        if (this.state.status === 4) {
            return (
                <View style={styles.page_root}>
                    <Image style={{width: 100, height: 100}} source={require('../images/list/list_empty.png')}/>
                    <Text style={{
                        marginTop: 15,
                        fontSize: 16,
                        color: Color.TEXT
                    }}>{Language.get(Language.TEXTS.other.no_data)}</Text>
                </View>
            );
        }

        return (
            <FlatList
                style={this.props.style}
                ItemSeparatorComponent={() => {
                    return <TouchableOpacity style={{height: this.deviderWidth, backgroundColor: this.deviderColor}}
                                             activeOpacity={1}/>
                }}
                refreshControl={
                    this.enableRefresh ?
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this.onRefresh}
                            title="Loading..."
                            colors={[Color.THEME]}
                        /> : null
                }
                ListFooterComponent={this.renderFooter}
                {...this.props}
                onRefresh={undefined}
                data={this.state.data}
            />
        )
    }

    // 渲染加载更多的loading图
    renderFooter = () => {
        if (!this.enableLoadMore) {
            return null;
        }

        // 已经有列表数据了
        if (this.state.status === 1) {
            // 默认加载更多样式
            return (
                <View style={styles.footer}>
                    <ActivityIndicator style={{marginRight: 10}} size={'small'} color={Color.TEXT}/>
                    <Text style={styles.loadmore_text}>{Language.get(Language.TEXTS.other.more_data)}</Text>
                </View>
            );
        }

        // 没有更多了
        if (this.state.status === 2) {
            return (
                <View style={styles.footer}>
                    <Text style={styles.loadmore_text}>{Language.get(Language.TEXTS.other.no_more_information)}</Text>
                </View>
            );
        }

        // 有数据但是网络失败
        return (
            <View style={styles.footer}>
                <Text style={styles.loadmore_text}>{Language.get(Language.TEXTS.other.bad_internet_connection)}</Text>
            </View>
        );
    };

    onRefresh = () => {
        this.setState({
            isRefreshing: true,
        }, () => {
            this.props.onRefresh && this.props.onRefresh();
        });
    };

    onEndReached = () => {
        if (this.state.status === 1 && !this.isLoading) {
            this.props.enableLoadMore && this.props.onLoadMore && this.props.onLoadMore();
            this.isLoading = true;
        }
    };

    handlePressReload = () => {
        this.setState({status: 0}, () => this.props.onPressReload && this.props.onPressReload());
    };


    /**
     * 设置数据集
     * @param {Array} dataList      数据集
     * @param {Boolean} isLoadAll   是否已经全部加载,默认false
     * @param {Function} callback   设置完成回调
     */
    setData = (dataList = [], isLoadAll = false, callback) => {
        let status = isLoadAll ? 2 : 1;
        if (dataList.length === 0) status = 4;

        this.setState({
            data: dataList,
            isRefreshing: false,
            status,
        }, () => {
            this.isLoading = false;
            callback && callback();
        });
    };

    /**
     * 设置ListView为网络错误状态
     */
    setError = () => {
        this.setState({
            isRefreshing: false,
            status: 3,
        }, () => {
            this.isLoading = false;
        });
    }
}

const styles = StyleSheet.create({
    page_root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: 10
    },
    loadmore_text: {fontSize: 16, color: Color.TEXT}
});

module.exports = RefreshFlatList;