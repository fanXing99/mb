
var app = getApp();
var api = require('../../utils/app.js');
Page({
  data: {
  options: null,
    windowWidth: 0,
    trip:null,
  },
  onLoad: function (options) {
      var that = this
    var id = options.id;

      this.setData({
      options:options,
      windowWidth: app.systemInfo.windowWidth,
    })
     wx.showToast({
      title: '正在加载',
      icon: 'loading',
      duration: 10000,
    });
    api.waypoints(id,function(state, res){
          
        if (state === 'success') {
                var trip = res.data;
                that.setData({
                  trip:trip
                });
                wx.hideToast();
              }
    })
  },
  onReady:function() {
    wx.setNavigationBarTitle({
     title: this.data.options.name,
    });
  },


  gotoUser:function(e) {
    var userId = e.target.dataset.id;
    wx.navigateTo({
      url: `../user/user?id=${userId}`,
    });
  },


})