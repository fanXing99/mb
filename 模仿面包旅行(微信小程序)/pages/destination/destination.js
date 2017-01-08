var App = getApp();
var api = require('../../utils/app.js');
var util = require('../../utils/util.js');

var formatTime = util.formatTime;

Page({
  data: {
    title: '',
    pois: null,
    info: null,
    windowWidth: App.systemInfo.windowWidth,
    windowHeight: App.systemInfo.windowHeight,
  },
  onReady() {
    var that = this;
    wx.setNavigationBarTitle({
      title: that.data.title,
    });
  },
  onLoad(options) {
    var type = options.type;
    var id = options.id;
    var name = options.name;
    wx.showToast({
      title: '正在加载',
      icon: 'loading',
      duration: 10000,
    });
    this.setData({
      title: name,
    });
    this.getPlace(type, id);
  },
  getPlace:function(type, id) {
   var that = this;
    //api.getPlaceInfo(type, id, function(state, res){});

    api.getPlaceInfo(type,id, function(state,res){

        if (state === 'success') {
        var data = res.data;
        that.setData({
          info: data,
        });
        that.getPOI(type, id);
      }

    })


  },
  getPOI:function(type, id) {
    var that = this;
    var data = {};
    api.poi(type, id, '', data, function(state, res) {
      if (state === 'success') {
        var pois = res.data.items;
        that.setData({
          pois:pois
        });
        wx.hideToast();
      }
    });
  },
});
