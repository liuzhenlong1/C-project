// pages/bugCheck/bugCheck.js
Page({
    data:({
        tabs: [
            {
                id: 0,
                name: "未读",
                isActive: "true"
            },
            {
                id: 1,
                name: "已读"
            }
        ],

        index: 1
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
            this.setData ({
                item: this.data.item1
            })
        }else {
            this.setData ({
                item: this.data.item2
            })
        }
    },
    itemClick(e) {
        const itemIndex = e.currentTarget.dataset.index
        console.log(e)
        var itemObj = {}
        if(this.data.index == 0) {
            var itemObj = this.data.item[itemIndex]
        }else {
            var itemObj = this.data.item[itemIndex]
        }
        wx.setStorageSync("itemObj", itemObj)
        wx.navigateTo({
            url: "../bugRead/bugRead"
        })
    },

    getItem() {
        wx.showNavigationBarLoading()
        const that = this
        var a = []
        var b = []
        const db = wx.cloud.database()
        const _ = db.command
        db.collection('Bugs')
        .where(_.or(
            {
                flag: "false"
            },
            { 
                flag: "true"
            })
        )
        .get({
            success(res){
                console.log(res)
                for(var i = 0; i < res.data.length; i++){
                    if(res.data[i].flag == "false"){  
                        a = a.concat(res.data[i])
                    }else {
                        b = b.concat(res.data[i])
                    }
                }
                that.setData ({
                    item1: a,
                    item2: b,
                    item: a
                })
            }  
        })
        setTimeout(() => {
            wx.stopPullDownRefresh()
            wx.hideNavigationBarLoading()
        }, 1000);
    },
    onLoad() {
        this.getItem()
    },
    onPullDownRefresh() {
        this.getItem()
    }
})