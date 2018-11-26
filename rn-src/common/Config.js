/**
 * 配置开发的版本,开发、测试、正式版本
 * Created by RenPeng on 2017/11/20 0020.
 */
import Env from './Env';

//更换测试接口与正式接口
export const DEV_VER = Env.DEVELOP;
// 正式接口
export const Config_R = {
    DOMAIN: 'http://prod.ilabservice.cloud',
};

// 测试接口
export const Config_T = {
    DOMAIN: ''
};

// 开发接口
export const Config_D = {
    // DOMAIN: 'http://staging.ilabservice.cloud'
    //api1.0测试
    // DOMAIN: 'http://20.190.63.141:8999'
    //api2.0测试(黄文迪测试)
    //    DOMAIN: 'http://139.217.201.224:8901',
    //api2.0测试(宋健测试)
    DOMAIN: 'http://139.219.133.216:8901'
};

export default (DEV_VER === Env.RELEASE ? Config_R : (DEV_VER === Env.TEST ? Config_T : Config_D));
