function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase = +input[0];
  var line = 1;
  for (var i = 0; i < testcase; i++) {
    var len = +input[line++];
    var arr = input[line++].trim().split("");
    var x = 0;
    var y = 0;
    for (var j = 0; j < len; j++) {
      if (arr[j] == "R") {
        x++;
      }
      if (arr[j] == "U") {
        y++;
      }
      if (arr[j] == "L") {
        x--;
      }
      if (arr[j] == "D") {
        y--;
      }
    }
    if (x == 0 && y == 0) console.log("Yes");
    else console.log("No");
  }
}

if (process.env.USERNAME === "hello") {
  runProgram(`2
  5
  RLRUD
  4
  LRUD`);
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
