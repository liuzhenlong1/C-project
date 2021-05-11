Page ({
    data: {
        tabs: [
            {
                id: 0,
                name: "已上传",
                isActive: true
            },
            {
                id: 1,
                name: "已同意"
            },
            {
                id: 2,
                name: "已拒绝"
            }
        ],
        index: 0
    },
    handleItemChange(e) {
        const {index} = e.detail;
        let {tabs} = this.data;
        tabs.forEach ((v, i) => i === index ? v.isActive = true : v.isActive = false);
        this.setData ({
            tabs,
            index
        })
        if(index == 0) {
            this.setData ({
                item: this.data.item1
            })
        }else if(index == 1){
            this.setData ({
                item: this.data.item2
            })
        }else {
            this.setData ({
                item: this.data.item3
            })
        }
    },
    getJobInfo(openId) {
        const that = this
        wx.cloud.callFunction ({
            name: "getJobInfo",
            data: {
                openId
            },
            complete(res) {
                var item1 = []
                var item2 = []
                var item3 = []
                var itemTemp = []
                for(let i = 0; i < res.result.list.length; i++) {
                    itemTemp = itemTemp.concat(res.result.list[i])
                }
                for(let i = 0; i < itemTemp.length; i++) {
                    if(itemTemp[i].status == "已上传") {
                        item1 = item1.concat(itemTemp[i].JobInfo)
                    }else if(itemTemp[i].status == "已同意") {
                        item2 = item2.concat(itemTemp[i].JobInfo)
                    }else {
                        item3 = item3.concat(itemTemp[i].JobInfo)
                    }
                }
                that.setData ({
                    item: item1,
                    item1,
                    item2,
                    item3
                })
            }
        })
    },
    itemClick(e) {
        const itemIndex = e.currentTarget.dataset.index
        var itemObj = {}
        if(this.data.index == 0) {
            var itemObj = this.data.item[itemIndex]
        }else {
            var itemObj = this.data.item[itemIndex]
        }
        wx.setStorageSync("itemObj", itemObj)
        wx.navigateTo ({
            url: "../jobdetail/jobdetail?confirm=true"
        })
    },
    onLoad() {
        const openId = wx.getStorageSync("openId")
        this.getJobInfo(openId)
    }
})