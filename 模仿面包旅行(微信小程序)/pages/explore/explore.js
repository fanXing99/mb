

var app = getApp()
var api = require('../../utils/app.js');
var util = require('../../utils/util.js');
Page({
  data: {
  windowWidth:app.systemInfo.windowWidth/2 -15,
  windowHeight:app.systemInfo.windowWidth/2 -15,
    list:[1,2,3,4],
    elements:[]
  },
  onLoad: function () {
      wx.showToast({
      title: '正在加载',
      icon: 'loading',
      duration: 10000,
    });

    this.addLoad()
  },
   addLoad:function(){
      var that = this
      api.destination(function(state,res){
           wx.stopPullDownRefresh()
        if (state === 'success') {
                var dest = res.data;
                that.setData({
                  elements: dest.elements,
                });
                wx.hideToast();
          }

      });
    },

   onPullDownRefresh: function(){
      this.addLoad();
  },

  viewPOI:function(e) {
    var data = e.currentTarget.dataset;
    wx.navigateTo({
      url: `../destination/destination?type=${data.type}&id=${data.id}&name=${data.name}`,
    });
  },
})