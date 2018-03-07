App({
startWebSocket: function () {

  var that = this;
  that.WebSocketInit()
  wx.onSocketError(function () {
  })
  wx.onSocketMessage(function (data_) {
    that.socketOperation(data_)
  })
  wx.onSocketClose(function (res) {
    that.WebSocketInit()
  })
},

//连接websocket
WebSocketInit: function() {
  wx.connectSocket({
    url: this.data.wws,
    data: {},
    method: 'GET',
    success: function (res) {
      console.log("connectSocket 成功")
    },
    fail: function (res) {
      console.log("connectSocket 失败")
    }
  })
  wx.onSocketOpen(function () {
    // callback
    var mCmd = { "cmd": "connect.Connect", "data": {} }
    wx.sendSocketMessage({
      data: JSON.stringify(mCmd),
      success: function (res) {
        console.log("sendSocketMessage 成功")
      },
      fail: function (res) {
        console.log("sendSocketMessage 失败")
      }
    });

    wx.onSocketMessage(function (data) {
      console.log("onSocketMessage ", data)
    })


  })



}
})
