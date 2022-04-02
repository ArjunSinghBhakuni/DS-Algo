function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase = input[0].trim();
  var arr = [];
  var line = 1;
  for (var i = 0; i < testcase; i++) {
    var [op, num] = input[line++].trim().split(" ");
    arr.push(num);
  }
  console.log(arr);
}

if (process.env.USERNAME === "user") {
  runProgram(`6
    1 15
    1 20
    2
    3
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
