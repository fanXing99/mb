const apiURL = 'http://api.breadtrip.com';

function hot (data, callback) {
    wx.request({
      url: `${apiURL}/v2/index/`,
      method: 'GET',
      data,
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      success(res) {
        callback('success', res);
      },
      fail(res) {
        callback('fail', res);
      },
      complete(res) {
        callback('complete', res);
      },
    });
 }



 function destination(callback){
       wx.request({
      url: `${apiURL}/destination/v3/`,
      method: 'GET',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      success(res) {
        callback('success', res);
      },
      fail(res) {
        callback('fail', res);
      },
      complete(res) {
        callback('complete', res);
      },
    });
 }



 function waypoints(tripId, callback) {
    wx.request({
      url: `${apiURL}/trips/${tripId}/waypoints/`,
      method: 'GET',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      success(res) {
        callback('success', res);
      },
      fail(res) {
        callback('fail', res);
      },
      complete(res) {
        callback('complete', res);
      },
    });
 }



function infoUser(userId, callback) {
    wx.request({
      url: `${apiURL}/users/${userId}/v2/`,
      method: 'GET',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      success(res) {
        callback('success', res);
      },
      fail(res) {
        callback('fail', res);
      },
      complete(res) {
        callback('complete', res);
      },
    });
  }


 function getPlaceInfo(type,id ,callback) {

   wx.request({
      url: `${apiURL}/destination/place/${type}/${id}/`,
      method: 'GET',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      success(res) {
        callback('success', res);
      },
      fail(res) {
        callback('fail', res);
      },
      complete(res) {
        callback('complete', res);
      },
    });



 }
function poi(type, id, poiType, data, callback) {
    let poi = 'all/';
    if (poiType) {
      poi = `${poiType}/`;
    }
    wx.request({
      url: `${apiURL}/destination/place/${type}/${id}/pois/${poi}`,
      method: 'GET',
      data,
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      success(res) {
        callback('success', res);
      },
      fail(res) {
        callback('fail', res);
      },
      complete(res) {
        callback('complete', res);
      },
    });
}

 module.exports = {
  hot: hot,
  destination:destination,
  waypoints:waypoints,
  infoUser:infoUser,
  getPlaceInfo:getPlaceInfo,
  poi:poi
}














