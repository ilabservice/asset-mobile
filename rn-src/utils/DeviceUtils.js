/**
 * 设备工具类
 * Created by RenPeng on 2017/11/17.
 */
import {Dimensions, NativeModules, PixelRatio, Platform, StatusBar, StyleSheet} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const deviceWidthDp = Dimensions.get('window').width;
const deviceHeightDp = Dimensions.get('window').height;

// UI的设计稿宽度(px)
const UI_WIDTH_PX = 750;
// iPhoneX的屏幕宽高(dp)
const X_WIDTH = 375;
const X_HEIGHT = 812;
// iPhoneXS Max的屏幕宽高(dp)
const XS_WIDTH = 414;
const XS_HEIGHT = 896;

export default class DeviceUtils {
    // 屏幕的物理宽度（dp）
    static WIDTH = deviceWidthDp;
    // 屏幕的物理高度（dp）
    static HEIGHT = deviceHeightDp;
    // 是否是iOS系统
    static IS_IOS = Platform.OS === 'ios';
    // 是否支持沉浸式状态栏
    static IS_SUPPORT_TRANSLUCENT_STATUS = DeviceUtils.IS_IOS || Platform.Version >= 21;
    // 是否是iPhoneX
    static IS_IPHONEX = (DeviceUtils.IS_IOS && (
        (deviceHeightDp === X_HEIGHT && deviceWidthDp === X_WIDTH) ||
        (deviceHeightDp === X_WIDTH && deviceWidthDp === X_HEIGHT) ||
        (deviceHeightDp === XS_HEIGHT && deviceWidthDp === XS_WIDTH) ||
        (deviceHeightDp === XS_WIDTH && deviceWidthDp === XS_HEIGHT)));
    // iPhoneX底部保留距离
    static BOTTOM_HEIGHT = DeviceUtils.IS_IPHONEX ? 34 : 0;
    // 状态栏高度（dp）
    static STATUS_BAR_HEIGHT = DeviceUtils.IS_IOS ? (DeviceUtils.IS_IPHONEX ? 44 : 20) : (DeviceUtils.IS_SUPPORT_TRANSLUCENT_STATUS ? StatusBar.currentHeight : 0);
    // 一个像素的宽度（dp）
    static ONE_PX = StyleSheet.hairlineWidth;
    // px转dp函数
    static pxToDp = (uiElementPx = 0) => (uiElementPx * deviceWidthDp / UI_WIDTH_PX);
    // dp转px函数
    static dpToPx = (dp = 0) => (dp * PixelRatio.get());
    // 是否是模拟器
    static IS_Emulator = DeviceInfo.isEmulator();
    // 设备型号
    static MODEL = DeviceInfo.getModel();
    // 是否是平板电脑
    //Todo  NativeModules.ScreenInfo 废弃掉了
    // static IS_TABLET = DeviceUtils.IS_IOS ? DeviceInfo.isTablet() : NativeModules.ScreenInfo.isTablet;
    static IS_TABLET = DeviceUtils.IS_IOS ? DeviceInfo.isTablet() : DeviceInfo.isTablet();
    // APP版本号   如："1.0.0"
    static APP_VERSION = DeviceInfo.getVersion();
    // APP版本    如：100
    static APP_CODE = DeviceInfo.getBuildNumber();
    // 应用包名
    static APPLICATION_ID = DeviceInfo.getBundleId();
    // UniqueID
    static UNIQUE_ID = DeviceInfo.getUniqueID();
}