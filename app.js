
App({
  globalData:{
    mimeMap: null, 
    roomNo: 0,
    cash:0,
    coin:20,
    coinNum:20,
  },
  /*updateMap: function(mimeMap) {
    this.globalData.mimeMap = mimeMap;
  },
  getMap: function() {
    return this.globalData.mimeMap;
  },*/

  setCoin: function(coin) {
    this.globalData.coin = coin;
  },
  changeCoin: function() {
    if(this.globalData.coin > 0) {
      this.globalData.coin -= coinNum;
    }else if(this.globalData.coin < 0){
      this.globalData.coin += coinNum;
    }
  },
  getCoin: function() {
    return this.globalData.coin
  },

  getRoomNo: function() {
    return this.globalData.roomNo
  },
  setRoomNo: function(no) {
    this.globalData.roomNo = no;
  },

  setMyCash: function(coin) {
    this.globalData.cash = cash;
  },
  getMyCash: function() {
    return this.globalData.cash;
  }
})