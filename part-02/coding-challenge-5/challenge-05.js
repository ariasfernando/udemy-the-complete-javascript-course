john = {
  bills: [124, 48, 268, 189, 42],
  tips: [],
  totals: [],
  calculateTips: function(){
    let percentage = 0;
    for(var i = 0; i < this.bills.length; i++ ){
      if(this.bills[i] < 50) {
        percentage = 20;
      } else if(this.bills[i] >= 50 && this.bills[i] <= 200) {
        percentage = 15;
      } else {
        percentage = 10;
      }
      this.tips[i] = this.bills[i] * percentage / 100;
      this.totals[i] = this.bills[i] + this.tips[i];
    }
  }
}

john.calculateTips();

console.log(john.bills);
console.log(john.tips);
console.log(john.totals);

mark = {
  bills: [77, 375, 100, 45],
  tips: [],
  totals: [],
  calculateTips: function(){
    let percentage = 0;
    for(var i = 0; i < this.bills.length; i++ ){
      if(this.bills[i] < 100) {
        percentage = 20;
      } else if(this.bills[i] >= 100 && this.bills[i] <= 300) {
        percentage = 10;
      } else {
        percentage = 25;
      }
      this.tips[i] = this.bills[i] * percentage / 100;
      this.totals[i] = this.bills[i] + this.tips[i];
    }
  }
}

mark.calculateTips();

console.log(mark.bills);
console.log(mark.tips);
console.log(mark.totals);

function tipsAverage(tips) {
  let sum = 0;
  for(let i = 0; i < tips.length; i++) {
    sum += tips[i];
  }
  return sum / tips.length;
}

var johnAverage = tipsAverage(john.tips);
var markAverage = tipsAverage(mark.tips);

console.log( johnAverage, markAverage );

if( johnAverage > markAverage ) {
  console.log("John's family paid more");
} else if (johnAverage < markAverage ) {
  console.log("Mark's family paid more");
} else {  
  console.log("Both families paid the same");
}