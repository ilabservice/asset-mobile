'use strict';
import React, {PureComponent} from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    ProgressBarAndroid,
    ActivityIndicator
} from 'react-native';

const styles = StyleSheet.create({
    ss: {
        height: 1,
        backgroundColor: '#F4F6F8',
        marginLeft: 14,
        marginRight: 14,
        shadowColor: '#33353A',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 0.06,
        // elevation: 0.5
    },

});

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

module.exports = CuttingLine;
