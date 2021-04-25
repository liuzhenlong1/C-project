// pages/jobDetail/jobDetail.js
Page({

  /**
   * 页面的初始数据
   */
    data: {
        treatment: ["包三餐", "包接送", "年终奖", "有提成"],
    },
    linkboss(){
        wx.makePhoneCall({
            phoneNumber: '18822178171'
          })
    }
})