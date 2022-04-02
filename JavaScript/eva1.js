function runProgram(input) {
  var input = input.trim().split("\n").map(Number);
  var testcase = input[0];
  var line = 1;
  for (var i = 0; i < testcase; i++) {
    var num = +input[line++];
    var count = 0;
    for (var j = 0; j <= num; j++) {}
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`2
  2
  3`);
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
