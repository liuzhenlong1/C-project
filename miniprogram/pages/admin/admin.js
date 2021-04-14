Page ({

    data:({
        data_right:[["发布工作",""],["查询成员",""],["退出登录",""]]
    }),

    adminInput(e) {
        this.setData ({
            data_adminInput: e.detail.value
        })
    },
    adminBtn() {
        if(this.data.data_adminInput == "adminadmin") {
            this.setData ({
                data_allow: true
            })
        }else {
            wx.showToast ({
                title: "密钥错误",
                icon: "error"
            })
        }
    }

})