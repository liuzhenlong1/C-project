const db = wx.cloud.database()
const that = this

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
        if(this.data.index == 0) {
            console.log(this.data.item1[itemIndex].id);
        }else {
            console.log(this.data.item2[itemIndex].id);   
        }
    },
<<<<<<< HEAD
    getItem() {
        const that = this
        const db = wx.cloud.database()
        db.collection("Jobs").where ({
            "type": "全职"
        }).get ({
            success(res) {
                that.setData ({
                    item1: res.data,
                    item: res.data
                })
            }
        })
        db.collection("Jobs").where ({
            "type": "兼职"
        }).get ({
            success(res) {
                that.setData ({
                    item2: res.data
                })
            }
        })
    },
    onLoad() {
        this.getItem()
=======
    getDatabase(){
        const that = this
        const db = wx.cloud.database()
        var a = []
        var b = []
        db.collection('Jobs').get({
            success(res){
                for(var i = 0; i < res.data.length; i++){
                   
                    if(res.data[i].type == '全职'){
                        a = a.concat(res.data[i])
                    }else{ 
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
    },
    onLoad() {
        this.getDatabase()
>>>>>>> master
    }
})