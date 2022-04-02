function runProgram(input) {
  var input = input.split("\n");
  var testcase = input[0];
  var line = 1;
  for (var i = 0; i < testcase; i++) {
    var num = input[line++];
    if (num > 10) {
      var n = num / 10;
      num = num + n;
    }
    console.log(num);
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`6
  1
  10
  19
  9876
  12345
  1000000000`);
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
