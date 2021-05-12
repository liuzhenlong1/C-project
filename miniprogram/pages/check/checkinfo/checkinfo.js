Page ({
    onLoad(options) {
        const that = this
        const {jobid} = options
        const {openid} = options
        const db = wx.cloud.database()
        if(options.index == 0) {
            this.setData ({
                status: "未审批"
            })
        }else if(options.index == 1) {
            this.setData ({
                status: "已通过"
            })
        }else {
            this.setData ({
                status: "已拒绝"
            })
        }
        this.setData ({
            index: options.index,
            jobid: options.jobid,
            openid: options.openid
        })
        db.collection("Jobs").where ({
            id: jobid
        }).get ({
            success(res) {
                that.setData ({
                    job: res.data[0].jobs,
                    company: res.data[0].company
                })
            }
        })
        db.collection("Resume").where ({
            _openid: openid
        }).get ({
            success(res) {
                that.setData ({
                    name: res.data[0].name,
                    sex: res.data[0].sex,
                    birth: res.data[0].birth,
                    edubg: res.data[0].edubg,
                    workexp: res.data[0].workexp,
                    tel: res.data[0].tel,
                    address: res.data[0].address,
                    intro: res.data[0].intro
                })
            }
        })
    },
    telBtn() {
        wx.makePhoneCall ({
            phoneNumber: this.data.tel
        })
    },
    accessBtn() {
        const db = wx.cloud.database()
        try {
            db.collection("Status").where ({
                _openid: this.data.openid,
                Job_id: this.data.jobid
            }).update ({
                data: {
                    status: "已通过"
                },
                success() {
                    wx.showToast ({
                        title: "操作成功"
                    })
                    setTimeout(() => {
                        wx.navigateBack()
                    }, 1000);
                }
            })
        }catch {
            wx.showToast ({
                title: "数据库异常",
                icon: "error"
            })
        }
    },
    denyBtn() {
        const db = wx.cloud.database()
        db.collection("Status").where ({
            _openid: this.data.openid,
            Job_id: this.data.jobid
        }).update ({
            data: {
                status: "已拒绝"
            },
            success() {
                wx.showToast ({
                    title: "操作成功"
                })
                setTimeout(() => {
                    wx.navigateBack()
                }, 1000);
            },
            fail() {
                wx.showToast ({
                    title: "操作失败",
                    icon: "error"
                })
            }
        })
    },
    deleteBtn() {
        const db = wx.cloud.database()
        db.collection("Status").where ({
            _openid: this.data.openid,
            Job_id: this.data.jobid
        }).remove ({
            success() {
                wx.showToast ({
                    title: "删除成功"
                })
                setTimeout(() => {
                    wx.navigateBack()
                }, 1000);
            },
            fail() {
                wx.showToast ({
                    title: "删除失败",
                    icon: "error"
                })
                
            }
        })
    }
})