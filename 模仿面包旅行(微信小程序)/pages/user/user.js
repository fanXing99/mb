var App = getApp();
var api = require('../../utils/app.js');
var util = require('../../utils/util.js');

var formatTime = util.formatTime;
Page({
  data: {
    trips: [],
    user_info: null,
    windowWidth: App.systemInfo.windowWidth,
    windowHeight: App.systemInfo.windowHeight,
  },
  onLoad: function (e) {
      var userId = e.id
      var that = this

       wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 100000
        })
      api.infoUser(userId,function(state ,res){
           wx.hideToast();
            if (state === 'success') {
                var trips = res.data.trips;
                trips.map(function(trip){
                var  item = trip;
                item.date_added = formatTime(new Date(item.date_added * 1000), 1);
                return item;
                })
                that.setData({
                trips:trips,
                userId: res.data.userId,
                user_info: res.data.user_info,
                });
                wx.setNavigationBarTitle({
                title: res.data.user_info.name,
                });
            }
      })
  },

  viewTrip:function(e) {
    const ds = e.currentTarget.dataset;
    wx.navigateTo({
      url: `../trip/trip?id=${ds.id}&name=${ds.name}`,
    });
  },



})
  