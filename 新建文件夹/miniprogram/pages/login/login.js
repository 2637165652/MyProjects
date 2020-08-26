
const db=wx.cloud.database(); //初始化数据库

Page({
  data: {
    // 判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function () {
    var that = this;

    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        
        if (res.authSetting['scope.userInfo']) {
          // 用户已经授权过，跳转到第一个tarBar页面，即首页
          wx.switchTab({
            url: '/pages/index/index',    //跳转的目的页面的url
            success: (result) => {
              console.log("跳转到首页");
            },
            fail: () => {}
          });
        } else {
          // 用户没有授权，显示授权页面,这里不进行操作
        }
      }
    });
  },

  bindGetUserInfo: function (e) {
    if (e.detail.userInfo) {
      // var that = this;

      // 用户按了允许授权按钮，获取到了用户的信息
      console.log(e.detail.userInfo);

      // 将用户数据插入云数据库的onepiece_users集合,方便统计
      db.collection('onepiece_users').add({
        data:{
          userInfo: e.detail.userInfo,
          nickName: e.detail.userInfo.nickName,
          registerTime: new Date().toLocaleString()
        }
      }).then(res=>{
        console.log("用户信息插入成功"+res)
      }).catch(()=>{})

      // 授权成功后,跳转到第一个tarBar页面，即首页
      wx.switchTab({
        url: '/pages/index/index',   
        success: (result) => {
          console.log("跳转到首页");
        },
        fail: () => {}
      });
    } else {
      // 用户按了拒绝按钮
      wx.showModal({
        title: '提示',
        content: '您拒绝了授权，将无法进入小程序，请授权之后再进入!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          // 用户没有授权成功，点击返回
          if (res.confirm) {
            console.log('用户点击了“返回”');
          }
        }
      });
    }
  }
})