Page ({
    data: ({
        bannerUrl: [
            "/images/banner1.jpg",
            "/images/banner2.jpg",
            "/images/banner3.jpg",
        ],
        iconList: {
            "服务承诺":["null","/icon/service.png"],
            "招聘流程":["null","/icon/list.png"],
            "报名须知":["null","/icon/warning.png"],
            "常见问题":["null","/icon/question.png"]
        },
        tabs: [
            {
                id: 0,
                name: "全职",
                isActive: "true"
            },
            {
                id: 1,
                name: "兼职"
            }
        ],
        url: "null",
        index: 0
    }),
    handleItemChange(e) {
        const {index} = e.detail;
        let {tabs} = this.data;
        tabs.forEach ((v, i) => i === index ? v.isActive = true : v.isActive = false);
        this.setData ({
            tabs,
            index
        })
        if(index == 0) {
            this.getItem("全职")
        }else {
            this.getItem("兼职")
        }
    },
    itemClick(e) {
        const openId = wx.getStorageSync("openId")
        if(openId) {
            const itemIndex = e.currentTarget.dataset.index
            var itemObj = {}
            if(this.data.index == 0) {
                var itemObj = this.data.item[itemIndex]
            }else {
                var itemObj = this.data.item[itemIndex]
            }
            wx.setStorageSync("itemObj", itemObj)
            wx.navigateTo ({
                url: "../jobdetail/jobdetail"
            })
        }else {
            wx.showModal ({
                title: "提示",
                content: "请前往用户页进行授权",
                success(res) {
                    if(res.confirm) {
                        wx.switchTab ({
                            url: "../user/user"
                        })
                    }else if(res.cancel) {
                        wx.showToast ({
                            title: "操作取消",
                            icon: "error"
                        })
                    }
                }
            })
        }
        
    },
    getItem(field) {
        const that = this
        const db = wx.cloud.database()
        db.collection("Jobs").where ({
            type: field
        }).get ({
            success(res) {
                if(res.data.length != 0) {
                    that.setData ({
                        item: res.data
                    })
                }else {
                    that.setData ({
                        item: false
                    })
                }
                setTimeout(() => {
                    wx.stopPullDownRefresh()
                    wx.hideNavigationBarLoading()
                }, 500);
            },
            fail() {
                wx.showToast ({
                    title: "刷新失败",
                    icon: "error"
                })
            }
        })
    },
    onLoad() {
        this.getItem("全职")
    },
    onPullDownRefresh() {
        wx.showNavigationBarLoading()
        if(this.data.index == 0) {
            this.getItem("全职")
        }else {
            this.getItem("兼职")
        }
    }
})