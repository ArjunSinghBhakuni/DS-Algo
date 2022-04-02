function runProgram(input) {
  var num = +input.split("\n");
  var testCases = num[0];
  for (var i = 0; i < testCases; i++) {
    var line = 1;
    var size = num[line++];
    var arr = num[line++].split(" ").map(Number);
  }
}

if (process.env.USERNAME === "user") {
  runProgram("2\n6\n1 3 3 4 5 6\n5\n1 2 3 4 5");
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
