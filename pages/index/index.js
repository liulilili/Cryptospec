var websocket = require('../../websocket/connect.js');
var net = require('../../common/net.js');
var msgReceived = require('../../websocket/msgHandler.js');

var app = getApp();

Page({
    data: {
        coin: 0, // 总共有多少金子
        scashcore: 0,     // 我的得分
        roomNo: 0     // 房间号
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
    },

    reportMyChoice: function() {
        var roomNo = app.getRoomNo();
        websocket.send({
            type: 'dig',
            no: roomNo
        });
    },
});
