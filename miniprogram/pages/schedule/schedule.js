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
                item: this.data.itemA
            })
        }else if(index == 1){
            this.setData ({
                item: this.data.itemB
            })
        }else {
            this.setData ({
                item: this.data.itemC
            })
        }
    },
    getJobInfo(id) {
        var itemTmp = {}
        const db = wx.cloud.database()
        db.collection("Jobs").where ({
            id: id
        }).get ({
            success(res) {
                itemTmp = res.data[0]
                return itemTmp
            }
        })
    },
    onLoad() {
        // const that = this
        // const db = wx.cloud.database()
        // const openId = wx.getStorageSync("openId")
        // db.collection("Status").where ({
        //     _openid: openId
        // }).get ({
        //     success(res) {
        //         for(let i = 0; i < res.data.length; i++) {
        //             if(res.data[i].status == "已上传") {
        //                 that.getJobInfo(res.data[i].Job_id)
        //             }
        //         }
        //     }
        // })
    }
})