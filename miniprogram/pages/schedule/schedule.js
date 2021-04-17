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
    }
})