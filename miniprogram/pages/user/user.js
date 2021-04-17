Page ({
    data: {
        feature: {
            "求职进程": "../schedule/schedule",
            "我的简历": "../ifresume/ifresume",
            "联系我们": "url",
            "管理员入口": "../admin/admin",
            "BUG反馈": "../feedBugs/feedBugs"
        }
    },
    // 弹出授权界面，获取用户资料
    getUserInfo() {
        const that = this
        wx.getUserProfile ({
            desc: "用于完善用户资料",
            // 同意授权
            success(res) {
                let i = res.userInfo
                that.setData ({
                    avatarUrl: i.avatarUrl,
                    wxName: i.nickName
                })
                // 将头像URL和微信名写进缓存
                wx.setStorageSync("avatarUrl", that.data.avatarUrl)
                wx.setStorageSync("wxName", that.data.wxName)
            },
            // 拒绝授权
            fail() {
                that.setData ({
                    avatarUrl: false
                })
            }
        })
    },
    onLoad() {
        // 从缓存读取头像URL和微信名
        const avatarUrl = wx.getStorageSync("avatarUrl")
        const wxName = wx.getStorageSync("wxName")
        if(avatarUrl || wxName) {
            this.setData ({
                avatarUrl,
                wxName
            })
        }
    }
})