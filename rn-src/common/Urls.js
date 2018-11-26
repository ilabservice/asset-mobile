/**
 * Url常量
 * Created by RenPeng on 2017/11/20 0020.
 */
import Config from './Config';

export default class Urls {
    // static TOKEN = 'JSESSIONID';
    //********************************* 以下接口不需要查看 token
    // 是否登录
    static IS_LOGIN = `${Config.DOMAIN}/api/rest/operate/is/login`; //2.0里取消了这个接口
    // 登录
    static LOGIN = `${Config.DOMAIN}/api/v2/unsecure/login`;        //By xiongmeng Change(POST)
    // 注销
    static LOGOUT = `${Config.DOMAIN}/api/v2/secure/customer/user/logout`;   //By xiongmeng Change(GET)

    // 找回密码
    static FIND_PASSWORD = `${Config.DOMAIN}/api/v2/unsecure/customer/`;  //By xiongmeng Change(POST)

    // 验证收到的验证码
    // static

    // 检查更新
    static CHECK_UPDATE = 'http://10.0.1.95:8080/checkUpdate.json';

    //********************************* 以下接口需要查看 Header X-Authorization 里的 token
    // 获取用户信息
    static USER_INFO = `${Config.DOMAIN}/api/v2/secure/customer/me`;    //By xiongmeng Change(GET)
    // 获取公司信息
    static COMPANY_INFO = `${Config.DOMAIN}/api/v2/secure/customer/company`;   //Creatde by xiongmeng(GET)
    // 查询部署环境的信息
    static DEPLOYMENT_INFO = `${Config.DOMAIN}/api/v2/unsecure/deployment/info`;   //Creatde by xiongmeng(GET)
    // 修改用户信息
    static ALTER_USER_INFO = `${Config.DOMAIN}/api/v2/secure/customer/me`;  //By xiongmeng Change(PUT)
    // 查询用户登录公司的所有部门
    static DEPARTMENT_INFO =`${Config.DOMAIN}/api/v2/secure/customer/department` ;  //By xiongmeng Change(GET)
    // 修改用户头像
    static ALTER_USER_AVATAR = `${Config.DOMAIN}/api/v2/secure/customer/me/avatar`; //By xiongmeng Change(PUT)
    //获取公司最高一层位置资产
    static BUILDING_HIGH = `${Config.DOMAIN}/api/v2/secure/customer/company/`  ; //Creatde by xiongmeng(GET)
    //查询所有用户角色
    static ROLE_INFO = `${Config.DOMAIN}/api/v2/secure/role`;   //Creatde by xiongmeng(GET)

    //通过 id 查询位置资产. 在位置资产中的统计信息, 后端需要在 api 请求的处理中进行计算. 统计值只应该是由用户可见的设备统计得到的.
    static BUILDING_LOCATIONS = `${Config.DOMAIN}/api/v2/secure/customer/location/`   //Creatde by xiongmeng(GET)
    //通过 id 删除位置资产. 这个位置下的所有资产将被删除, 只有公司 admin有这个权利.
    static DELETE_LOCATION = `${Config.DOMAIN}/api/v2/secure/customer/location/`  //By xiongmeng Change(DELETE)

    //新增位置资产
    static CREATE_LOCATION = `${Config.DOMAIN}/api/v2/secure/customer/location`  //By meekoma Change(Post)

    // 获取公司所有人
    static COMPANY_USER = `${Config.DOMAIN}/api/v2/secure/customer/user`;

    // 发送手机验证码(邮箱一样)
    static SEND_MOBILE_CODE = `${Config.DOMAIN}/api/v2/secure/customer/send/`;  //By xiongmeng Change(POST)
    // 找回密码
    static RETRIEVE_PASSWORD = `${Config.DOMAIN}/api/v2/unsecure/customer/`
    // 绑定手机
    static BIND_MOBILE = `${Config.DOMAIN}/api/v2/secure/customer/verify/mobile/`;   //By xiongmeng Change(POST)
    // 绑定邮箱
    static BIND_EMAIL = `${Config.DOMAIN}/api/v2/secure/customer/verify/email/`;   //By xiongmeng Change(POST)
    // 修改密码
    static ALTER_USER_PASSWORD = `${Config.DOMAIN}/api/v2/secure/customer/me/modify/password`;
    // 创建设备
    static CREATDE_DEVICE = `${Config.DOMAIN}/api/v2/secure/customer/monitor_target_lab_device`;   //Creatde by xiongmeng(POST)
    // 获取设备类型(管理员获取)
    static DEVICE_TYPE = `${Config.DOMAIN}/api/v2/secure/customer/monitor_target_type`;   //By xiongmeng Change(GET)

    // 获取用户可见的设备类型,包括所有默认的种类和 company_id 和用户公司对应的种类(暂未使用)
    static DEVICE_TYPE_CUSTOMER = `${Config.DOMAIN}/api/v2/secure/customer/monitor_target_type`;   //Creatde by xiongmeng(GET)

