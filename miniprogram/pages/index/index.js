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
        var itemObj = {}
        const url = "../jobdetail/jobdetail?key=" + this.data.item1[itemIndex].company
        console.log(url)
        if(this.data.index == 0) {
            var itemObj = this.data.item[itemIndex]
        }else {
            var itemObj = this.data.item[itemIndex]
        }
        wx.setStorageSync("itemObj", itemObj)
        wx.navigateTo ({
            url: url
        })
    },
    getItem() {
        const that = this
        var a = []
        var b = []
        const db = wx.cloud.database()
        const _ = db.command
        db.collection('Jobs')
        .where(_.or(
            {
                type: "兼职"
            },
            { 
                type: "全职"
            })
        )
        .get({
            success(res){
                for(var i = 0; i < res.data.length; i++){
                    if(res.data[i].type == '全职'){  
                        a = a.concat(res.data[i])
                    }
                    else{
                        b = b.concat(res.data[i])
                    }
                }
                that.setData({
                    item1: a,
                    item2: b,
                    item: a
                })
            }  
        })
    },
    onLoad() {
        this.getItem()
    }
})