
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/denglu/denglu","pages/index/index","pages/zhuce/zhuce","pages/xiaoxi/xiaoxi","pages/sanfangdenglu/sanfangdenglu","pages/jibenxinxi/jibenxinxi","pages/buliangfanying/buliangfanying","pages/bindingPhonePopup/bindingPhonePopup","pages/fazuocishu/fazuocishu","pages/more/more","pages/scanning/scanning","components/jiangkang","components/huodong","components/xitong","pages/binliben/binliben","pages/ME/ME","pages/information/information","pages/journal/journal","pages/account/account","pages/mydoctor/mydoctor","pages/set/set","pages/details/details","pages/Rechargedescription/Rechargedescription","pages/Confirmorder/Confirmorder","pages/Messagesettings/Messagesettings","pages/Accountsettings/Accountsettings","pages/Versionupdate/Versionupdate","pages/Clearcache/Clearcache","pages/shareAPP/shareAPP","pages/log/log","pages/jilujiuzhen/jilujiuzhen","pages/wanzhengbingli/wanzhengbingli","pages/wanzhengzhengzhuang/wanzhengzhengzhuang","pages/fazuopinci/fazuopinci","pages/rizhixiangqing/rizhixiangqing"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"selectedColor":"#3DCCB4","borderStyle":"white","backgroundColor":"#FFFFFF","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/zhuce/shouye_hui.png","selectedIconPath":"static/zhuce/shouye.png"},{"pagePath":"pages/binliben/binliben","text":"病历本","iconPath":"static/zhuce/bijiben_hui.png","selectedIconPath":"static/zhuce/bijiben.png"},{"pagePath":"pages/xiaoxi/xiaoxi","text":"消息","iconPath":"static/zhuce/xiaoxi_hui.png","selectedIconPath":"static/zhuce/xiaoxi.png"},{"pagePath":"pages/ME/ME","text":"我的","iconPath":"static/zhuce/wode_hui.png","selectedIconPath":"static/zhuce/wode.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"核桃仁","compilerVersion":"2.7.9","entryPagePath":"pages/denglu/denglu","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/denglu/denglu","meta":{"isQuit":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"核桃仁","navigationBarBackgroundColor":"#3DCCB4","navigationBarTextStyle":"white","enablePullDownRefresh":true,"titleNView":{"buttons":[{"text":"扫码","fontSize":"28rpx","float":"right"}]}}},{"path":"/pages/zhuce/zhuce","meta":{},"window":{"navigationBarTitleText":"注 册","navigationBarBackgroundColor":"#3DCCB4","navigationBarTextStyle":"white","enablePullDownRefresh":true}},{"path":"/pages/xiaoxi/xiaoxi","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"消 息","navigationBarBackgroundColor":"#3DCCB4","navigationBarTextStyle":"white","enablePullDownRefresh":true,"titleNView":{"buttons":[{"text":"清除","fontSize":"14px","float":"right"}]}}},{"path":"/pages/sanfangdenglu/sanfangdenglu","meta":{},"window":{"navigationBarTitleText":"微信登录","navigationBarBackgroundColor":"#3DCCB4","navigationBarTextStyle":"white","enablePullDownRefresh":true}},{"path":"/pages/jibenxinxi/jibenxinxi","meta":{},"window":{"navigationBarTitleText":"基本信息","navigationBarBackgroundColor":"#3DCCB4","navigationBarTextStyle":"white","enablePullDownRefresh":true}},{"path":"/pages/buliangfanying/buliangfanying","meta":{},"window":{"navigationBarTitleText":"不良反应","navigationBarBackgroundColor":"#3DCCB4","navigationBarTextStyle":"white","enablePullDownRefresh":true}},{"path":"/pages/bindingPhonePopup/bindingPhonePopup","meta":{},"window":{"navigationBarTitleText":"手机绑定","navigationBarBackgroundColor":"#3DCCB4","navigationBarTextStyle":"white","enablePullDownRefresh":true}},{"path":"/pages/fazuocishu/fazuocishu","meta":{},"window":{"navigationBarTitleText":"发作次数","navigationBarBackgroundColor":"#3DCCB4","navigationBarTextStyle":"white","enablePullDownRefresh":true}},{"path":"/pages/more/more","meta":{},"window":{"navigationBarTitleText":"患教列表","navigationBarBackgroundColor":"#3DCCB4","navigationBarTextStyle":"white","enablePullDownRefresh":true}},{"path":"/pages/scanning/scanning","meta":{},"window":{"navigationBarTitleText":"app名称","navigationBarBackgroundColor":"#3DCCB4","navigationBarTextStyle":"white","enablePullDownRefresh":true}},{"path":"/components/jiangkang","meta":{},"window":{}},{"path":"/components/huodong","meta":{},"window":{}},{"path":"/components/xitong","meta":{},"window":{}},{"path":"/pages/binliben/binliben","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"病历本","navigationBarBackgroundColor":"#3dcdb4","backgroundColor":"#FFFFFF","titleNView":{"buttons":[{"text":"记录","fontSize":"14px","float":"right"}]}}},{"path":"/pages/ME/ME","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"我","navigationBarBackgroundColor":"#3dcdb4","backgroundColor":"#FFFFFF"}},{"path":"/pages/information/information","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"个人信息","navigationBarBackgroundColor":"#3dcdb4","backgroundColor":"#FFFFFF"}},{"path":"/pages/journal/journal","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"病情日志","navigationBarBackgroundColor":"#3dcdb4","backgroundColor":"#FFFFFF","titleNView":{"buttons":[{"text":"添加","fontSize":"14px","float":"right"}]}}},{"path":"/pages/account/account","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"账户信息","navigationBarBackgroundColor":"#3dcdb4","backgroundColor":"#FFFFFF"}},{"path":"/pages/mydoctor/mydoctor","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"我的医生","navigationBarBackgroundColor":"#3dcdb4","backgroundColor":"#FFFFFF"}},{"path":"/pages/set/set","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"设置","navigationBarBackgroundColor":"#3dcdb4","backgroundColor":"#FFFFFF"}},{"path":"/pages/details/details","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"查看明细","navigationBarBackgroundColor":"#3dcdb4","backgroundColor":"#FFFFFF"}},{"path":"/pages/Rechargedescription/Rechargedescription","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"充值说明","navigationBarBackgroundColor":"#3dcdb4","backgroundColor":"#FFFFFF"}},{"path":"/pages/Confirmorder/Confirmorder","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"确认订单","navigationBarBackgroundColor":"#3dcdb4","backgroundColor":"#FFFFFF"}},{"path":"/pages/Messagesettings/Messagesettings","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"消息设置","navigationBarBackgroundColor":"#3dcdb4","backgroundColor":"#FFFFFF"}},{"path":"/pages/Accountsettings/Accountsettings","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"账户设置","navigationBarBackgroundColor":"#3dcdb4","backgroundColor":"#FFFFFF"}},{"path":"/pages/Versionupdate/Versionupdate","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"版本更新","navigationBarBackgroundColor":"#3dcdb4","backgroundColor":"#FFFFFF"}},{"path":"/pages/Clearcache/Clearcache","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"清除缓存","navigationBarBackgroundColor":"#3dcdb4","backgroundColor":"#FFFFFF"}},{"path":"/pages/shareAPP/shareAPP","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"分享APP","navigationBarBackgroundColor":"#3dcdb4","backgroundColor":"#FFFFFF"}},{"path":"/pages/log/log","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"填写日志","navigationBarBackgroundColor":"#3dcdb4","backgroundColor":"#FFFFFF","titleNView":{"buttons":[{"text":"保存","fontSize":"14px","float":"right"}]}}},{"path":"/pages/jilujiuzhen/jilujiuzhen","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"记录就诊","navigationBarBackgroundColor":"#3dcdb4","backgroundColor":"#FFFFFF"}},{"path":"/pages/wanzhengbingli/wanzhengbingli","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"完整病历","navigationBarBackgroundColor":"#3dcdb4","backgroundColor":"#FFFFFF"}},{"path":"/pages/wanzhengzhengzhuang/wanzhengzhengzhuang","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"完整症状","navigationBarBackgroundColor":"#3dcdb4","backgroundColor":"#FFFFFF"}},{"path":"/pages/fazuopinci/fazuopinci","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"发作频次","navigationBarBackgroundColor":"#3dcdb4","backgroundColor":"#FFFFFF"}},{"path":"/pages/rizhixiangqing/rizhixiangqing","meta":{},"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"日志详情","navigationBarBackgroundColor":"#3dcdb4","backgroundColor":"#FFFFFF"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
