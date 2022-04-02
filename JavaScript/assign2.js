function runProgram(input) {
  var N = +input.trim();
  var b = 1;
  var n = N;
  for (var i = 1; i <= N; i++) {
    var num = [];
    for (var j = b; j <= n; j++) {
      num.push(j);
    }
    b = b + N;
    n = n + N;
    console.log(num.join(" "));
  }
}
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 13 14 15 16
if (process.env.USERNAME === "hello") {
  runProgram("5");
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
