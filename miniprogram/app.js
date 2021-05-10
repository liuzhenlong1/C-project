App ({
    onLaunch() {
        if(!wx.cloud) {
            console.error("请使用 2.2.3 或以上的基础库以使用云能力")
        }else {
            wx.cloud.init ({
                env: "cloud1-1gm28smr291edc03"
            })
        }
    },
    getTime() {
        let time = Date.parse(new Date());
        time = time / 1000;
        let n = time * 1000;
        let date = new Date(n);
        let Y = date.getFullYear();
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
        let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        return {Y, M, D, h, m, s}
    }
})