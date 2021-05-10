var app = getApp()
Page ({
    data: {
        feature: {
            "求职进程": "../schedule/schedule",
            "我的简历": "../ifresume/ifresume",
            "管理员入口": "../admin/admin",
            "BUG反馈": "../feedBugs/feedBugs"
        },
    },
    onLoad(){
        this.setData({
            avatarUrl: app.globalData.avatarUrl,
            wxName: app.globalData.wxName
        })
    }
})