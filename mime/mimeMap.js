
function sell() {

  var time = 10,//游戏次数
      money = 0,//变现金额
      count = 0;

  while (time > 0) {
    var randList = new Array();
    randList[time] = Math.random();
    time --;
  }//生成十个0-1随机数
  while(count<=10){
    if (randList[count] <= 0.6){
      coins = 1.2 * coins;
    }else if (0.6< randList[count] <=0.8){
      coins = 1 * coins;
    }else{
      coins = 0.8 * coins;
    }//市场价格对应的变化


    count++;


  }
}