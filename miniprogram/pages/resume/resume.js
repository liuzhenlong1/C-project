Page ({
    data: {
        eduBg: ["博士及以上", "硕士", "本科", "专科", "高中及以下"],
        workExp: ["5年及以上", "3-4年", "1-2年", "应届生", "在校学生"],
        jobIntention: false
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
    selectJobIntention(e){
        this.setData({
            jobIntention: e.detail.value
        })
    },
    selectWorkExp(e) {
        var that = this
        this.setData ({
            workExpIndex: e.detail.value,
            workexp: that.data.workExp[e.detail.value],
        })
    },
    numberInput(e) {
        this.setData ({
            tel: e.detail.value
        })
    },
    addressInput(e) {
        this.setData ({
           add: e.detail.value
        })
    },
    resetBtn(){
        this.setData({
            name: false,
            sex: false,
            birth: false,
            eduBgIndex: false,
            jobIntention: false,
            workExpIndex: false,
            tel: false,
            add: false,
        })
    },
    submitBtn(){
        const myName = this.data.name
        const mySex = this.data.sex
        const myBirth = this.data.birth
        const myEdu = this.data.edubg
        const myJobInten = this.data.jobIntention
        const myWorkExp = this.data.workexp
        const myTel = this.data.tel
        const myAdd = this.data.add

        if(!myName || !mySex || !myBirth || !myTel || !myAdd){
            wx.showToast({
                title: "请填写带星号的项",
                icon: "error"
            })
        }
        else{
            const myResume = []
            myResume.push(myName, mySex, myBirth, myEdu, myJobInten, myWorkExp, myTel, myAdd)
            try {
                wx.setStorageSync("resumes", myResume)
            }catch(e) {
                wx.showToast ({
                    title: "信息保存失败",
                    icon: "error"
                })
            }
            const resume_db = wx.cloud.database()
            resume_db.collection("resumes").add({
                data:{
                    myname: myResume[0],
                    mysex: myResume[1],
                    mybirth: myResume[2],
                    myedubg: myResume[3],
                    myjobIntention: myResume[4],
                    myworkexp: myResume[5],
                    mytel: myResume[6],
                    myadd: myResume[7],
                },
                success() {
                    console.log("保存成功...\n")
                    wx.setStorageSync("resultCode", 0)
                },
                fail() {
                    console.log("保存失败...\n")
                    wx.setStorageSync("resultCode", 1)
                }
            })
           
        }
    },
})

