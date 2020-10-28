//app.js
App({
  onLaunch: function () {
    // 同步获取本地存储的当前选择的语言，最开始没有则默认是语言对象中的第一项
    this.globalData.curLang = wx.getStorageSync('curLang')|| this.globalData.langList[0]


  },
  globalData: {
    curLang: {},//当前语言
    langList: [ //语言列表
      {
        'chs': '英文',
        'lang': 'en',
        'index': 0
      },
      {
        'chs': '中文',
        'lang': 'zh',
        'index': 1
      },
      {
        'chs': '日语',
        'lang': 'jp',
        'index': 2
      },
      {
        'chs': '韩语',
        'lang': 'kor',
        'index': 3
      },
      {
        'chs': '法语',
        'lang': 'fra',
        'index': 4
      },
      {
        'chs': '西班牙语',
        'lang': 'spa',
        'index': 5
      },
      {
        'chs': '泰语',
        'lang': 'th',
        'index': 6
      },
      {
        'chs': '俄语',
        'lang': 'ru',
        'index': 7
      },
      {
        'chs': '德语',
        'lang': 'de',
        'index': 8
      },
      {
        'chs': '葡萄牙语',
        'lang': 'pt',
        'index': 9
      },
      {
        'chs': '意大利语',
        'lang': 'it',
        'index': 10
      },
      {
        'chs': '阿拉伯语',
        'lang': 'ara',
        'index': 11
      },
      {
        'chs': '波兰语',
        'lang': 'pl',
        'index': 12
      }
    ]
  }
})