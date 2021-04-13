Page ({
    data: {
        eduBg: ["博士及以上", "硕士", "本科", "专科", "高中及以下"],
        workExp: ["5年及以上", "3-4年", "1-2年", "应届生", "在校学生"]
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
        this.setData ({
            eduBgIndex: e.detail.value,
            edubg: this.data.eduBg[e.detail.value]
        })
    },
    selectWorkExp(e) {
        this.setData ({
            workExpIndex: e.detail.value,
            workexp: this.data.workExp[e.detail.value]
        })
    },
    numberInput(e) {
        this.setData ({
            phone: e.detail.value
        })
    },
    addressInput(e) {
        this.setData ({
            address: e.detail.value
        })
    },
})