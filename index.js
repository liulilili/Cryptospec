var websocket = require('../../websocket/connect.js');
var net = require('../../common/net.js');
var msgReceived = require('../../websocket/msgHandler.js');

var app = getApp();

Page({
    data: {
      pen:{
        lineWidth:5,
        color:'red',
        leftCoins: 0,
        roomNo: 0
      }

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
      let ctx = wx.createContext();
      ctx.setStrokeStyle('blue');
      ctx.setLineWidth(2);
      ctx.moveTo(30,30);
      ctx.lineTo(200,100);
      ctx.moveTo(200,100);
      ctx.lineTo(300,200);
      ctx.stroke();
      wx.drawCanvas({
        canvasId:'myCanvas',
        actions: ctx.getActions(),
        reserve:true
      })
        // 每40ms执行一次drawClock()，人眼看来就是流畅的画面
        //this.interval = setInterval(this.drawChange, 40);

//        if (!websocket.socketOpened) {
//            websocket.setReceiveCallback(msgReceived, this);
//            websocket.connect();
//            websocket.send({
//              type: 'create'
//            });
//        }
//        else {
//            websocket.send({
//              type: 'create',
//              no: roomNo
//            });
//        }
        var that = this
        //获取系统信息  
        wx.getSystemInfo({
          success: function (res) {
            that.width = res.windowWidth
            that.height = res.windowHeight
          }
        })
    },
    changeRed: function(e){
      this.setData({
        pen:{
          lineWidth:this.data.pen.lineWidth,
        }
      })
    },
    touchStart: function (e) {
      this.startX = e.changedTouches[0].x
      this.startY = e.changedTouches[0].y
      this.context = wx.createContext()
      this.context.setStrokeStyle(this.data.color)
      this.context.setLineWidth(this.data.pen)
      this.context.setLineCap('round') // 让线条圆润
      this.context.beginPath()

    },
    touchMove: function (e) {
      console.log('touchMove');
      var startX1 = e.changedTouches[0].x
      var startY1 = e.changedTouches[0].y
      this.context.moveTo(this.startX, this.startY)
      this.context.lineTo(startX1, startY1)
      this.context.stroke()

      this.startX = startX1;
      this.startY = startY1;
    },
    touchEnd:function(e){
      console.log('touchEnd');
      this.context.stroke();
      wx.drawCanvas({
        canvasId:'myCanvas',
        actions:this.context.getActions(),
        reserve:true
      })
    },
    reportMyChoice: function() {
      var roomNo = app.getRoomNo();
      websocket.send({
            type: 'sell',
            no: roomNo
      });
    },



});