// pages/car/car.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num1:0,
    num2:0,
    result:"",
  },
  a(e){
    console.log(e);
    // console.log(this.data[e.currentTarget.dataset.index]);
    // console.log(e.detail.value);
    this.data[e.currentTarget.dataset.index]=e.detail.value;
  },
  b(e){
    console.log(e);
    this.data[e.currentTarget.dataset.index]=e.detail.value;
  },
  c(){
    var str="";
    if(this.data.num1 > this.data.num2){
      str="第一个数大";
    }else if(this.data.num1 < this.data.num2) {
      str="第二个数大";
    }else{
      str="两个数相等";
    }
    this.setData({
      result:str
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