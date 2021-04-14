// pages/feedBugs/feedBugs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  submitBugsBtn(e){
    const bugs = this.data.data_bugs
    if(!bugs){
      wx.showToast ({
        title: "未填写！",
        icon: "error"
      })
    }
    else{
      //发送给管理员/数据库
      wx.navigateTo ({
        url: "../result/result"
      })
    }
  },
  
  backBugsBtn(e){
    wx.reLaunch ({
      url: "../user/user"
  })
  },

  getBugs(e){
    console.log(e)
    this.setData({
      data_bugs: e.detail.value
    })
  },

  
})