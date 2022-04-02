function runProgram(input) {
  var input = input.trim().split("\n");
  var testcases = input[0];
  var line = 1;
  for (var i = 0; i < testcases; i++) {
    var len = +input[line++];
    var word = input[line++].trim().split("");
    console.log(len, word);
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`3
  1
  a
  3
  aab
  4
  abbb`);
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
