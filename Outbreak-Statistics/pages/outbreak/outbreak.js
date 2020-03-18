// pages/outbreak/outbreak.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shuju: '',
    xcys: 0,
    xzys: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  riqi: function (e) {
    console.log(e.detail.value);
    var that = this;
    wx.request({
      url: 'http://api.tianapi.com/txapi/ncov/index',

      data: {
        key: 'fe4d0f55f7403ad8abcf794ce13f44c2',
        date: e.detail.value
      },
      success: function (res) {
        console.log(res)
        that.setData({
          shuju: res.data.newslist[0].news,
          xcys: res.data.newslist[0].desc.suspectedCount,
          xzys: res.data.newslist[0].desc.suspectedIncr
        })
      },
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

})