
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/components/guide","pages/components/beforeLogin","pages/main","pages/components/drink","pages/components/shop","pages/components/info","pages/components/login","pages/components/login2","pages/components/info/attendance","pages/components/info/pet","pages/components/shop/consult"],"window":{"transparentTitle":"always"},"tabBar":{"color":"#000000","position":"bottom","selectedColor":"#95d6bf","borderStyle":"white","backgroundColor":"#ffffff","list":[{"text":"社区","iconPath":"./static/navigator/talk.png","selectedIconPath":"static/navigator/s_talk.png","pagePath":"pages/main"},{"text":"饮品","iconPath":"./static/navigator/drink.png","selectedIconPath":"static/navigator/s_drink.png","pagePath":"pages/components/drink"},{"text":"商城","iconPath":"./static/navigator/shop.png","selectedIconPath":"static/navigator/s_shop.png","pagePath":"pages/components/shop"},{"text":"我的","iconPath":"./static/navigator/info.png","selectedIconPath":"static/navigator/s_info.png","pagePath":"pages/components/info"}],"midButton":{"iconPath":"static/navigator/camera.png","height":"65px","iconWidth":"50px"}},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"cat menu","compilerVersion":"3.7.11","entryPagePath":"pages/components/guide","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/components/guide","meta":{"isQuit":true},"window":{"enablePullDownRefresh":false}},{"path":"/pages/components/beforeLogin","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/main","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/components/drink","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/components/shop","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/components/info","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/components/login","meta":{},"window":{"enablePullDownRefresh":false,"transparentTitle":"none","navigationBarBackgroundColor":"#bae3d5"}},{"path":"/pages/components/login2","meta":{},"window":{"enablePullDownRefresh":false,"transparentTitle":"none","navigationBarBackgroundColor":"#bae3d5","navigationBarTitleText":"快捷登录"}},{"path":"/pages/components/info/attendance","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/components/info/pet","meta":{},"window":{"enablePullDownRefresh":false}},{"path":"/pages/components/shop/consult","meta":{},"window":{"enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
