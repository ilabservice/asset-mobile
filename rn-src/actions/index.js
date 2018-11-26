/**
 *
 *action 主要用来传递操作State的信息，type属性是必须的，一般用来表达处理state数据的方式
 * @flow
 *
 */
'use strict';
const login = require('./login');
module.exports = {
    ...login,
};
