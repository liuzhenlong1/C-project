    // pages/bugRead/bugRead.js
Page({
    detailInfoInput(e){
        this.setData({
            answer: e.detail.value
        }) 
    },
    submitbtn(){
        if(!this.data.answer){
            wx.showToast({
              title: '请先回答',
              icon: "none"
            })
        }
        else{
            const db = wx.cloud.database()
            db.collection('Bugs').doc(this.data.item._id).update({
                data: {
                    answer: this.data.answer,
                    flag: "true",
                    isquestion: "true"
                },
                success:res=>{
                    wx.showToast({
                    title: '已阅读',
                    icon: "success"
                    })   
                }
            })
        }
    },
    Readedbtn(){
        const db = wx.cloud.database()
        db.collection('Bugs').doc(this.data.item._id).update({
            data: {
              flag: "true"
            },
            success:res=>{
                wx.showToast({
                    title: '已阅读',
                    icon: "success"
                })   
            }
        })
    },
    onLoad(options) {
        try {
            var item = wx.getStorageSync("itemObj")
        }catch(e) {
            console.log(e);
            wx.showToast ({
                title: "获取缓存失败",
                icon: "error"
            })
        }finally {
            wx.removeStorageSync("itemObj")
        }
        this.setData ({
            item
        })
        if(options.confirm) {
            this.setData ({
                confirm: true
            })
        }
    }
})