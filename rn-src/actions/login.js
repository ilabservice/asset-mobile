/**
 *
 *
 * @flow
 *
 */
'use strict';
const NetworkService = require('../utils/NetworkService');

//退出登录
function logout():ThunkAction {
    return (dispatch, getState) => {
        dispatch({
            type: "LOGOUT",
        });
    };
}

//登录
function risklogin(params): ThunkAction {
    return (dispatch, getState) => {
        let conf = {
            url: 'login',
            method: 'POST',
            params: params,
        };

        let onSuccess = (data, dispatch) => {
            dispatch({
                type: "LOGIN",
                data:data.token
            });
            console.log('登录成功');
            return Promise.resolve(data);
        };

        let onFailure = (error, dispatch) => {
            console.log('登录失败 ');
            dispatch({
                type: "LOGIN",
                data:"adiafdasdf"
            });
            return Promise.reject(error);
        };

        return dispatch(NetworkService.fetch(conf, onSuccess, onFailure))
    }
}
module.exports = {
    logout,
    risklogin,
};
