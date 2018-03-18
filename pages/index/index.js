var websocket = require('../../websocket/connect.js');
var net = require('../../common/net.js');
var msgReceived = require('../../websocket/msgHandler.js');

var app = getApp();

Page({
    data: {
        leftCoins: 0,
        roomNo: 0
    },
    change_bitcoin:function(){
      wx.redirectTo({
        url: '../gameover/gameover'
      });

    },


    onLoad: function () {
        var roomNo = app.getRoomNo();
        this.setData({
            roomNo: roomNo
        });

        if (!websocket.socketOpened) {
            websocket.setReceiveCallback(msgReceived, this);
            websocket.connect();
            websocket.send({
              type: 'create'
            });
        }
        else {
            websocket.send({
              type: 'create',
              no: roomNo
            });
        }
        var that = this
        //获取系统信息  
        wx.getSystemInfo({
          success: function (res) {
            that.width = res.windowWidth
            that.height = res.windowHeight
          }
        })
    },
    
    reportMyChoice: function() {
        var roomNo = app.getRoomNo();
        websocket.send({
            type: 'sell',
            no: roomNo
        });
    },

onReady: function () {
    this.drawChange();
    // 每40ms执行一次drawClock()，人眼看来就是流畅的画面
    this.interval = setInterval(this.drawChange, 40);
  },


  // 所有的canvas属性以及Math.sin,Math.cos()等涉及角度的参数都是用弧度表示
  // 时钟
  drawChange: function () {
    const ctx = wx.createCanvasContext('change');
    var height = (this.height)/2;
    var width = (this.width)/2;
    // 把原点的位置移动到屏幕中间，及宽的一半，高的一半
    ctx.translate(width / 2, height / 2);
    ctx.beginPath();



    function drawSecondchange() {
      var t_n=1,
          a_n=2,
      t_n=5*(1+(Math.random()*2-1)*0.1);
      ctx.setLineWidth(4);
      ctx.setStrokeStyle('red');
      ctx.setLineCap('round');
      ctx.moveTo(0, t_n);
      ctx.stroke();
      //ctx.closePath();
      //ctx.restore();
    }


    function Getchange() {
      var now = new Date();
      drawSecondchange();
      ctx.draw();
    }
    Getchange();
  }
});