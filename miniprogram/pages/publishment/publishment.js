const app =  getApp();

Page ({
    data: {
        salaryPickerArray: ["日", "月", "年"],
        salaryWay: "月",
        treatmentArray: ["包吃", "包住", "五险一金", "接送", "提成", "年终奖"],
        eduReqArray: ["无要求", "高中及以上", "专科及以上", "本科及以上", "研究生及以上"],
        detailInfoLength: 0
    },
    // 获取公司名
    companyInput(e) {
        this.setData ({
            company: e.detail.value
        })
    },
    // 获取联系电话
    telInput(e) {
        this.setData ({
            tel: e.detail.value
        })
    },
    // 获取公司位置
    addressInput(e) {
        this.setData ({
            address: e.detail.value
        })
    },
    // 获取岗位名
    jobsInput(e) {
        this.setData ({
            jobs: e.detail.value
        })
    },
    // 获取薪资数目
    salaryNumInput(e) {
        this.setData ({
            salaryNum: e.detail.value
        })
    },
    // 获取薪资结付类型，日/月/年
    salaryPickerSelect(e) {
        this.setData ({
            salaryWay: this.data.salaryPickerArray[e.detail.value]
        })
    },
    // 获取工作类型，兼职/全职
    typeSelect(e) {
        this.setData ({
            type: e.detail.value
        })
    },
    // 获取学历要求
    eduReqSelect(e) {
        this.setData ({
            eduReq: this.data.eduReqArray[e.detail.value]
        })
    },
    // 获取岗位待遇列表
    treatmentChange(e) {
        this.setData ({
            treatment: e.detail.value
        })
    },
    // 获取岗位详细信息
    detailInfoInput(e) {
        let detailInfoLength = e.detail.value.length
        this.setData ({
            detailInfoLength,
            detailInfo: e.detail.value
        })
    },
    submit() {
        const {company} = this.data
        const {tel} = this.data
        const {address} = this.data
        const {jobs} = this.data
        const {salaryNum} = this.data
        const {salaryWay} = this.data
        const {type} = this.data
        const {eduReq} = this.data
        const {treatment} = this.data
        const {detailInfo} = this.data
        if(!company || !tel || !address || !jobs || !salaryNum || !type || !eduReq || !treatment) {
            wx.showToast ({
                title: "请完整填写",
                icon: "error"
            })
        }else {
            const salary = salaryNum + "/" + salaryWay;
            const timeObj = app.getTime()
            const id = timeObj.Y + timeObj.M + timeObj.D + timeObj.h + timeObj.m + timeObj.s
            const times = timeObj.Y + '/' + timeObj.M + '/' + timeObj.D + ' ' + timeObj.h + ':' + timeObj.m + ':' + timeObj.s
            const db = wx.cloud.database()
            db.collection("Jobs").add({
                data: {
                    company: company,
                    id: id,
                    jobs: jobs,
                    salary: salary,
                    type: type,
                    eduReq: eduReq,
                    treatment: treatment,
                    detailInfo: detailInfo,
                    time: times,
                    address: address,
                    tel: tel
                },
                success() {
                    wx.showToast({
                      title: '发布成功',
                      icon: 'success'
                    })
                    setTimeout(() => {
                        wx.navigateBack()
                    }, 1000)
                },
                fail() {
                    wx.showToast({
                      title: '发布失败',
                      icon: 'none'
                    })
                }
            })
        }
    }
})