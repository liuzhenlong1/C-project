const app = getApp()

Page ({
    data: {
        eduBg: ["博士及以上", "硕士", "本科", "专科", "高中及以下"],
        workExp: ["5年及以上", "3-4年", "1-2年", "应届生", "在校学生"],
        jobIntention: false,
        userName: false
    },
    nameInput(e) {
        this.setData ({
            name: e.detail.value
        })
    },
    sexSelect(e) {
        this.setData ({
            sex: e.detail.value
        })
    },
    birthSelect(e) {
        this.setData ({
            birth: e.detail.value
        })
    },
    selectEduBg(e) {
        var that = this
        this.setData ({
            eduBgIndex: e.detail.value,
            edubg: that.data.eduBg[e.detail.value]
        })
    },
    selectWorkExp(e) {
        this.setData ({
            workExpIndex: e.detail.value,
            workexp: this.data.workExp[e.detail.value],
        })
    },
    telInput(e) {
        this.setData ({
            tel: e.detail.value
        })
    },
    addressInput(e) {
        this.setData ({
            address: e.detail.value
        })
    },
    introInput(e) {
        this.setData ({
            intro: e.detail.value
        })
    },
    resetBtn() {
        this.setData ({
            name: false,
            sex: false,
            birth: false,
            eduBgIndex: false,
            workExpIndex: false,
            tel: false,
            address: false,
            intro: false
        })
    },
    submitBtn() {
        const {name} = this.data
        const {sex} = this.data
        const {birth} = this.data
        const {edubg} = this.data
        const {workexp} = this.data
        const {tel} = this.data
        const {address} = this.data
        const {intro} = this.data
        const timeObj = app.getTime()
        const time = timeObj.Y + '/' + timeObj.M + '/' + timeObj.D + ' ' + timeObj.h + ':' + timeObj.m + ':' + timeObj.s
        if(!name || !sex || !birth || !edubg || !workexp || !tel || !address || !intro) {
            wx.showToast ({
                title: "信息未填写完整",
                icon: "error"
            })
        }else if(tel.length != 11) {
            wx.showToast ({
                title: "手机号错误",
                icon: "error"
            })
        }else {
            const db = wx.cloud.database()
            db.collection("Resume").add({
                data:{
                    name: name,
                    sex:sex,
                    birth: birth,
                    edubg: edubg,
                    workexp: workexp,
                    tel: tel,
                    address: address,
                    intro: intro,
                    submittime: time
                },
                success() {
                    wx.showToast ({
                      title: "保存成功"
                    })
                    setTimeout(() => {
                        wx.navigateBack()
                    }, 1000);
                },
                fail() {
                    wx.showToast ({
                        title: "上传失败",
                        icon: "error"
                    })
                }
            })
        }
    },
})