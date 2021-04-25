Page ({
    data: {
        bugInputLength: 0
    },
    bugInput(e) {
        this.setData ({
            buginput: e.detail.value,
            bugInputLength: e.detail.value.length
        })
    },
    bugSubmit() {
        const {buginput} = this.data
        if(!buginput) {
            wx.showToast ({
                title: "请输入反馈信息",
                icon: "error"
            })
        }else {
            console.log(buginput);
        }
    }
})