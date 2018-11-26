/**
 *
 *
 * @providesModule UrlHelper
 * @flow
 */
'use strict';
const appConfig = {
    // DOMAIN: 'http://prod.ilabservice.cloud/api/v2/', //正式版地址
    DOMAIN: 'http://139.219.133.216:8901/api/v2/' //开发板地址
};

const urlMap = {
    //登录注册
    'login':'unsecure/login', // 登录  POST
    'downDeviceFile':'/secure/customer/monitor_target_lab_device/{id}/download/file/{fileId}'//下载设备文件  GET

};

var UrlHelper = {
    //Todo 各方法的注释以后添加
    restReplace: (url, params) => {
        Object.keys(params)
            .sort()
            .forEach(function (key) {
                let reg = new RegExp("{\\s*" + key + "\\s*}", "gi");
                url = url.replace(reg, params[key]);
            });
        return url;
    },

    toQueryString: (obj) => {
        return obj
            ? Object.keys(obj).sort().map(function (key) {
                var val = obj[key];
                if (Array.isArray(val)) {
                    return val.sort().map(function (val2) {
                        return encodeURIComponent(key) + '=' + encodeURIComponent(Utils.NVL(val2, ''));
                    }).join('&');
                }

                return encodeURIComponent(key) + '=' + encodeURIComponent(Utils.NVL(val, ''));
            }).join('&')
            : '';
    },

    getUrl: (key, params) => {
        let url = urlMap[key];
        if (params) {
            url =UrlHelper.restReplace(url, params);
        }
        return appConfig.DOMAIN + url;
    },

    getUrlWithParams: (url, params) => {
        var paramStr = '';
        if (params) {
            paramStr = Utils.toQueryString(params);
            paramStr = ((url.indexOf('?') > -1)
                ? '&'
                : '?') + paramStr;
        }

        return url + paramStr;
    },
};
module.exports = UrlHelper;

