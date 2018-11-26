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
const SceneUtils = require('../../utils/SceneUtils');
// const FlyHeader = require('../../components/FlyHeader');


class FlyScreenShare extends PureComponent {
    props: Props;
    constructor(props) {
        super(props);
        this.state = {

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

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize:30,color:'#555555',alignSelf:'center'}}>分享</Text>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
});

function select(store) {
    return {

    };
}
module.exports = connect(select)(FlyScreenShare);