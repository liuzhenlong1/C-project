// pages/qustion/question.js
Page({
    data: ({
        question: {}
    }),
    onLoad(){
        var a = []
        const that = this
        const db = wx.cloud.database()
        db.collection('Bugs').where({
            isquestion: "true"
        })
        .get({
            success(res){
                for(var i = 0; i < res.data.length; i++){
                    if(res.data[i].isquestion == "true"){
                        a = a.concat(res.data[i])
                    }
                }
                that.setData({
                    question: a
                })
            },
            fail: console.error
        })
    }
})