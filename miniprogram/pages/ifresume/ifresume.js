const app =  getApp()

Page ({
    goTo() {
        wx.redirectTo ({
            url: "../resume/resume"
        })
    },
    submitBtn() {
        const that = this
        const openId = wx.getStorageSync("openId")
        const timeObj = app.getTime()
        const db = wx.cloud.database()
        db.collection("Status").where ({
            _openid: openId,
            Job_id: this.data.jobId
        }).get ({
            success(res) {
                // 确认用户是否报过名
                if(res.data.length == 0) {
                    const times = timeObj.Y + '/' + timeObj.M + '/' + timeObj.D + ' ' + timeObj.h + ':' + timeObj.m + ':' + timeObj.s
                    db.collection("Status").add ({
                        data: {
                            name: that.data.name,
                            Job_id: that.data.jobId,
                            Upgrade_time: times,
                            status: "已上传"
                        },
                        success() {
                            wx.showToast ({
                                title: "报名成功"
                            })
                            setTimeout(() => {
                                wx.navigateBack()
                            }, 500);
                        },
                        fail(e) {
                            console.log(e);
                            wx.showToast ({
                                title: "报名失败",
                                icon: "error"
                            })
                        }
                    })
                }else {
                    wx.showToast ({
                        title: "请勿重复报名",
                        icon: "error"
                    })
                }
            }
        })
        
    },
    onLoad(options) {
        const that = this
        wx.showLoading ({
            title: "正在查询...",
            mask: true
        })
        const openId = wx.getStorageSync("openId")
        const db = wx.cloud.database()
        setTimeout(() => {
            db.collection("Resume").where ({
                _openid: openId
            }).get ({
                success(res) {
                    if(res.data.length != 0) {
                        that.setData ({
                            isResume: 1,
                            name: res.data[0].name,
                            sex: res.data[0].sex,
                            birth: res.data[0].birth,
                            edubg: res.data[0].edubg,
                            workexp: res.data[0].workexp,
                            tel: res.data[0].tel,
                            address: res.data[0].address,
                            intro: res.data[0].intro
                        })
                    }else {
                        that.setData ({
                            isResume: 0
                        })
                    }
                }
            })
            wx.hideLoading()
        }, 500);
        if(options.confirm || options.id) {
            this.setData ({
                confirm: options.confirm,
                jobId: options.id
            })
        }
    }
})