// pages/adminLogin/adminLogin.js
Page({
    data:({
        adminName: "admin123456",
        adminPasswd: "12345678",
    }),
    nameInput(e){
        const name = e.detail.value
        this.setData({
            name: name
        })
    },
    passwordInput(e){
        const passwd = e.detail.value
        this.setData({
            passwd: passwd
        })
    },
    login(){
        if(this.data.name == this.data.adminName && this.data.passwd == this.data.adminPasswd){
            wx.showToast({
              title: '登入成功',
            }),
            wx.setStorageSync("hasLogin","true") 
            setTimeout(function () {
                wx.navigateTo({
                  url: '../admin/admin'
                })
              }, 1500)
        }
        else if(!this.data.name || !this.data.passwd){
            wx.showToast({
              title: "账号和密码没填",
              icon: "none"
            })
        }
        else{
            wx.showToast({
              title: "账号或密码错误",
              icon: "none"
            })
        }
    },
    onLoads(){
        const t = wx.getStorageSync("hasLogin")
        if(t == "true"){
            wx.reLaunch({
                url: '../admin/admin',
            })
        }
    }
})