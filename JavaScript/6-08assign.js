function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase = input[0].trim();
  var line = 1;
  for (var i = 0; i < testcase; i++) {
    var len = input[line++].trim();
    var arr = input[line++].trim().split("");
    console.log(len, arr);
    var sum = 0;
    for (var j = len; j > 0; j--) {
      sum += j;
    }
    console.log(sum);
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`2
  5
  abcde
  3
  aaa`);
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
