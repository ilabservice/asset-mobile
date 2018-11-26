/**
 * @flow
 */
'use strict';
import React, {PureComponent} from 'react';
import {
    View,StyleSheet,
    Text, InteractionManager,TouchableWithoutFeedback,TouchableOpacity
} from 'react-native';
const {connect} = require('react-redux');
class StartPageView extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text style={{color:'red',fontSize:50}}>splash页面</Text>

                <TouchableOpacity onPress={()=>{this.props.skipfunc()}}>
                    <View style={styles.skipBtn}>
                        <Text style={styles.skipText}>跳过</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

}
var styles = StyleSheet.create({
    skipBtn: {
        backgroundColor: 'black',
        opacity: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: 60,
        height: 30,
        borderRadius: 15,
        top: 40,
        right: 50
    },
    skipText: {
        color: 'white'
    },
});
function select(store) {
    return {
        token:store.login.token,
    };
}
module.exports = connect(select)(StartPageView);
