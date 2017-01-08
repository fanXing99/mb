//index.js
//获取应用实例
var app = getApp()
var api = require('../../utils/app.js');
var util = require('../../utils/util.js');
var formatTime = util.formatTime;
Page({
  data: {
  loading: true,
  trips:[],
  start:0,
  windowWidth:app.systemInfo.windowWidth,
  windowHeight:app.systemInfo.windowHeight
  },
  onLoad: function () {

    wx.showToast({
  title: '加载中',
  icon: 'loading',
   duration: 100000
   })
    this.loadMore();
  },
  loadMore:function() {
    console.log("加载更多");
    
   var data = {
    next_start: this.data.start,
   }
   var that  = this
    api.hot(data ,function(state ,res){
       wx.hideToast()
       wx.stopPullDownRefresh()

       that.setData({
      loading:false
    })
     if(state === 'success'){

var  start = res.data.data.next_start;
 that.setData({
         start:start 
       })

       var trips =  res.data.data.elements;
      trips.map(function(trip){
         trip.data[0].date_added = formatTime(new Date(trip.data[0].date_added * 1000), 1);
          return trip;
      })


      var start = that.data.start;
      if(start != 0){
       trips = that.data.trips.concat(trips)
      }
       that.setData({
         trips:trips 
       })
     }
    })
  },
  load:function(){
    this.setData({
      loading:true
    })
    this.loadMore();
  },
onPullDownRefresh:function(){
this.setData({
  start:0
})
 this.loadMore();
},
  viewTrip:function(e){
    var ds = e.currentTarget.dataset;
    wx.navigateTo({
   url: `../trip/trip?id=${ds.id}&name=${ds.name}`,
    })
    
  }
})
