/**
 * @providesModule FlyModal
 *
 */
'use strict'
import React, {PureComponent} from 'react';
import {
    View,
    Modal,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    InteractionManager
} from 'react-native';

const PropTypes = require('prop-types');

export type Props = {
    animationType: "slide" | "fade" | "none";
    backdropColor: string;
    pressBackdropToClose: boolean;
    onOpened: () => any;
    onClosed: () => any;
};

class CustomModal extends PureComponent {
    props: Props;
    static propTypes = {
        animationType: PropTypes.oneOf(["slide", "fade", "none"]),
        backdropColor: PropTypes.string,
        pressBackdropToClose: PropTypes.bool,
        onOpened: PropTypes.func,
        onClosed: PropTypes.func,
    }

    constructor(props) {
        super(props);

        (this: any).open = this.open.bind(this);
        (this: any).close = this.close.bind(this);

        this.state = {
            modalVisible: false
        }

    }

    static defaultProps = {
        animationType: "slide",//fade
        backdropColor: 'rgba(0, 0, 0, 0.6)',
        pressBackdropToClose: true,
    };

    open() {
        this.setState({modalVisible: true})
    }

    close() {
        this.setState({modalVisible: false});
        if (this.props.onClosed) {
            this.props.onClosed();
        }
    }

    render() {
        let onPressBackdrop = this.props.pressBackdropToClose ? (() => {
            this.setState({modalVisible: false})
        }) : null;
        return (
            <Modal transparent={true} animationType={this.props.animationType} visible={this.state.modalVisible}
                   onRequestClose={() => {
                       this.setState({modalVisible: false});
                   }}>
                <View style={[styles.backdrop, {backgroundColor: this.props.backdropColor}]}>
                    <TouchableWithoutFeedback onPress={onPressBackdrop}>
                        <View style={[styles.backdrop, {backgroundColor: 'transparent'}]}></View>
                    </TouchableWithoutFeedback>
                    <View style={styles.container}>
                        {this.props.children}
                    </View>
                </View>
            </Modal>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }
});

module.exports = CustomModal;
