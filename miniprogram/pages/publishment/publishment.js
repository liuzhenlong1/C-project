Page ({

    data:{
        classArray:['日结','周结', '半月结', '月结'],
        treatment:['包工作餐','包住宿','包接送','交通补助','有提成','有年终奖','其他']
    },
    //工作名称
    nameInput(e) {
        this.setData ({
            data_name: e.detail.value
        })
    },
    //工作类型
    styleSelect(e) {
        this.setData ({
            data_style: e.detail.value
        })
    },
    //待遇
    checkboxChange(e){
        this.setData({
            data_treatment: e.detail.value
        })
    },
    //工资发放类型
    classSelect(e) {
        this.setData ({
            data_class: e.detail.value
        })
    },
    //工资
    salaryInput(e) {
        this.setData ({
            data_salary: e.detail.value
        })
    },
    //地址
    addressInput(e){
        this.setData({
            data_address:e.detail.value
        })
    },
    //简介
    newsletterInput(e) {
        this.setData ({
            data_newsletter: e.detail.value
        })
    },
    //人数
    peopleInput(e){
        this.setData({
            data_peopleNum: e.detail.value
        })
    },

    submitBtn() {
        const name = this.data.data_name
        const style = this.data.data_style
        const classes = this.data.data_class
        const treatment = this.data.data_treatment
        const salary = this.data.data_salary
        const address = this.data.data_address
        const newsletter = this.data.data_newsletter
        const peopleNum = this.data.data_peopleNum

        if(!name || !style || !classes || !treatment || !salary || !address || !peopleNum) {
            wx.showToast ({
                title: "信息未填写完整！",
                icon: "error"
            })
        }else {
            const jobInfo = []
            jobInfo.push(name, style, treatment, peopleNum, classes, salary, address, newsletter)
            try {
                wx.setStorageSync("jobs", jobInfo)
            }catch(e) {
                wx.showToast ({
                    title: "信息存储失败",
                    icon: "error"
                })
            }
            const db = wx.cloud.database()
            db.collection("jobs").add ({
                data:{
                    name: jobInfo[0],
                    style: jobInfo[1],
                    treatment: jobInfo[2],
                    peopleNum: jobInfo[3],
                    classes: jobInfo[4],
                    salary: jobInfo[5],
                    address: jobInfo[6],
                    newsletter: jobInfo[7]
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
            wx.navigateTo ({
                url: "../eula/eula"
            })
        }
    },
    resetBtn() {
        this.setData ({
            data_name: false,
            data_style: false,
            data_class: false,
            data_peopleNum: 0,
            data_salary: 0,
            data_address: false,
            data_newsletter: false,
            data_treatment: false,
        })
    }
})