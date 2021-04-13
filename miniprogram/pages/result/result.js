Page ({
    indexBtn() {
        wx.reLaunch ({
            url: "../index/index"
        })
    },
    signupBtn() {
        wx.navigateBack ({
            delta: 2
        })
    },
    onLoad() {
        const resultCode = wx.getStorageSync("resultCode")
        this.setData ({
            data_resultCode: resultCode
        })
        wx.removeStorageSync("resultCode")
    }
})