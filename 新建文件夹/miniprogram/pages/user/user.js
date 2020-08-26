// pages/user/user.js

const db=wx.cloud.database(); //初始化数据库

Page({

  /**
   * 页面的初始数据
   */
  data: {
    unloginImage:'../../images/user-unlogin.png',
    userInfo: {},
    isLogined: false,
    openid: '',
    user_page: {}
  },

  bindGetUserInfo: function (e) {
    var that=this
    var date = new Date()
    var loginDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()
    if (e.detail.userInfo) {
      // 用户按了允许授权按钮，获取到了用户的信息
      console.log(e.detail.userInfo);

      // 插入登陆用户表前先根据openid判断是否首次登录
      db.collection('logined_users').where({
        openid: that.data.openid
      })
      .get({
        success: function(res) {
          if(res.data.length === 0) {
            // 第一次登录，将用户数据插入云数据库的logined_users集合
            db.collection('logined_users').add({
              data:{
                _id: e.detail.userInfo.nickName + '_' + loginDate,
                userInfo: e.detail.userInfo,
                registerTime: new Date().toLocaleString()
              }
            }).then(res=>{
              console.log("用户信息插入成功")
            }).catch(()=>{})
          } else {
            console.log('登录表已有该用户，不再插入')
          }
        }
      })

      that.setData({
        isLogined: true,
        userInfo: e.detail.userInfo
      })
    } else {
      // 用户按了拒绝按钮
      wx.showModal({
        title: '提示',
        content: '您拒绝了授权登录，部分功能可能无法正常使用!',
        showCancel: false,
        confirmText: '确定',
        success: function (res) {
          // 用户没有授权成功，点击返回
          if (res.confirm) {
            console.log('用户点击了“返回”');
          }
        }
      });
    }
  },

  moreDetails: function (e) {
    // 跳转到详情页
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 用户已经授权过，获取用户信息
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo) //用户信息
              that.setData({
                userInfo: res.userInfo,
                isLogined: true
              })
            }
          });
        } else {
          that.setData({
            isLogined: false
          })
        }
      }
    })

    // 获取个性签名、关于、其他
    db.collection('store').doc('user_page').get().then(res => {
      console.log(res.data)
      that.setData({
        user_page: res.data
      })
    })


    // 获取用户openid
    wx.cloud.callFunction({
      name:'login'
    }).then(res=>{
      console.log('openid:'+res.result.openid)
      that.setData({
        openid: res.result.openid
      })
    })

    // 显示当前页面的转发按钮
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
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