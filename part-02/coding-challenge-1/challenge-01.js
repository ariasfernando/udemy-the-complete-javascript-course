var markMass = 79,
    johnMass = 95,
    markHeight = 1.74,
    johnHeight = 1.83;

var markBMI = markMass / ( markHeight * markHeight );
var johnBMI = johnMass / ( johnHeight * johnHeight );

console.log(markBMI, johnBMI);

var isMarkBMIHigher = markBMI > johnBMI;

console.log("Is Mark's BMI higher than John's? " + isMarkBMIHigher);