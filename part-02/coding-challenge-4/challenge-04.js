var mark = {
  fullName: 'Mark',
  mass: 95,
  height: 1.83,
  bmi: function(){
    return this.mass / (this.height * this.height);
  }
};

var john = {
  fullName: 'John',
  mass: 95,
  height: 1.83,
  bmi: function(){
    return this.mass / (this.height * this.height);
  }
};

function logger(winner, loser){
  console.log( winner.fullName + " (" + winner.bmi() + ") has a BMI higher than " + loser.fullName + " (" + loser.bmi() + ")" );
}

if (john.bmi() > mark.bmi()) {
  logger(john, mark);
} else if (john.bmi() < mark.bmi()) {
  logger(mark, john);
} else {
  console.log("They have the same BMI: " + john.bmi() + " " + mark.bmi());
}