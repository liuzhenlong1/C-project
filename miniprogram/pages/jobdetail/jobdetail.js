Page ({
    onLoad(options) {
        // 获取点击的 item 缓存
        try {
            var item = wx.getStorageSync("itemObj")
        }catch(e) {
            console.log(e);
            wx.showToast ({
                title: "获取缓存失败",
                icon: "error"
            })
        }finally {
            wx.removeStorageSync("itemObj")
        }
        this.setData ({
            item
        })
        if(options.confirm) {
            this.setData ({
                confirm: true
            })
        }
    },
    callBtn() {
        wx.makePhoneCall ({
            phoneNumber: this.data.item.tel
        })
    },
    submitBtn(){
        wx.navigateTo ({
            url: "../ifresume/ifresume?confirm=true&id=" + this.data.item.id
        })
    }
})