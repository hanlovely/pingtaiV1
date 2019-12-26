/**
 * 系统配置
 * 取当前某个配置的方法：
 *        var zxwww = SawlCfg.zxwww[edition] ;
 *
 * @author dqm
 */
(function () {
  var global = this;
  var SawlCfg = {
    name: '网络赋强平台1.0全局配置信息',
    edition: 'T',                                     // D：开发环境 T：测试环境 P:预发布（演示） R：生产环境
    zxwww: {
      name: '增信网后台接口地址',
      T: 'https://www.zengxin.com.cn',
      R: 'https://www.zengxin.com.cn',
    },
    ghlogin: {
      name: '工行登录接口',
      T: 'http://fqtest.deepsec.cn:9011',
      R: 'https://icbc.bjgzc.com:9015',
    },
    jhlogin: {
      name: '建行登录接口',
      T: 'http://fqtest.deepsec.cn:10201',
      R: 'https://fqgzgl.bjgzc.com:8088',
    },
    hhlogin: {
      name: '黄河登录接口',
      T: 'http://39.100.230.216',
      R: 'http://hhfq55123.deepnotary.com:55123',
    },
    judicialData: {
      name: '司法辅助上链数据折线图',
      T: 'https://test.deepsec.cn',
      R: 'http://bjzx-fysd.zengxin.com.cn',
    },
    eeData: {
      name: '存证平台上链数据折线图',
      T: 'http://47.92.240.163',
      R: 'http://218.247.7.106:10000',
    },

    platform: {
      name: '网络赋强平台1.0',
      T: 'http://39.100.144.0:9060',
      R: 'http://39.100.157.189:9060',
    },
    deepchain: {
      name: '深安链API接口地址',
      T: 'http://deepchain.deepsec.cn:8088/api/',
      R: 'http://deepchain.deepsec.cn:8088/api/',
    },
    deepchain_browser: {
      name: '深安链浏览器地址接口地址',
      T: 'https://deepchain.zengxin.com.cn/prod/',
      R: 'https://deepchain.zengxin.com.cn/prod/',
    },
    entzn: {
      name: '区块链电子公证书系统',
      T: 'https://api-entzn.zengxin.com.cn/api-entzn/',
      R: 'https://api-entzn.zengxin.com.cn/api-entzn/',
    },
    datav_url: {
      name: 'datav',
      T: 'http://datav.aliyuncs.com/share/4bd92b94fd274502ea7f72388adaa485',
      R: 'http://datav.aliyuncs.com/share/8cdb76179f7957267c81785f1af9706c',
    },

  };

  /**
   * expose
   */
  global.edition = SawlCfg.edition;
  global.SawlCfg = SawlCfg;

})();
