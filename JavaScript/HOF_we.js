const num = [1, 2, 3, 4, 5];

num.forEach(function (el) {
  console.log(`forEach`,el ** 2);
});

function double(el) {
  return el * 2;
}

var double_numbers = num.map(double);
console.log(double_numbers);

function isOdd(el) {
  if (el % 2 == 0) {
    return false;
  } else {
    return true;
  }
}

var odd_num = num.filter(isOdd);
console.log(odd_num);

function mul(a, b) {
  return a * b;
}

console.log(`reduce`,num.reduce(mul));

console.log(num.filter(isOdd));

function mul3(el) {
  if (el % 3 == 0) {
    return true;
  } else {
    return false;
  }
}

function cube(el) {
  return el ** 3;
}
console.log(num.filter(mul3).map(cube).reduce(isOdd));
