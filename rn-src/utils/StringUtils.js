/**
 * 字符串工具类
 *
 */
export default class StringUtils {

    /**
     * 检验字符串是否为空
     * @param str   字符串
     * @returns {boolean}
     */
    static isEmpty = (str) => {
        return str === null || str === '' || str === undefined;
    };

    /**
     * 去掉字符串首尾的空格
     */
    static trim = (str) => {
        if (str !== null && str !== '' && str !== undefined) {
            return str.replace(/(^\s+)|(\s+$)/g, '');
        }
        return '';
    };

    /**
     * 字符串子串全部替换
     * @param str       原字符串
     * @param substr    待替换子串
     * @param replacemen    替换为
     */
    static replaceAll = (str, substr = "", replacemen = "") => {
        if (str !== null && str !== '' && str !== undefined) {
            return str.replace(new RegExp(substr, 'g'), replacemen);
        }
        return '';
    };

    /**
     * 数字前面自动补零
     * @param num   传入数字
     * @param n     限定位数
     * @returns {string} num：6，n：3，结果为：006
     */
    static pad = (num, n) => (Array(n).join(0) + num).slice(-n);

    /**
     * 去掉字符串的所有空格
     * @param str
     */
    static entity = (str) => {
        if (str !== null && str !== '' && str !== undefined) {
            return str.replace(' ', '');
        }
        return '';
    };

    /**
     * 去掉字符串的&nbsp;
     */
    static removeNbsp = (string) => {
        if (string !== null) {
            return string.replace(/&nbsp;/ig, ' ');
        }
        return '';
    };

    /**
     * 检验字符串是纯数字
     * @param string    字符串
     * @returns {boolean}
     */
    static validateNumber = (string) => {
        if (string === null || string === '') {
            return false;
        }
        const reg = /^[0-9]*$/;
        return reg.test(string);
    };

    /**
     * 检验字符串是正负浮点数
     * @param string
     * @returns {boolean}
     */
    static validateFloat = (string) => {
        if (string === null || string === '') {
            return false;
        }
        const reg = /^(-?\d+)(\.\d+)?$/;
        return reg.test(string);
    };

    /**
     * 删除字符串里面的非数字字符
     * @param string    字符串
     * @returns {string}
     */
    static filterNumber = (string) => {
        if (string === null || string === '') {
            return '';
        }

        return string.replace(/[^0-9]/g, '');
    };

    /**
     * 检验字符串是否是手机号
     * @param string    字符串
     * @returns {boolean}
     */
    static validatePhone = (string) => {
        if (string === null || string === '') {
            return false;
        }
        const reg = /^[1][3-9]+\d{9}/;
        return reg.test(string);
    };

    /**
     * 检验字符串是否是Email地址
     * @param string    字符串
     * @returns {boolean}
     */
    static validateEmail = (string) => {
        if (string === null || string === '') {
            return false;
        }
        const reg = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
        return reg.test(string);
    };

    /**
     * 检验字符串是否是密码
     * 以字母开头，长度在6~16之间，只能包含字符、数字和下划线
     * @param string    字符串
     * @returns {boolean}
     */
    static validatePassword = (string) => {
        if (string === null || string === '') {
            return false;
        }
        const reg = /^[a-zA-Z]\w{5,15}$/;
        return reg.test(string);
    };

    /**
     * 检验字符串是否是JSON格式
     * @param string        字符串
     * @returns {boolean}
     */
    static isJSON = (string) => {
        if (StringUtils.isEmpty(string)) {
            return false;
        }

        if (typeof string === 'string') {
            try {
                const obj = JSON.parse(string);
                return (typeof obj === 'object' && obj);
            } catch (e) {
                return false;
            }
        }
    };

