// miniprogram/pages/usermessage/usermessage.js

const db=wx.cloud.database(); //初始化数据库

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // posterUrl: 'cloud://dev-jdq06.6465-dev-jdq06-1302910961/images/1.jpg', // 船长图片
    detail_page: {}
  },
  

  getOpenid: function () {
    wx.cloud.callFunction({
      name:'login'
    }).then(res=>{
      console.log(res.result.openid)
      this.setData({
        openid: res.result.openid
      })
    }).catch(err=>{
      console.log(err)
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // 设置当前页面标题
    wx.setNavigationBarTitle({
      title: '海贼王大部落'
    })

    // 获取个性签名、关于、其他
    db.collection('store').doc('detail_page').get().then(res => {
      console.log(res.data.block2_title)
      that.setData({
        detail_page: res.data
      })
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

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})