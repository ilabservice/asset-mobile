/**
 * 通用颜色
 * Created by RenPeng on 2017/11/24 0024.
 */

export default class Color {

    static TRANSPARENT = 'transparent';
    static WHITE = 'white';
    static THEME_LIGHT = '#90A1C8';
    static BACKGROUND = '#E9F0F6';
    static TEXT_TITLE = '#333333';

    static TEXT_GREEN = '#42B861';
    static TEXT_RED = '#F95E55';
    static TEXT_YELLOW = '#F49E1A';
    static COLOR_1 = '#666387';
    static COLOR_2 = '#CDCBD7';
    static LINE = '#DDDDDD';
    static LIST_BG = '#F7F7F7';
    static MARK = '#0008';
    static LOGO_COLOR_1 = '#08ADFF';
    static LOGO_COLOR_2 = '#6AEADD';


    static THEME = '#EDF5FA';
    static TEXT = '#33353A';

    // 随机颜色
    static RANDOM_COLOR = () => '#' + (Math.random() * 0xffffff << 0).toString(16);
}