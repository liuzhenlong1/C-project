Page ({
    formatTime(date) {
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var day = date.getDate()
        var hour = date.getHours()
        var minute = date.getMinutes()
        var second = date.getSeconds()
        return [year, month, day].map(this.formatNumber).join("-") + " " + [hour, minute, second].map(this.formatNumber).join(":")
    },
    formatNumber(n) {
        n = n.toString()
        return n[1] ? n : "0" + n
    },
    eulaCheck(e) {
        this.setData ({
            data_eula: e.detail.value
        })
    },
    eulaBtn() {
        if(this.data.data_eula == null || this.data.data_eula == "") {
            wx.showToast ({
                title: "请同意该协议",
                icon: "error"
            })
        }else {
            const uploadTime = this.formatTime(new Date())
            try {
                const userInfo = wx.getStorageSync("jobinfo")
                if(userInfo) {
                    const db = wx.cloud.database()
                    db.collection("userinfo").add ({
                        data: {
                            name: userInfo[0],
                            sex: userInfo[1],
                            birth: userInfo[2],
                            number: userInfo[3],
                            address: userInfo[4],
                            idcard: userInfo[5],
                            type: userInfo[6],
                            uploadTime: uploadTime
                        },
                        success() {
                            wx.setStorageSync("resultCode", 0)
                            wx.navigateTo ({
                                url: "../result/result"
                            })
                        },
                        fail() {
                            wx.setStorageSync("resultCode", 1)
                            wx.navigateTo ({
                                url: "../result/result"
                            })
                        }
                    })
                }
            }catch(e) {
                wx.showToast ({
                    title: "数据读取失败",
                    icon: "error"
                })
            }finally {
                wx.removeStorageSync("userinfo")
            }
        }
    }
})