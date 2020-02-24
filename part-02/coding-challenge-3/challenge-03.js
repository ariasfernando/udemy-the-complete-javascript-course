var bills = [124, 148, 268],
    tips = [],
    total = [];

function tipCalculation(bill) {
  let percentage;
  if (bill < 50) {
    percentage = 20;
  } else if (bill > 50 && bill <= 200) {
    percentage = 15;
  } else {
    percentage = 10;
  }
  return bill * percentage / 100;
}

tips = [
  tipCalculation(bills[0]),
  tipCalculation(bills[1]),
  tipCalculation(bills[2])
];

total = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2]
]

console.log(bills);
console.log(tips);
console.log(total);