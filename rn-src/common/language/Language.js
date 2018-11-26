/**
 * 多语言配置和管理
 * 注意：在en和zh中增加字符串时，须在Paths中同步增加
 * Created by RenPeng on 2018/6/5.
 */
import I18n from 'react-native-i18n';
import en from './en';
import zh from './zh';
import Paths from './Paths';

I18n.defaultLocale = 'en';
I18n.fallbacks = true;
I18n.translations = {
    en,
    zh,
};

export default class Language {

    static TEXTS = Paths;

    /**
     * 获取字符串
     * @param str 字符串的引用链
     */
    static get = (str) => I18n.t(str);
}