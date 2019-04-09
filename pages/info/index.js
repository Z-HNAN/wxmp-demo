// pages/post/show.js
const app = getApp()
let main = [
  {
    src: '../../icon/school.png',
    name: '校园'
  },
  {
    src: '../../icon/group.png',
    name: '课程'
  },
  {
    src: '../../icon/team.png',
    name: '班级'
  },
  {
    src: '../../icon/comment.png',
    name: '公众号'
  }
]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    right_icon: "../../icon/right_icon.png",
    icon_style: 'float:left',
    main: main,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    name:'',
    number:'',
    institute:'',
    phoneNum: '',
    hiddenmodalput: false
  },
  changeData: function (name, number, institute) {
    this.setData({
      name: name,
      number:number,
      institute: institute
    })
  },
  cancelM: function (e) {
    this.setData({
      hiddenmodalput: true,
      name:'',
      number:'',
      institute:''
    })
  },

  confirmM: function (e) {
    this.setData({
      hiddenmodalput: true
    })
  },

  iName: function (e) {
    var iname = e.detail.value
    this.setData({
      name: iname
    }),
    wx.setStorage({
      key: 'name',
      data: iname
    })
  },
  iNum: function (e) {
    var inum = e.detail.value
    this.setData({
      number: inum
  }),
    wx.setStorage({
      key: 'num',
      data: inum
    })
  },
  institute: function (e) {
    var institute = e.detail.value
    this.setData({
      institute: institute
  }),
    wx.setStorage({
      key: 'institute',
      data: institute
    })
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    
    var that = this
    var name = wx.getStorageSync('name');
    var num = wx.getStorageSync('num');
    var institute = wx.getStorageSync('institute');
    if (name) {
      that.setData({
        hiddenmodalput: true,
        name: name
      });
    }
    if (num) {
      that.setData({
        number: num
      });
    }
    if (institute) {
      that.setData({
        institute: institute
      });
    }
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var name = wx.getStorageSync('name');
    console.log(name)
    if (name) {
      hiddenmodalput: true
    }
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
