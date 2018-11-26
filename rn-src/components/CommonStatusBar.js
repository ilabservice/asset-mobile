/**
 * 公用状态栏组件
 * Created by RenPeng on 2018/11/19.
 */

import React from 'react';
import {StatusBar} from 'react-native';
import DeviceUtils from "../utils/DeviceUtils";

const CommonStatusBar = () => {
    if (DeviceUtils.IS_SUPPORT_TRANSLUCENT_STATUS) {
        return (
            <StatusBar translucent={true} hidden={false} backgroundColor={'transparent'}
                       barStyle={'light-content'}/>
        )
    }
    return (
        <StatusBar translucent={false} hidden={false}/>
    )
};
export default CommonStatusBar;