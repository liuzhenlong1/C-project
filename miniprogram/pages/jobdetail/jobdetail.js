Page ({
    onLoad() {
        const that = this
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
        const db = wx.cloud.database()
        db.collection("Companys").where ({
            company: this.data.item.company
        }).get ({
            success(res) {
                that.setData ({
                    companyInfo: res.data
                })
            }
        })
    }
})