function runProgram(input) {
  var input = input.trim().split("\n");
  var testcases = +input[0];
  var line = 1;
  for (var i = 0; i < testcases; i++) {
    let total = 0;
    var len = +input[line++];
    var arr = input[line++].trim().split(" ").map(Number);
    for (let i = 1; i < len; i++) {
      total += Math.abs(arr[i] - arr[i - 1]);
    }
    console.log(total);
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`2
    3
    1 5 2
    5
    3 5 6 1 8`);
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
