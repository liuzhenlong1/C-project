Page ({
    data: ({
        bannerUrl: [
            "/images/banner1.jpg",
            "/images/banner2.jpg",
            "/images/banner3.jpg",
        ],
        inTro: "兼职信息网重点是为解决当今社会面临的兼职就业难，企业招工难的问题，专注于以服务兼职招聘的专业人力资源网站，本网站现与全国数千家企业、院校建立了长久的合作关系，为其批量输出兼职信息内容。",
        introText: [
            "兼职信息网专门针对各大城市提供兼职服务，网站以广大会员的体验为重，本着分享、交流、提高的原则，自创办以来，为无数的寻找兼职朋友提供了最及时的兼职信息，同时也为数万家企业招到了优秀的兼职人才。",
            "兼职信息网致力提供一体化的兼职服务、为企业提供全方位的兼职招聘服务、为个人的兼职就业推荐服务，极力打造出一个使企业、个人多方实现充分沟通和互动交流的大型综合性网络服务平台。 ",
            "兼职信息网同时网站面向个人，为各阶层人士提供最新的兼职信息、兼职实习信息以及知名企业校园宣讲会，是人们网上找兼职的首选渠道。",
            "网站定位是兼职招聘门户网站，网站设置有计算机类、市场类、服装类、文职类、财务类、音乐类、体育类、演艺类、实习类等栏目和功能，整合了一切与兼职有关的内容，通过信息共享的方式，旨在打造一个兼职求职、就业、学习、交友、交流与企业招聘、形象宣传、职业培训相结合的大型综合性网络服务平台。",
        ],
        iconList: {
            "服务承诺":["null","/icon/service.png"],
            "招聘流程":["null","/icon/list.png"],
            "报名须知":["null","/icon/warning.png"],
            "常见问题":["null","/icon/question.png"]
        },
        tabs:[
            {
                id: 0,
                name: "推荐",
                isActive: "true"
            },
            {
                id: 1,
                name: "兼职"
            },
            {
                id: 2,
                name: "全职"
            }
        ],
        index: 0,
        treatments: ["包三餐", "包接送", "年终奖", "有提成"]
    }),

    introMore() {
        this.setData ({
            intromore: !this.data.intromore
        })
    },
    handleItemChange(e) {
        const {index} = e.detail;
        let {tabs} = this.data;
        tabs.forEach ((v, i) => i === index ? v.isActive = true : v.isActive = false);
        this.setData ({
            tabs,
            index
        })
    }
})