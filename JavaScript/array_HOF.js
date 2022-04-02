// var num = [2, 4, 5, 3, 6, 8];

// function even(el) {
//   if (el % 2 == 0) {
//     return el;
//   }
// }
// console.log(num.filter(even));

// var word = ["Apple", "Windows", "UBUNTU"];
// var hyp = word.forEach(function (a, b) {
//   return "a" + "-" + "b";
// });
// console.log(hyp);
// var snake = word.forEach(function (a) {
//   return a + "_";
// });
// console.log(snake);

// var len = word.forEach(function (a) {
//   return a.length;
// });
// console.log(len);


function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();