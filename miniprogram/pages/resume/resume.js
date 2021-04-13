Page({
  data: {
    data_Xueli: ['硕士及以上','本科','专科','专科以下'],
    data_job_experience:["本届应届生","高校学生","1年以下","1-3年","3-5年","5年以上"],
    data_std_sta:[
      ["学生","非学生"],
      ["随便看看","积极找工作","暂时不找工作"]
    ],
    data_job_style:["不限","兼职","全职"]
  },
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindXueliChange(e){
    this.setData({
      Xueli: e.detail.value
    })
  },
  bindExpchange(e){
    this.setData({
      job_experience: e.detail.value
    })
  },
  bindStatachange(e){
    this.setData({
      stata: e.detail.value
    })
  },
   //获取选择结果
  bind_stu_stata_Change(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      stu_sta_arr:e.detail.value
    })
  },
  //获取每一列的选择结果
  bind_ss_col_Change(e){
    this.setData({
      isStudent:e.detail.column,
      stata:e.detail.value
    })
  },
  bind_job_style(e){
    this.setData({
      job_style:e.detail.value
    })
  },

  
})