App ({
    globalData: {
        wxName: null,
        avatarUrl: null,
    },
    data: ({
        appid:'wx7fb4692583435363',
        secret:'7da63497f6eccd77ee4023b32cc141dd',
    }),
    onLaunch() {
        if(!wx.cloud) {
            console.error("请使用 2.2.3 或以上的基础库以使用云能力")
        }else {
            wx.cloud.init ({
                env: "cloud1-1gm28smr291edc03"
            })
        }
    },
    
})