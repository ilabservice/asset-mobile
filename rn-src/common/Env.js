/**
 * APP环境配置
 * Created by RenPeng on 2017/11/17 0017.
 */
import DeviceUtils from "../utils/DeviceUtils";

export default class Env {
    static DEVELOP = 0;   // 开发版本
    static TEST = 1;      // 测试版本
    static RELEASE = 2;   // 正式版本

    static APP_NAME = 'iLabService';                // APP名称
    static APP_VERSION = DeviceUtils.APP_VERSION;   // APP版本
    static APP_CODE = DeviceUtils.APP_CODE;         // APP版本号

    static DEVELOP_ENV = 0;                         // 开发者设置的环境：0APP打包的环境，1生产环境，2开发环境
    static CUSTOM_URL = "";                         // 用户自定义设置的URL
}