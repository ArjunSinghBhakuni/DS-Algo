function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase = input[0].trim();
  var line = 1;
  for (var i = 0; i < testcase; i++) {
    var len = input[line++].trim();
    var arr = input[line++].trim().split(" ").map(Number);
    var total = 0;
    for (var j = 0; j < len; j++) {
      total += (j + 1) * arr[j];
    }
    console.log(total);
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`2
  5
  1 2 3 4 5
  2
  100 1`);
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
