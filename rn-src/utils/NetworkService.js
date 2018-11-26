
/**
 *@author: meekoMa
 *@date: 18/11/24 19:06:30
 *@desc: 请求工具类
 *
 */
'use strict';

import React from 'react';
const UrlHelper = require('./UrlHelper');

export type RequestConf = {
    url: string;        // url
    trueUrl: string;    // 真实url,
    params?: Object;    // 参数
    method?: string;    // 请求方法
    isForm?: boolean;   // 是否form方式
};

const DEFAULT_REQUEST_CONF = {
    url: "",
    trueUrl:null,//用来对付url中间有参数
    urlParams: null,
    params: null,
    method: "GET",
    isForm: false,
};

var token;

var NetworkService = {
    setToken: (to) => {
        token=to
    },

    fetch: function (conf: RequestConf, onSuccess, onFailure) {
        if (!conf) {
            conf = {};
        }

        conf = {...DEFAULT_REQUEST_CONF, ...conf};

        let method = (conf.method || 'GET').toUpperCase();
        let options = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'X-Authorization': 'Bearer ' +token,
                'x-language': 'chinese'
            }
        };

        let url;
        if (method === 'POST') {
            url=UrlHelper.getUrl(conf.url, conf.urlParams);

            if (conf.isForm) {// 对于Form方式
                options.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
                if (conf.params) {
                    options.body = UrlHelper.toQueryString(conf.params);
                }
            } else {
                if (conf.params) {
                    options.body = JSON.stringify(conf.params);
                }
            }
        } else if (method === 'GET') {
            if (conf.params) {
               url = UrlHelper.getUrlWithParams(url, conf.params);
            }
        }

        return dispatch => {
            return fetch(url, options)
                .then(response => response.json())
                .then(json => {
                    if (json && Number(json.code) === 0) {
                        console.log("请求网络成功：");
                        console.log(url);
                        console.log(options);
                        console.log(json);
                        if (onSuccess) {
                            return onSuccess(json.data, dispatch);
                        }
                    } else {
                        return Promise.reject(json);
                    }
                })
                .catch(error => {
                    console.log("请求网络失败：");
                    console.log(url);
                    console.log(options);
                    console.log(error);
                    if (onFailure) {
                        return onFailure(error, dispatch);
                    }
                });
        }
    }
};
module.exports = NetworkService;