    /**
     * 将指定的时长格式化为“00:00:00”格式
     * @param duration      时长毫秒数，如129580
     */
    static formatDuration = (duration) => {
        if (duration === null || duration < 0) {
            return '';
        }

        let formatTime = '';
        const second = parseInt(duration / 1000);
        const minutes = parseInt(second / 60);
        const hours = parseInt(minutes / 60);

        if (hours > 0) {
            if (hours >= 10) {
                const min = minutes - hours * 60;
                const sec = second - minutes * 60;
                formatTime = `${hours}:${(min >= 10 ? min : `0${min}`)}:${(sec >= 10 ? sec : `0${sec}`)}`;
            } else {
                const min = minutes - hours * 60;
                const sec = second - minutes * 60;
                formatTime = `0${hours}:${(min >= 10 ? min : `0${min}`)}:${(sec >= 10 ? sec : `0${sec}`)}`;
            }
        } else {
            if (minutes === 0) {
                formatTime = `00:${(second >= 10 ? second : `0${second}`)}`;
            } else if (minutes >= 10) {
                const sec = second - minutes * 60;
                formatTime = `${minutes}:${(sec >= 10 ? sec : `0${sec}`)}`;
            } else if (minutes > 0 && minutes < 10) {
                const sec = second - minutes * 60;
                formatTime = `0${minutes}:${(sec >= 10 ? sec : `0${sec}`)}`;
            }
        }
        return formatTime;
    };

    /**
     * 格式化时间戳
     * @param timestamp  时间戳，精确到毫秒
     * @param fmt   格式。例如 yyyy-MM-dd hh:mm:ss
     */
    static timeFormat = (timestamp, fmt) => {
        const date = new Date();
        date.setTime(timestamp);
        return StringUtils.dateFormat(date, fmt);
    };

