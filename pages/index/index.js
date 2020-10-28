//index.js
//获取应用实例
import {translate} from '../../utils/api.js'
const app = getApp()

Page({
  data: {
    query: '', //用户输入的需要被翻译的内容
    hideClearIcon: true, //清空按钮
    result: [], //翻译后的结果
    curLang: {} //当前语言
  },
  onLoad: function (options) {
    console.log('onload...')
    console.log(options)
    //当页面加载时 如果有参数，说明从历史也跳过来的，就显示历史翻译原文译文
    if(options.query){
      this.setData({query: options.query})
    }
  },
  onShow: function(){
    // 页面显示时判断语言是否一致
    if(this.data.curLang.lang !== app.globalData.curLang.lang){
      //把语言设置为一致再翻译一次
      this.setData({curLang: app.globalData.curLang})
      this.onConfirm()
    }
  },
  onInput: function(e){
    //把输入的内容设置为需要翻译的内容
    this.setData({'query': e.detail.value})

    //根据内容长度控制清空按钮x是否显示
    if(this.data.query.length > 0){
      this.setData({'hideClearIcon': false})
    }else{
      this.setData({'hideClearIcon': true})
    }
  },
  //点击关闭按钮 清空所有内容 隐藏按钮
  onTapClose: function(){
    this.setData({'query': '', hideClearIcon: true})

    //清空译文内容
    if(this.data.result.length > 0){
      this.data.result.splice(0, this.data.result.length)
      this.setData({'result': this.data.result})
    }
  },
  //点击确认或失去焦点就翻译文本
  onConfirm: function(){
    if(!this.data.query) return
      translate(this.data.query, {from: 'auto', to: this.data.curLang.lang})
      .then(res=>{
        //设置翻译结果
        this.setData({'result': res.trans_result})

        //每翻译一次就获取历史数据，最开始空数组
        let history = wx.getStorageSync('history') || []
        //添加历史数据
        history.unshift({query: this.data.query, result: res.trans_result[0].dst})
        //限制最多历史10条
        history.length = history.length > 10 ? 10 : history.length
        //设置历史数据
        wx.setStorageSync('history', history)
      })
  }
})
