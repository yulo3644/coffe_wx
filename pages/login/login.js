// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myphone: null,
    mypas:null,
    token:null
  },

  btnlogin(){
    wx.request({
      url: 'http://www.kangliuyong.com:10002/login',
      method:"POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
      },
      data:{
        appkey:"U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
        password:this.data.mypas,
        phone:this.data.myphone
      },
      success: res => {
        console.log(res);
        if(res.data.code == 200) {
          wx.showToast({
            title: '登陆成功',
            icon:"error"
          })
          wx.setStorage({
            key:"token",
            data:res.data.token
          })
          wx.switchTab({
            url: '../home/home',
          })
        }else{
          wx.showToast({
            title: '登录失败',
            icon:"error"
          })
        }
      }

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})