    /**
     * 格式化日期
     * @param date  Date对象，非时间戳
     * @param fmt   格式。例如 yyyy-MM-dd hh:mm:ss
     */
    static dateFormat = (date, fmt) => {
        const o = {
            'M+': date.getMonth() + 1, // 月份
            'd+': date.getDate(), // 日
            'h+': date.getHours(), // 小时
            'm+': date.getMinutes(), // 分
            's+': date.getSeconds(), // 秒
            'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
            'S': date.getMilliseconds(), // 毫秒
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));
        }

        for (const k in o) {
            if (new RegExp(`(${k})`).test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)));
            }
        }
        return fmt;
    };

    /**
     * 格式化日期
     * @param date  Date对象，非时间戳
     * @param fmt   格式。例如 10:40
     */
    static dateMate = (date, fmt, lanagage) => {
        var str = date.getHours() + ":" + date.getMinutes();
        return str
    };

    /**
     * 周数字转文字
     * @param day   0~6
     * @param language  0：中文；1：英文
     */
    static getWeekDay = (day, language = 0) => {
        if (language === 0) {
            switch (day) {
                case 0:
                    return '周日';
                case 1:
                    return '周一';
                case 2:
                    return '周二';
                case 3:
                    return '周三';
                case 4:
                    return '周四';
                case 5:
                    return '周五';
                case 6:
                    return '周六';
                default:
                    return '';
            }
        } else {
            switch (day) {
                case 0:
                    return 'Sun';
                case 1:
                    return 'Mon';
                case 2:
                    return 'Tue';
                case 3:
                    return 'Wed';
                case 4:
                    return 'Thu';
                case 5:
                    return 'Fri';
                case 6:
                    return 'Sat';
                default:
                    return '';
            }
        }
    };

    /**
     * 获取字符串的长度 中文2，英文1
     */
    static getLength = (str) => {
        let realLength = 0, len = str.length, charCode = -1;
        for (let i = 0; i < len; i++) {
            charCode = str.charCodeAt(i);
            if (charCode >= 0 && charCode <= 128)
                realLength += 1;
            else
                realLength += 2;
        }
        return realLength;
    };

    /**
     * 获取Url中的某个参数值，没有则返回null
     * @param url       url
     * @param parName   parName参数名
     */
    static getUrlParameter = (url, parName) => {
        const reg = new RegExp(`(^|&)${parName}=([^&]*)(&|$)`, 'i');
        const r = url.substr(url.indexOf('?') + 1).match(reg);
        if (r !== null) return unescape(r[2]);
        return null;
    };

    /**
     * 获取字符串的HashCode
     * @param str       字符串
     */
    static getHashCode = (str) => {
        let hash = 0;
        if (str.length === 0) {
            return hash;
        }
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash &= hash; // 转为32bit的整数
        }
        return hash;
    };

    /**
     * 过滤字符串中的emoji表情
     * @param str       字符串
     */
    static emojiFilter = (str) => {
        if (StringUtils.isEmpty(str)) {
            return str;
        }
        str = str.replace(/([#0-9]\u20E3)|[\xA9\xAE\u203C\u2047-\u2049\u2122\u2139\u3030\u303D\u3297\u3299][\uFE00-\uFEFF]?|[\u2190-\u21FF][\uFE00-\uFEFF]?|[\u2300-\u23FF][\uFE00-\uFEFF]?|[\u2460-\u24FF][\uFE00-\uFEFF]?|[\u25A0-\u25FF][\uFE00-\uFEFF]?|[\u2600-\u27BF][\uFE00-\uFEFF]?|[\u2900-\u297F][\uFE00-\uFEFF]?|[\u2B00-\u2BF0][\uFE00-\uFEFF]?|(?:\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDEFF])[\uFE00-\uFEFF]?/g, '');

        str = str.replace(/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*/g, '');

        return str;
    };

    /**
     * 检查字符串是否满足 汉字、字母、汉字+字母、汉字+数字
     * @param str       字符串
     */
    static checkStr = (str) => {
        const reg1 = /^[\u4E00-\u9FA5]*$/; // 检查是否全汉字
        const reg2 = /^[a-zA-Z]*$/; // 检查是否全字母
        const reg3 = /^[\u4E00-\u9FA5]+[a-zA-Z]+$/; // 检查是否汉字+字母
        const reg4 = /^[\u4E00-\u9FA5]+[0-9]+$/; // 检查是否汉字+数字
        return reg1.test(str) || reg2.test(str) || reg3.test(str) || reg4.test(str);
    };

    /**
     * 过滤掉字符串中的转义字符
     * @param str   待转义字符串
     * @return      处理后的字符串
     * */
    static filterTransferredMeaningChar = (str) => {
        if (StringUtils.isEmpty(str)) {
            return str;
        }

        str = str.replace(/&gt;/g, '>');
        str = str.replace(/&amp;/g, '&');
        str = str.replace(/&gt;/g, '<');
        str = str.replace(/&quot;/g, '\\');
        str = str.replace(/&#x27;/g, "'");
        str = str.replace(/&#x2F;/g, '/');
        str = str.replace(/&#x60;/g, '`');

        str = str.replace(/&divide/g, '÷');
        str = str.replace(/&ldquo;/g, '“');
        str = str.replace(/&rdquo;/g, '”');
        str = str.replace(/&middot;/g, '·');
        str = str.replace(/&middot/g, '·');
        str = str.replace(/&mdash;/g, '—');
        str = str.replace(/&circ;/g, 'ˆ');
        str = str.replace(/&tilde;/g, '');

        str = str.replace(/&ensp/g, ' ');
        str = str.replace(/&emsp;/g, ' ');
        str = str.replace(/&thinsp;/g, ' ');
        str = str.replace(/&zwnj;/g, ' ');
        str = str.replace(/&zwj;/g, ' ');
        str = str.replace(/&lrm;/g, ' ');
        str = str.replace(/&rlm;/g, ' ');

        str = str.replace(/&ndash/g, '–');
        str = str.replace(/&lsquo;/g, '‘');
        str = str.replace(/&rsquo;/g, '’');
        str = str.replace(/&sbquo;/g, '‚');
        str = str.replace(/&bdquo;/g, '„');
        str = str.replace(/&lsaquo;/g, '‹');
        str = str.replace(/&rsaquo;/g, '›');
        str = str.replace(/&pi;/g, 'π');

        return str;
    };

    /**
     * 检查字符串中是否包含了特殊字符
     * @param str 源字符串
     */
    static hasSpecialCharacter = str => {
        const pattern = new RegExp("[` 《》~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_-]");
        const quotesPatten = new RegExp('"');
        return pattern.test(str) || quotesPatten.test(str);
    };

    /**
     * 对象转URL参数
     */
    static parseUrlParam = (data = {}) => {
        let urlParam = '';
        const keys = Object.getOwnPropertyNames(data);
        for (let i = 0; i < keys.length; i++) {
            const value = data[keys[i]];
            if (value !== undefined && value !== null && value !== '') {
                if (Array.isArray(value) && value.length > 0) {
                    urlParam += keys[i];
                    urlParam += '=';
                    urlParam += value.toString();
                } else {
                    urlParam += keys[i];
                    urlParam += '=';
                    urlParam += value;
                }
                urlParam += '&';
            }
        }
        if (urlParam.length > 0 && urlParam.charAt(urlParam.length - 1) === '&') {
            urlParam = urlParam.substring(0, urlParam.length - 1);
        }
        return urlParam;
    }

}