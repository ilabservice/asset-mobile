'use strict';
import React, {PureComponent} from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    ProgressBarAndroid,
    ActivityIndicator
} from 'react-native';

class CuttingLine extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <View style={[styles.ss, this.props.style]}/>
        );
    }
}
const styles = StyleSheet.create({
    ss: {
        height: 1,
        backgroundColor: '#F4F6F8',
        marginLeft: 15,
        marginRight: 15,
        shadowColor: '#33353A',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 0.06,
        // elevation: 0.5
    },

});
module.exports = CuttingLine;
