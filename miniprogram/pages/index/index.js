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
                salary: "500000/年",
                treatment: ["包吃住", "五险一金", "专车司机"],
                url: "../jobDetail/jobDetail",
                extra: "只要刘振龙，只要刘振龙，只要刘振龙，只要刘振龙，只要刘振龙"
            },
            {
                id: 1619358194422,
                company: "天津财经大学",
                address: "天津津南区大沽南路不知道多少号",
                jobs: "CFO",
                nature: "全职",
                salary: "100000/年",
                treatment: ["包吃住", "五险一金", "专车司机"],
                extra: "只要刘振龙，只要刘振龙，只要刘振龙，只要刘振龙，只要刘振龙"
            },
        ],
        item2: [
            {
                id: 1619358125555,
                company: "天津职业技术师范大学",
                address: "天津津南区大沽南路1310号",
                jobs: "厨师",
                nature: "兼职",
                salary: "100/天",
                treatment: ["包吃", "五险一金"],
                extra: "只要刘振龙，只要刘振龙，只要刘振龙，只要刘振龙，只要刘振龙"
            },
            {
                id: 1619324295524,
                company: "天津财经大学",
                address: "天津津南区大沽南路不知道多少号",
                jobs: "保安",
                nature: "兼职",
                salary: "120/天",
                treatment: ["包吃", "五险一金", "车补"],
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
    itemClick(e) {
        const itemIndex = e.currentTarget.dataset.index
        if(this.data.index == 0) {
            console.log(this.data.item1[itemIndex].id);
        }else {
            console.log(this.data.item2[itemIndex].id);

        }
    },
    onLoad() {
        this.setData ({
            item: this.data.item1
        })
    }
})