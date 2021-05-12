Page ({
    data: {
        tabs: [
            {
                id: 0,
                name: "未审批",
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
            this.getStatus("已上传")
        }else if(index == 1){
            this.getStatus("已通过")
        }else {
            this.getStatus("已拒绝")
        }
    },
    getStatus(field) {
        const that = this
        const db = wx.cloud.database()
        db.collection("Status").where ({
            status: field
        }).get ({
            success(res) {
                that.setData ({
                    item: res.data
                })
            }
        })
    },
    itemClick(e) {
        const {index} = this.data
        const jobid = this.data.item[e.currentTarget.dataset.index].Job_id
        const openid = this.data.item[e.currentTarget.dataset.index]._openid
        wx.navigateTo ({
            url: "./checkinfo/checkinfo?jobid=" + jobid + "&openid=" + openid + "&index=" + index
        })
    },
    onShow() {
        this.getStatus("已上传")
    }
})