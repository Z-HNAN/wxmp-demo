// pages/post/show2.js
Page({

  formSubmit(event) {
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    prevPage.setData({
      name: event.detail.value.name,
      number: event.detail.value.number,
      institute: event.detail.value.institute,
    })
    wx.navigateBack({
      delta: 1,
    })
  },
  formReset() {
    wx.clearStorage();
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    prevPage.setData({
      name: '',
      number: '',
      institute: '',
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    school:'',
    institute:'',
    group:'',
    number:''
    
  },
  changeData: function (name, school, institute,group,number) {
    this.setData({
      name: name,
      school: school,
      institute: institute,
      group:group,
      number:number
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var name = wx.getStorageSync('name');
    var num = wx.getStorageSync('num');
    var institute = wx.getStorageSync('institute');
    if(name){
      that.setData({
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