function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase = input[0];
  var line = 1;
  for (var i = 0; i < testcase; i++) {
    var size = +input[line++];
    var arr = input[line++].trim().split(" ").map(Number);
    var sum = 0;
    for (var j = 0; j < size; j++) {
      for (var k = 0; k < arr[j]; k++) {
        sum = sum + arr[j][k];
      }
    }
    console.log(sum);
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`2
  5
  12 14 16 17 29
  6
  1 2 3 4 5 51`);
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
