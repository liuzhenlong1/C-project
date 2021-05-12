const openId = wx.getStorageSync("openId")

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
                name: "已通过"
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
            this.getJobId(openId, "已上传")
        }else if(index == 1){
            this.getJobId(openId, "已通过")
        }else {
            this.getJobId(openId, "已拒绝")
        }
    },
    getJobId(openId, field) {
        const that = this
        const db = wx.cloud.database()
        db.collection("Status").where ({
            _openid: openId,
            status: field
        }).get ({
            success(res) {
                var jobIdList = []
                for(let i = 0; i < res.data.length; i++) {
                    jobIdList = jobIdList.concat(res.data[i].Job_id)
                }
                if(jobIdList.length != 0) {
                    that.getJobInfo(jobIdList)
                }else {
                    that.setData ({
                        item: false
                    })
                }
                
            }
        })
    },
    getJobInfo(jobIdList) {
        const that = this
        var item = []
        const db = wx.cloud.database()
        for(let i = 0; i < jobIdList.length; i++) {
            db.collection("Jobs").where ({
                id: jobIdList[i]
            }).get ({
                success(res) {
                    item = item.concat(res.data)
                    if(item.length == jobIdList.length) {
                        that.setData ({
                            item
                        })
                    }
                }
            })
        }
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
        this.getJobId(openId, "已上传")
    }
})