var app = getApp();

Page({
  data: {
    cash: 0,
    roomNo: 0
  },
  onLoad: function () {
      this.setData({
          cash: app.getMyCash(),
          roomNo: app.getRoomNo()
      });
  },
});
