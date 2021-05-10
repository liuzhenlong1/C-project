    var app = getApp()
    Page({
        data: {
        userInfo: {},
        hasUserInfo: false,
        canIUseGetUserProfile: false,
    },
    getUserProfile(e) {
        if(app.globalData.nickName == null){
            wx.getUserProfile({
                desc: '用于完善会员资料', 
                success: (res) => {
                    app.globalData.wxName = res.userInfo.nickName
                    app.globalData.avatarUrl = res.userInfo.avatarUrl
                    wx.setStorageSync("avatarUrl", res.userInfo.avatarUrl),
                    wx.setStorageSync("nickName", res.userInfo.nickName)
                    const db = wx.cloud.database()
                    db.collection('user').add({
                        data: {
                            wxName: res.userInfo.nickName,
                            avatarUrl: res.userInfo.avatarUrl
                        },
                        fail: err=>{
                            console.log('失败')
                        },
                        success: res=>{
                            console.log('成功')
                        }
                    })
                    wx.switchTab({
                        url: '../index/index',
                    })
                },  
            })
        }
    },
    getUserInfo(e) {
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    onLoad(){
        if (wx.getUserProfile) {
            this.setData({
                canIUseGetUserProfile: true
            })
        }
        app.globalData.wxName = wx.getStorageSync('nickName'),
        app.globalData.avatarUrl = wx.getStorageSync('avatarUrl'),
        console.log(app.globalData.wxName)
        const db = wx.cloud.database()
        db.collection('user').where({
            wxName: app.globalData.wxName,
        })
        .get({
            success(res){
                for(var i = 0; i < res.data.length; i++){
                    if(app.globalData.wxName == res.data[i].wxName){
                        wx.switchTab({
                            url: '../index/index',
                        })
                        break
                    }
                }
            }
        })
    }
})