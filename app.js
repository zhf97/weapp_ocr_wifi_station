App({
  onLaunch() {
    console.log('App.onLaunch()');
  },
  onShow: function () {
  },
  onHide: function () {
  },

  //本应用全局数据
  globalData: {
    temperature: {},
    light: {},
    humidity: {}, 
    appid: "",//填写从腾讯云获取的APPID
    secretid: "",//填写从腾讯云获取的secretID
    secret: ""//填写从腾讯云获取的APPID
  }
})
