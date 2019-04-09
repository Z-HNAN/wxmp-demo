// pages/post-2/show-2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFold: false,
    nowToggle: '',
    list_hide:false,
    systemList: [{
      id: 0,
      subject:'科技论文写作',
      hidden: true,
      title: '平时作业2-论文检索分享（小组作业）',
      contentH: '检索小组命题相关的近三年文献并作汇报分享根据小组确定的论文题目检索相关文献201920182017打包发送至平台下周课进行论文分享PPT(ppt发送至平台提交) ，选择4-5篇介绍论文内容。ppt内容：来自哪所大学的哪些研究者，针对什么问题作了什么，解决了什么问题，取得什么效果，有什么创新点，不足处是什么，未来要做什么。',
      start_time: '2019-03-15 15:32',
      deadline:'',
      image: '../../icon/down.png'
    },
    {
      id: 1,
      subject: '大学生与法',
      hidden: true,
      title: '期中个人作业',
      contentH: '搜集生活中的法律案例并加以分析，制作成PPT或word。',
      start_time: '2019-03-15 15:32',
      deadline: '',
      image: '../../icon/down.png'
    }],
    systemList_right: [{
      idright: 0,
      subject: '科技论文写作',
      hidden: true,
      title: '平时作业2-论文检索分享（小组作业）',
      contentH: '检索小组命题相关的近三年文献并作汇报分享根据小组确定的论文题目检索相关文献201920182017打包发送至平台下周课进行论文分享PPT(ppt发送至平台提交) ，选择4-5篇介绍论文内容。ppt内容：来自哪所大学的哪些研究者，针对什么问题作了什么，解决了什么问题，取得什么效果，有什么创新点，不足处是什么，未来要做什么。',
      start_time: '2019-03-15 15:32',
      deadline: '',
      image: '../../icon/down.png'
    },
    {
      idright: 1,
      subject: '大学生与法',
      hidden: true,
      title: '期中个人作业',
      contentH: '搜集生活中的法律案例并加以分析，制作成PPT或word。',
      start_time: '2019-03-15 15:32',
      deadline: '',
      image: '../../icon/down.png'
    },
    {
      idright: 2,
      subject: '大学生与法',
      hidden: true,
      title: '期中个人作业',
      contentH: '搜集生活中的法律案例并加以分析，制作成PPT或word。',
      start_time: '2019-03-15 15:32',
      deadline: '',
      image: '../../icon/down.png'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  switch_Layout:function(e){
    this.setData({
      list_hide: !this.data.list_hide
    })
  },

  //展开更多
  moreInfo: function (e) {
    var id = e.currentTarget.dataset.id
    var systemList = this.data.systemList
    var that = this
    var hide = systemList[id].hidden

    if (systemList[id].image == "../../icon/down.png") {

      that.setData({
        ['systemList[' + id + '].hidden']: !hide,
        ['systemList[' + id + '].image']: '../../icon/up.png'
      })

    } else {
      that.setData({
        ['systemList[' + id + '].hidden']: !hide,
        ['systemList[' + id + '].image']: '../../icon/down.png',

      })
      console.log(systemList)
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