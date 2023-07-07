// pages/components/home-list/home-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    arr:{
      type:Array
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    godatail(e){
      console.log(e.currentTarget.dataset.pid);
      wx.navigateTo({
        //url:`../../detail/detail?pid=${e.currentTarget.dataset.pid}`,
        url: `../../pages/detail/detail?pid=${e.currentTarget.dataset.pid}`,
      })
    }

  }
})
