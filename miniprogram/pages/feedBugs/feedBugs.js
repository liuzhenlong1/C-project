

Page ({
    data: {
        bugInputLength: 0,
    },
    bugInput(e) {
        this.setData ({
            buginput: e.detail.value,
            bugInputLength: e.detail.value.length
        })
    },
    bugSubmit() {
        const {buginput} = this.data

        var time = Date.parse(new Date());
        time = time / 1000;
        var n = time * 1000;
        var date = new Date(n);
        var Y = date.getFullYear();
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
        var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        
        const times = Y + M + D + h + m + s;

        if(!buginput) {
            wx.showToast ({
                title: "请输入反馈信息",
                icon: "error"
            })
        }else {
            const db = wx.cloud.database()
            db.collection('Bugs').add({
                data: {
                    bugs: buginput,
                    time: times,
                },
                success: res=>{
                    wx.showToast({
                        icon: 'success',
                        title: "提交成功",
                    }),
                    setTimeout(function () {
                        wx.navigateTo({
                          url: '../feedBugs/feedBugs'
                        })
                      }, 1500)
                },
                fail: err=>{
                    wx.showToast({
                        icon: 'none',
                        title: "提交失败",
                    })
                }
            })
        }
    },
    
})