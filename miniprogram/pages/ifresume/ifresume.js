Page ({
    goTo() {
        wx.redirectTo ({
            url: "../resume/resume"
        })
    },
    submitBtn() {
        const db = wx.cloud.database()
        db.collection("Status").add ({
            data: {
                name: this.data.name,
                Job_id: this.data.jobId,
                status: "已上传"
            },
            success() {
                wx.showToast ({
                    title: "报名成功"
                })
            },
            fail(e) {
                console.log(e);
                wx.showToast ({
                    title: "报名失败",
                    icon: "error"
                })
            }
        })
    },
    onLoad(options) {
        const that = this
        const openId = wx.getStorageSync("openId")
        const db = wx.cloud.database()
        db.collection("Resume").where ({
            _openid: openId
        }).get ({
            success(res) {
                that.setData ({
                    isResume: true,
                    name: res.data[0].name,
                    sex: res.data[0].sex,
                    birth: res.data[0].birth,
                    edubg: res.data[0].edubg,
                    workexp: res.data[0].workexp,
                    tel: res.data[0].tel,
                    address: res.data[0].address,
                    intro: res.data[0].intro
                })
            }
        })
        this.setData ({
            confirm: options.confirm,
            jobId: options.id
        })
    }
})