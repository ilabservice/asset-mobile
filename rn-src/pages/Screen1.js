/**
 * @flow
 */
'use strict';
import React, {PureComponent} from 'react';
import {
    View,
    StyleSheet,
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
    DeviceEventEmitter, Animated,
} from 'react-native';
const {connect} = require('react-redux');
const SceneUtils = require('../utils/SceneUtils');
import NavigationBar from "../components/NavigationBar";
import Language from "../common/language/Language";

class Screen1 extends PureComponent {
    props: Props;
    constructor(props) {
        super(props);
        this.propsParams = this.props.navigation.state.params;
        this.state = {

        };

    }

    componentDidMount() {
        let that = this;
        InteractionManager.runAfterInteractions(() => {

        });
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar leftText={"iLabCabinet"} />

                <Text style={{fontSize:30,color:'#555555',alignSelf:'center'}}>页面1</Text>

                <Button
                    title="replace 去页面2  并传参数"
                    onPress={() =>
                        // SceneUtils.gotoTabView('FlyScreenMine')
                        SceneUtils.gotoScene('Screen2',{name:'流氓大米'},'replace')
                        // this.props.navigation.replace('Screen2',{name:'流氓大米'})
                    }
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

function select(store) {
    return {

    };
}
module.exports = connect(select)(Screen1);