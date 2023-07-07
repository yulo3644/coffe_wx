// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counts:null,
    dataobj:null,
    pid:null,
    sugar_desc:null,
    sugar:null,
    sugarindex:0,
    oksuagr:"全糖",
    tem_desc:null,
    tem:null,
    temindex:0,
    oktem:"冷",
    count:1,
    isshow:false,
    arrs:null,
    list:['1,','2,','3,','4,','5,'],
    token:null
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this;
    this.setData({
      pid:options.pid
    })

    wx.request({
      url: 'http://www.kangliuyong.com:10002/productDetail',
      method:"GET",
      data:{
        pid:options.pid,
        appkey:"U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
      },
      success:res=>{
        console.log(res);
        let sugar = res.data.result[0].sugar.split("/");
        let tem = res.data.result[0].tem.split("/");
        this.setData({
          dataobj:res.data.result[0],
          sugar:sugar,
          sugar_desc:res.data.result[0].sugar_desc,
          tem:tem,
          tem_desc:res.data.result[0].tem_desc
        })
      }
    })
    
  // let that=this;
  // this.setDate({
  //   pid: option.pid
  // })

  wx.getStorage({
    key:"token",
    success:res=>{
      console.log(res);
      this.setData({
        token:res.data
      })
      wx.request({
        url: 'http://www.kangliuyong.com:10002/findAllLike',
        method:"GET",
        data:{
          appkey:"U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
          tokenString:this.data.token
        },
        success:res=>{
          // console.log(res.data);
          // console.log(this.data.token);
          let arr = res.data.result;
          for(let i =0;i<arr.length;i++){
            if(this.data.pid==arr[i].pid){
              this.setData({
                isshow:true
              })
            }
          }
        }
      }),
      wx.request({
        url: 'http://www.kangliuyong.com:10002/shopcartCount',
        method:"GET",
        data:{
          appkey:"U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
          tokenString:this.data.token
        },
        success:res=>{
              this.setData({
                counts: res.data.result
              })
          }
      })
    }
  })

  

  },

  sugar(e){
    let index = e.currentTarget.dataset.index;
    let oksugar = e.currentTarget.dataset.text;
    this.setData({
      sugarindex:index,
      oksugar:oksugar
    })
  },
  tem(e){
    let index = e.currentTarget.dataset.index;
    let oktem = e.currentTarget.dataset.text;
    this.setData({
      temindex:index,
      oktem:oktem
    })
  },
  add() {
    let num = this.data.count;
    num++;
    this.setData({
      count:num
    })
  },
  sub() {
    let num = this.data.count;
    if(num == 1) {
      wx.showToast({
        title: '不能再减啦！',
        icon:"error",
        mask:true
      })
    } else{
      num--;
    this.setData({
      count:num
    })
  }
},

  addcollect(){
    let that = this;
    if(that.data.isshow==false){
      if(that.data.token!=null){
      wx.request({
        url: 'http://www.kangliuyong.com:10002/like',
        method:"POST",
        header:{
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        },
        data:{
          appkey:"U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
          pid:that.data.dataobj.pid,
          tokenString:that.data.token
        },
        success:res=>{
          that.setData({
            isshow:true
          });
          wx.showToast({
            title: '已成功收藏',
            icon:"success"
          })
        },
        fail:err=>{
          console.log(err);
        }
      })
    }else{
          wx.navigateTo({
            url: '../login/login',
          })
        }
    }
    if(that.data.isshow==true){
      if(that.data.token!=null){
        wx.request({
          url: 'http://www.kangliuyong.com:10002/notlike',
          method:"POST",
          header:{
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
          },
          data:{
            appkey:"U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
            pid:that.data.dataobj.pid,
            tokenString:that.data.token
          },
          success:res=>{
            that.setData({
              isshow:false
            });
            wx.showToast({
              title: '已取消收藏',
              icon:"error"
            })
          }
        })
    }
  }
  },

  addcart(e) {
    let that = this;
    wx.getStorage({
      key:"token",
      success:res=> {
        let token = res.data;
        wx.request({
          url: 'http://www.kangliuyong.com:10002/addShopcart',
          method:"POST",
          header:{
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
          },
          data:{
            appkey:"U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=",
            pid:that.data.pid,
            count:that.data.count,
            rule:`${that.data.oktem}/${that.data.oksugar}`,
            tokenString:token
          },
          success:res=>{
            wx.showToast({
              title: '加入成功',
              icon:"success"
            })
          }
        })
      },
      fail:res=>{
        wx.showToast({
          title: '加入失败',
          icon:"error"
        })
        wx.navigateTo({
          url:'../login/login',
        })
      }
    })
  },
  

  gocart(){
    wx.switchTab({
      url: '../car/car',
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