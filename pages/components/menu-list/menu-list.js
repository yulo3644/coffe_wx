// pages/conpontens/menu-list/menu-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    comobj:{
      type:Object,
      value:"",
      observer:function(news){
        console.log(news);
        this.setData({
          comobj:news
        })
        let key=news.key;
        let value=news.value
        wx.request({
          url: 'http://www.kangliuyong.com:10002/typeProducts',
          data:{
            key:key,
            value:value,
            appkey:"U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA="
          },
          success:res=>{
            console.log(res.data.result);
            this.setData({
              arr:res.data.result
            })
          }
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    arr:null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    godetail(e){
      wx.navigateTo({
        url:`../../pages/detail/detail?pid=${e.currentTarget.dataset.pid}`,
      })
    }
  }
})