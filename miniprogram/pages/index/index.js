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
        index: 0,
        item1: [
            {
                id: 1619358194446,
                company: "天津职业技术师范大学",
                address: "天津津南区大沽南路1310号",
                jobs: "CEO",
                nature: "全职",
                salary: "50000-100000",
                treatment: ["包吃住", "五险一金", "专车司机"],
                extra: "只要刘振龙，只要刘振龙，只要刘振龙，只要刘振龙，只要刘振龙"
            },
            {
                id: 1619358194446,
                company: "天津职业技术师范大学",
                address: "天津津南区大沽南路1310号",
                jobs: "CFO",
                nature: "全职",
                salary: "50000-100000",
                treatment: ["包吃住", "五险一金", "专车司机"],
                extra: "只要刘振龙，只要刘振龙，只要刘振龙，只要刘振龙，只要刘振龙"
            },
        ],
        item2: [
            {
                id: 1619358195555,
                company: "天津职业技术师范大学",
                address: "天津津南区大沽南路1310号",
                jobs: "厨师",
                nature: "兼职",
                salary: "5000-10000",
                treatment: ["五险一金", "包吃"],
                extra: "只要刘振龙，只要刘振龙，只要刘振龙，只要刘振龙，只要刘振龙"
            },{
                id: 1619358195555,
                company: "天津职业技术师范大学",
                address: "天津津南区大沽南路1310号",
                jobs: "保安",
                nature: "兼职",
                salary: "5000-10000",
                treatment: ["五险一金", "包吃", "饭补"],
                extra: "只要刘振龙，只要刘振龙，只要刘振龙，只要刘振龙，只要刘振龙"
            }
        ]
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
    onLoad() {
        this.setData ({
            item: this.data.item1
        })
    }
})