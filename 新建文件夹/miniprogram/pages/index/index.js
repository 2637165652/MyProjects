//index.js
const app = getApp()

const db=wx.cloud.database(); //初始化数据库

Page({
  data: {
    netUrls: [],
    watcher: {},  // 用户量、访问量
    index_page: {},   // 存储封面、标题、简介、转发标题、公告栏等
  },

  showDialog: function (e) {
    var that = this
    // console.log(e.currentTarget.dataset)
    var netUrl=e.currentTarget.dataset.url;
    wx.showModal({
      // title: netUrl.text,
      title: '内容',
      content: netUrl.neturl,
      confirmText: '复制链接',
      success (res) {
        if (res.confirm) {
          if (wx.setClipboardData) {
            wx.setClipboardData({
              data: netUrl.neturl,  /*复制的内容 */
              success: function (res) {
                wx.showModal({
                  title: '提示',
                  // content: '已复制链接，打开网盘App即可获取！',
                  content: netUrl.copy_success,
                  showCancel: false,
                  confirmText: '知道了'
                })
              }
            })
          }
          else {
            wx.showModal({
              title: '提示',
              content: '您的微信版本太低，请升级',
            })
          }
          console.log('已复制')
        }else if(res.cancel) {
          console.log('用户点击了取消')
        }
      }
    })
  },


  // 监听用户点击页面内转发按钮（button 组件 open-type="share"）或右上角菜单“转发”按钮的行为，并自定义转发内容。
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: this.data.index_page.share_title,
      path: '/pages/index/index'
    }
  },

  onLoad: function() {
    var that = this

    // 获取封面图、标题、简介、转发标题、公告栏
    db.collection('store').doc('index_page').get().then(res => {
      // console.log(res.data)
      that.setData({
        index_page: res.data
      })
    })

    // 获取访问监听对象 {_id: "watcher", showVisitTotal: true, userTotal: 3, visitTotal: 49}
    db.collection('store').doc('watcher').get().then(res => {
      console.log('总访问量：' + res.data.visitTotal, '总用户量：' + res.data.userTotal)
      that.setData({
        watcher: res.data
      })
    })

    // 获取netUrls fileID、按钮text；   按id升序
    db.collection('NetUrls').orderBy('_id', 'asc').get().then(res=>{
      // console.log(res.data);
      this.setData({
        netUrls: res.data
      })
    }).catch(err=>console.log(err))

    // 获取用户openid,判断是否第一次访问，并做相应处理（用户数和访问量）
    var openid = ''
    var date = new Date()
    var visitDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()
    wx.cloud.callFunction({
      name:'login'
    }).then(res=>{
      // console.log('openid后8位：' + res.result.openid.slice(20))
      openid = res.result.openid
      // 查询该用户是否在已访问过的用户列表中
      db.collection('visited_users').where({
        openid: res.result.openid
      })
      .get({
        success: function(res) {
          // 第一次访问插入访问过列表
          if(res.data.length === 0) {
            console.log(res.data)
            // 插入访问过的用户列表
            db.collection('visited_users').add({
              data: {
                _id: visitDate + '_' + openid.slice(20),
                openid: openid
              }
            })
            .then(res => {
              console.log(res)
            })
            // 修改watcher中的用户数和访问量
            const _ = db.command
            db.collection('store').doc('watcher').update({
              data: {
                // 表示指示数据库将字段自增 1
                userTotal: _.inc(1),
                visitTotal: _.inc(1)
              },
              success: function(res) {
                console.log("已更新用户量和访问量")
              }
            })
          }else{
             // 非第一次访问，修改watcher中的访问量即可
             const _ = db.command
             db.collection('store').doc('watcher').update({
               data: {
                 // 表示指示数据库将字段自增 1
                 visitTotal: _.inc(1)
               },
               success: function(res) {
                 console.log("已更新访问量")
               }
             })
          }    
        }
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

  }


})
