function runProgram(input) {
  var input = input.trim().split("\n");
  var N = +input[0].trim();
  var arr = input[1].trim().split(" ").map(Number);
  var Q = +input[2].trim();
  var line = 3;
  for (let i = 0; i < Q; i++) {
    var [num, target] = input[line++].trim().split(" ").map(Number);
    var count = 0;
    if (num == 0) {
      for (let x of arr) {
        if (x >= target) {
          count++;
        }
      }
    } else {
      for (let x of arr) {
        if (x > target) {
          count++;
        }
      }
    }
    console.log(count);
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`4
    1 2 3 4
    3
    0 5
    1 3
    0 3`);
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
