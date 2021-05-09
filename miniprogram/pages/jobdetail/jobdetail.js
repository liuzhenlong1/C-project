Page ({
    data: ({
        companyInfo: {},
        userName: false
    }),
    onLoad(option) {
        // 获取点击的 item 缓存
        const that = this
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
            company: option.key
        }).get ({
            success(res) {
                console.log(res.data)
                that.setData ({
                    companyInfo: res.data
                })
            }
        })
    },
    submitBtn(e){
        const that = this
        const db = wx.cloud.database()
        db.collection("resume").
        where({
            userName: "12"
        })
        .get({
            success: res => {
                if(res.data.length == 0){
                    wx.showToast({
                        icon: 'none',
                        title: '没有简历跳转中...'
                    }),
                    setTimeout(function () {
                        wx.navigateTo({
                          url: '../resume/resume'
                        })
                      }, 2000)
                }
            },
        })    
    }
})