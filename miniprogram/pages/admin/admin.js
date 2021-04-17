Page ({
    data: {
        tabs: [
            {
                id: 0,
                name: "发布工作",
                isActive: true
            },
            {
                id: 1,
                name: "查询简历"
            },
            {
                id: 2,
                name: "首页修改"
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
    }
})