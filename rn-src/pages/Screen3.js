/**
 * @flow
 */
'use strict';
import React, {PureComponent} from 'react';
import {
    View,
    StyleSheet,
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
    DeviceEventEmitter, Animated,
} from 'react-native';
import NavigationBar from "../components/NavigationBar";
import Language from "../common/language/Language";

const {connect} = require('react-redux');
const SceneUtils = require('../utils/SceneUtils');
import DropdownSelect from "../components/DropdownSelect";

import Button from "../components/Button";

class Screen3 extends PureComponent {
    props: Props;

    constructor(props) {
        super(props);
        this.state = {
            showPop: false,
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
                <NavigationBar title={Language.get(Language.TEXTS.account.configuration)}/>
                <Text style={{fontSize: 30, color: '#555555', alignSelf: 'center'}}>页面3</Text>
                <Text style={{fontSize: 30, color: '#555555', alignSelf: 'center'}}>页面3</Text>

                <DropdownSelect
                />
                {/*<Text style={{fontSize: 30, color: '#555555', alignSelf: 'center'}}>页面3</Text>*/}
                <DropdownSelect
                />

                <Button
                title=" 编辑"
                onPress={() =>
                SceneUtils.gotoTabView('ChemicalEdit')
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
    return {};
}

module.exports = connect(select)(Screen3);