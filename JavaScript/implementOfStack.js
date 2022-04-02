function runProgram(input) {
  var input = input.trim().split("\n");
  var testcases = +input[0];
  var line = 1;
  var queue = [];
  for (let i = 0; i < testcases; i++) {
    var num = input[line++].trim().split(" ").map(Number);
    if (num[0] == 0) {
      queue.push(num[1]);
    }
    if (num[0] == 1) {
      console.log(queue[queue.length - 1]);
    }
    if (num[0] == 2) {
      queue.pop(queue[queue.length - 1]);
    }
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`6
  0 1
  0 2
  0 3
  1 
  2
  1`);
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
