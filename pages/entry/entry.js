var net = require('../../common/net.js');

var app = getApp();

Page({
  data: {
    roomNo: 0
  },
  startGame: function() {
      var roomNo = this.data.roomNo;
      if(!roomNo) {
          console.error('请填写房间号');
          return;
      }
      app.setRoomNo(roomNo);
      wx.redirectTo({
          url: '../index/index'
      })
      wx.drawCanvas({
        canvasId: 'canvas',
        actions: actions
      });
  },
  roomNoChanged: function(event) {
      this.setData({
          roomNo: event.detail.value
      });
  },
});
