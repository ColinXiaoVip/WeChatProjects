//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    time: '',
    newsData: '',
    suspectedCount: 0,
    suspectedIncr: 0
  },
  //事件处理函数
  onLoad: function() {
    let that = this;
    this.gain()
    let timestamp = Date.parse(new Date());
    let date = new Date(timestamp);
    //获取年份  
    let Y = date.getFullYear();
    //获取月份  
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //获取当日日期 
    let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let nonceTime = Y + '-' + M + '-' + D;
    that.setData({
      time: nonceTime
    })
    console.log(Y + '-' + M + '-' + D);
  },
  gain: function(e) {
    let that = this;
    wx.request({
      url: 'http://api.tianapi.com/txapi/ncov/index',
      data: {
        key: "185c1dff3726969a598f41c640bcba59",
        date: that.data.time
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {

        that.setData({
          newsData: res.data.newslist[0].news,
          suspectedCount: res.data.newslist[0].desc.suspectedCount,
          suspectedIncr: res.data.newslist[0].desc.suspectedIncr
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    console.log(that.data.time)
  },
  getInputValue(e) {
    let that = this;
    that.setData({
      time: e.detail.value
    })
    console.log(e.detail.value)
    console.log(that.time)
  }
})