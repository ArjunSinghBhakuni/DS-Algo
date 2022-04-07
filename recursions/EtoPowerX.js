function runProgram(input) {
  var input = input.trim().split(" ").map(Number);
  var [x, r] = input;
  console.log(rec(x, r).toFixed(4));
}

var power = 1;
var factorial = 1;

function rec(x, r) {
  if (r == 0) {
    return 1;
  }
  power = power * x;
  factorial = factorial * r;
  return power / factorial + rec(x, r - 1);
}
if (process.env.USERNAME === "user") {
  runProgram(`4 2`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
