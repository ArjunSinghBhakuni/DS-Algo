function runProgram(input) {
  input = input.trim().split("\n");
  var testcase = +input[0];
  var line = 1;
  for (var i = 0; i < testcase; i++) {
    var num = +input[line++];
    let count = 0;
    while (num != 0) {
      num = num & (num << 1);
      count++;
    }
    console.log(count)
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`4
1
0
4294967295
13`);
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
