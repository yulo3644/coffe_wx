// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: null,
    //切换的变量
    num: 0,
    // hotlist: null,

    obj: {
      key: "isHot",
      value: "1"
    }
    
  },
  qiehuan(e) {
    console.log(e.currentTarget.dataset.datanum);
    console.log(e.currentTarget.dataset.obj);
    let myobj = JSON.parse(e.currentTarget.dataset.obj)
    this.setData({
      num: e.currentTarget.dataset.datanum,
      obj: myobj
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.request({
      url: 'http://www.kangliuyong.com:10002/type',
      data:{
        appkey:"U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA="
      },
      success: res =>{
        console.log(res.data.result);
      }
    })
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