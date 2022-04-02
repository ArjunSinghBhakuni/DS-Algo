function runProgram(input) {
  input = input.trim().split("\n");
  var testcase = input[0].trim();
  var line = 1;
  for (let i = 0; i < testcase; i++) {
    var [a, b, c, k] = input[line++].trim().split(" ").map(Number);
    optimiseCurve(a, b, c, k);
  }
}
function optimiseCurve(a, b, c, k) {
  let lo = 0;
  let hi = Number.MAX_VALUE;
  let ans = -1;
  while (lo <= hi) {
    if (c > k) return console.log(-1);
    let mid = lo + Math.floor((hi - lo) / 2);
    let value = a * mid * mid + b * mid + c;
    if (value > k) {
      ans = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  console.log(ans);
}

if (process.env.USERNAME === "user") {
  runProgram(`1
  3 2 4 15`);
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
