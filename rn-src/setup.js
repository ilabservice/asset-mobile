/**
 * @flow
 */
'use strict';
import React, {PureComponent} from 'react';
import { Provider, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Store from './store/configureStore';
import FlyApp from "./FlyApp";

import BackAndroidUtils from "./utils/BackAndroidUtils";

console.disableYellowBox = true;
class setup extends PureComponent {

    componentDidMount() {
        BackAndroidUtils.addBackAndroidListener();
    }

    render() {

        return(
            <Provider store={Store.store}>
                <PersistGate loading={null} persistor={Store.persistor}>
                    <FlyApp/>
                </PersistGate>
            </Provider>
        );
    }
}
module.exports = setup;
