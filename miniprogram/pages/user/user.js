// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu:{
      process: ['求职进程', 'url'],
      resum:['我的简历', '../resume/resume'],
      management:['管理员登录', '../admin/admin'],
      refeed:['反馈','url'],
      connect:['在线联系', 'url'],
    }
  },
  onGotUserInfo: function (e) {
    console.log("nickname=" + e.detail.userInfo.nickName);
  }
})