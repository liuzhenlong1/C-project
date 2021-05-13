// pages/qustion/question.js
Page({
    data: ({
        question: {
            "为什么无法报名": "无法报名可能是因为您还没有提交简历，可以尝试提交简历后再试一次",
            "怎么登录管理界面": "需要管理员特有的账号才行，可以联系客服，申请办理",
            "为什么报名很长时间了还没有收到消息": "您报名的职业人数可能比较多，可以尝试主动联系招聘公司"
        }
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
                console.log(res)
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