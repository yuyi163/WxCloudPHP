
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resultRows1: [],
    resultRows2Id: null,
    resultRows2Name: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  DBSDKInsert:function(){
    wx.request({
      url: "https://9witkkfx.qcloud.la/weapp/DBSDKInsert",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({resultRows1: res.data.$resultRows})
      }
    })
  },

  DBSDKSelect: function () {
    var that = this
    wx.request({
      url: "https://9witkkfx.qcloud.la/weapp/DBSDKSelect",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({ resultRows1: res.data.data})
      }
    })
  },

  DBSDKRow: function () {
    var that = this
    wx.request({
      url: "https://9witkkfx.qcloud.la/weapp/DBSDKRow",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data.data)
        that.setData({ resultRows2Id: res.data.data.id, resultRows2Name: res.data.data.name})
      }
    })
  },
    
})