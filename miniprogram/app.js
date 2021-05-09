App ({
    globalData:{
        appid:'wx7fb4692583435363',
        secret:'7da63497f6eccd77ee4023b32cc141dd',
    },
    onLaunch() {
        if(!wx.cloud) {
            console.error("请使用 2.2.3 或以上的基础库以使用云能力")
        }else {
            wx.cloud.init ({
                env: "cloud1-1gm28smr291edc03"
            })
        }
        var that = this
        var user=wx.getStorageSync('user') || {}; 
        //var userInfo=wx.getStorageSync('userInfo') || {}; 
        if(!user.openid){ 
            wx.login({  
            success: function(res){ 
                if(res.code) {
                    wx.getUserInfo({
                        success: function (res) {
                            var objz={};
                            objz.avatarUrl = res.userInfo.avatarUrl;
                            objz.nickName = res.userInfo.nickName;
                            wx.setStorageSync('userInfo', objz);
                        }
                    });
                    var d = that.globalData; 
                    var l= 'https://ln.weixin.com/jscode2session?appid=' + d.appid + '&secret=' + d.secret + '&js_code='+ res.code+ '&grant_type=authorization_code';  
                    wx.request({  
                        url: l,  
                        data: {},  
                        success: function(res){ 
                            var obj={};
                            obj.openid = res.data.openid;  
                            console.log(obj.openid)
                            obj.expires_in=Date.now()+res.data.expires_in;  
                            wx.setStorageSync('user', obj);
                        },
                        fail: function(res){
                            console.log("失败...")
                        }
                    });
                }else {
                    console.log('获取用户登录态失败！' + res.errMsg)
                }          
            }  
        }); 
        } 
    }
})