johnScore = (89 + 120 + 103) / 3;
mikeScore = (116 + 94 + 123) / 3;

if(mikeScore > johnScore) {
  console.log( "Mike's average (" + mikeScore + ") is greater than John's average (" + johnScore + ")");
} else if (johnScore > mikeScore) {
  console.log( "John's average (" + johnScore + ") is greater than Mike's average (" + mikeScore + ")");
} else {
  console.log("There is a tie");
}

maryScore = (94 + 134 + 105) / 3;

if(mikeScore > johnScore && mikeScore > maryScore) {
  console.log( "Mike's average (" + mikeScore + ") is greater than John's average (" + johnScore + ") and Mary's average (" + maryScore + ")");
} else if (johnScore > mikeScore && johnScore > maryScore) {
  console.log( "John's average (" + johnScore + ") is greater than Mike's average (" + mikeScore + ") and Mary's average (" + maryScore + ")");
} else if (maryScore > mikeScore && maryScore > johnScore) {
  console.log( "Mary's average (" + maryScore + ") is greater than Mike's average (" + mikeScore + ") and John's average (" + johnScore + ")");
} else {
  console.log("There is a tie");
}