    // 设备类型详情
    static DEVICE_TYPE_INFO = `${Config.DOMAIN}/api/v2/secure/admin/monitor_target_type/`;    //By xiongmeng Change(GET)
    // 设备监测类型
    static INSPECT_TYPE = `${Config.DOMAIN}/api/v2/secure/measure_type`;     //By xiongmeng Change(GET)
    // 创建设备类型
    static CREATE_DEVICE_TYPE = `${Config.DOMAIN}/api/v2/secure/admin/monitor_target_type`;    //By xiongmeng Change(POST)
    // 修改设备类型
    static CHANGE_DEVICE_TYPE = `${Config.DOMAIN}/api/v2/secure/admin/monitor_target_type/`;
    // 修改设备图片
    static CHANGE_DEVICE_IMAGE = `${Config.DOMAIN}/api/v2/secure/customer/monitor_target_lab_device/`
    // 删除设备类型
    static DELETE_DEVICE_TYPE = `${Config.DOMAIN}/api/v2/secure/admin/monitor_target_type/`;    //By xiongmeng Change(DELETE)
    // 获取设备列表
    static DEVICES = `${Config.DOMAIN}/api/v2/secure/customer/monitor_target_lab_device`;    //By xiongmeng Change(GET)
    //获取设备位置
    static LOCATION = `${Config.DOMAIN}/api/v2/secure/customer/company/location`;    //By meekoma Change(GET)
    // 根据id删除指定的设备
    static DELETE_DEVICE = `${Config.DOMAIN}/api/v2/secure/customer/monitor_target_lab_device/`;

    // 获取设备基本信息(GET)修改设备信息(PUT)
    static DEVICE_INFO = `${Config.DOMAIN}/api/v2/secure/customer/monitor_target_lab_device/`;  //By xiongmeng Change(GET)

    //查询指定公司某部门下的所有子部门, 包括直接和间接
     static SEARCH_DEP = `${Config.DOMAIN}/api/v2/secure/customer/department/`;  //By meeekoma Change(GET)

    // 获取指定设备种类id 的运行状态模型
    static DEVICE_RUNNINGSTATUS_INFO = `${Config.DOMAIN}/api/v2/secure/customer/monitor_target/`; //Creatde by xiongmeng(GET)

    // 获取设备的监控参数列表（废弃）
    static DEVICE_PARAMETER = `${Config.DOMAIN}/api/v2/secure/measure_type/`;

    // 获取最近的监控数据
    static DEVICE_DATA = `${Config.DOMAIN}/api/v2/secure/customer/monitor_target/`;         //By xiongmeng Change(GET)

    // 获取设备日利用率
    static DEVICE_UTILIZATION_DAILY = `${Config.DOMAIN}/api/v2/secure/customer/monitor_target/`;     //By xiongmeng Change(GET)
    // 获取设备利用率段
    static DEVICE_UTILIZATION = `${Config.DOMAIN}/api/v2/secure/customer/monitor_target/`;       //By xiongmeng Change(GET)

    // 获取共享设备列表
    static DEVICE_SHARE_LIST = `${Config.DOMAIN}/api/v2/secure/customer/monitor_target_lab_device`    //Creatde by xiongmeng(GET)

    // 获取共享时间数据
    static DEVICE_SHARE_TIME = `${Config.DOMAIN}/api/v2/secure/customer/monitor_target_lab_device/`;   //By xiongmeng Change(GET)
    // 设置共享时间
    static SET_DEVICE_SHARE_TIME = `${Config.DOMAIN}/api/v2/secure/customer/monitor_target_lab_device/`;   //By xiongmeng Change(POST)

    // 获取用户列表
    static STAFF_LIST = `${Config.DOMAIN}/api/v2/secure/customer/user`;    //By xiongmeng Change(GET)
    // 创建用户
    static CREATE_STAFF = `${Config.DOMAIN}/api/v2/secure/customer/user`;   //By xiongmeng Change(POST)
    // 把设备管理员的设备指派给另外一个设备管理员
    static TRANSFER_DEVICE_OWNER = `${Config.DOMAIN}/api/v2/secure/customer/monitor_target_lab_device/switch/owner/`;  //Creatde by xiongmeng(PUT)
    // 删除用户
    static DELETE_STAFF = `${Config.DOMAIN}/api/v2/secure/customer/user/`;    //By xiongmeng Change(DELETE)
    // 修改用户密码
    static ALTER_STAFF_PASSWORD = `${Config.DOMAIN}/api/v2/secure/customer/me/modify/password`;   //By xiongmeng Change(POST)
    // 获取报警历史
    static ALERT_LIST = `${Config.DOMAIN}/api/v2/secure/customer/event`;    //By xiongmeng Change(GET)

    // 获取报警类型
    static ALERT_TYPE = `${Config.DOMAIN}/api/v2/secure/event_type`;    //By meekoma Change(GET)

