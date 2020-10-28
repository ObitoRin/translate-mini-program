// pages/change/change.js
const app = getApp()//获取全局app实例对象
Page({
  data: {
    curLang: {}, //当前语言
    langList: app.globalData.langList //所有语言数据
  },

  onShow: function () {
    //页面显示时勾选设置当前语言为全局的当前语言，默认是第0项英语
    this.setData({ curLang: app.globalData.curLang})
  },
  //点击切换当前语言
  onTapItem: function(e){
    let langObj = e.currentTarget.dataset//根据当前点击项的自定义属性获取语言
    wx.setStorageSync('curLang', langObj)//把点击的语言本地存储
    this.setData({ 'curLang': langObj})//设置当前语言内容为点击的语言
    app.globalData.curLang = langObj //设置全局语言为点击的语言
    wx.switchTab({url: '/pages/index/index'})//跳转到tab栏首页
  }
})