    //-------------------------------------------- 样品库存 ------------------------------------------------
    // 获取样品库存
    static SAMPLE_LIST = `${Config.DOMAIN}/api/v2/secure/customer/sample`;

    // 获取样品种类
    static SAMPLE_TYPE= `${Config.DOMAIN}/api/v2/secure/customer/sample/type`;

    // 查询样品指定时间内的出入库情况, 返回入库/出库的样品列表. 时间跨度不超过一年. 仅部门管理员可用
    static OUTGOING_RECORD = `${Config.DOMAIN}/api/v2/secure/customer/sample/stocking`;

    // 查询样品在指定时间内的入库操作记录, 支持分页, limit. offset. 时间跨度不超过1年. 仅部门管理员可用
    static INVENTORY_RECORDS = `${Config.DOMAIN}/api/v2/secure/customer/sample/operation`;

    //-------------------------------------------- 设备监控参数 ------------------------------------------------


    //获取指定设备的监控参数
    static PARAMETER_INFO = `${Config.DOMAIN}/api/v2/secure/customer/monitor_target_lab_device/`;


    //-------------------------------------------- 统计报表 ------------------------------------------------
    //获取监控对象和监控参数（相当于1.0的获取筛选器数据）
    static FILTER_INFO = `${Config.DOMAIN}/api/v2/secure/customer/statistics/monitor_target/measure_type`;
    //查询日均报警统计. 时间跨度最大为一年
    static DAILY_ALERT = `${Config.DOMAIN}/api/v2/secure/customer/statistics/monitor_target/daily/alert`;
    //查询监控统计历史 日均. 时间跨度最大为一年.
    static DAILY_TELEMETRY = `${Config.DOMAIN}/api/v2/secure/customer/statistics/monitor_target/daily/telemetry`;
    //查询某设备种类下所有设备的小时利用率的 daily 统计值. 时间范围最大为一年
    static DAILY_UTILIZATION = `${Config.DOMAIN}/api/v2/secure/customer/statistics/monitor_target/daily/utilization`;





    //-------------------------------------------- Rule 监控事件判定规则 ------------------------------------------------

    //查询指定监控对象的监控参数规则(GET)
    static RULE_INFO = `${Config.DOMAIN}/api/v2/secure/customer/monitor_target_lab_device/`;

    //添加 1个 监控参数规则到指定监控对象(POST). body 中的 id 不需要. sensor 字段为一个数组, 表示和这个 rule 相关的所有 sensor 的 id, 后端需要在关联表里加入对应的项.
    static ADD_RULE = `${Config.DOMAIN}/api/v2/secure/customer/monitor_target_lab_device/`;

    //从指定监控对象删除1个监控参数规则(DELETE)
    static  DELETE_RULE = `${Config.DOMAIN}/api/v2/secure/customer/monitor_target_lab_device/`;

    //修改 1个 监控参数规则到指定监控对象(PUT)
    static CHANGE_RULE = `${Config.DOMAIN}/api/v2/secure/customer/monitor_target_lab_device/{monitorTargetId}/measure_rule/{ruleId}`;

    //新增设备运行状态模型(POST)
    static ADD_RUNNINGMODEL = `${Config.DOMAIN}/api/v2/secure/customer/monitor_target/operating_status_model`;

    //修改指定 id 设备种类运行状态模型(PUT)
    static CHANGE_RUNNINGMODEL = `${Config.DOMAIN}/api/v2/secure/customer/monitor_target/operating_status_model/`;


    //---------------------------------------------- Sensor 传感器 --------------------------------------------------
    //查询传感器种类(GET)
    static SENSOR_INFO = `${Config.DOMAIN}/api/v2/secure/sensor/type`;

    //新增传感器种类(POST)
    static ADD_SENSOR = `${Config.DOMAIN}/api/v2/secure/admin/sensor/type`;

    //删除传感器种类(DELETE)
    static DELETE_SENSOR = `${Config.DOMAIN}/api/v2/secure/admin/sensor/type/{id}`;

    //修改传感器种类(PUT)
    static CHENGE_SENSOR = `${Config.DOMAIN}/api/v2/secure/admin/sensor/type/`;

    //查询指定监控对象的默认传感器模板列表(GET)
    static SENSOR_INFO_SPE_LIST = `${Config.DOMAIN}/api/v2/secure/customer/monitor_target_lab_device/`;

    //添加1个传感器到指定监控对象(POST)
    static ADD_SENSOR_SPE = `${Config.DOMAIN}/api/v2/secure/customer/monitor_target_lab_device/`;

    //删除指定监控对象的传感器(DELETE)
    static DELETE_SENSOR_SPE = `${Config.DOMAIN}/api/v2/secure/customer/monitor_target_lab_device/`;

    //修改指定监控对象的传感器
    static CHENGE_SENSOR_SPE = `${Config.DOMAIN}/api/v2/secure/customer/monitor_target_lab_device/`;

}