function runProgram(input) {
  var input = input.split("\n");
  var testcase = input[0].trim();
  var line = 1;
  for (let a = 0; a < testcase; a++) {
    var size = +input[line++];
    var arr = input[line++].trim().split(" ").map(Number);
    let great = [];
    for (let i = 0; i < size; i++) {
      let next = -1;
        for (let j = i + 1; j < size; j++) {
          if (arr[i] < arr[j]) {
            next = arr[j];
            break;
          }
        }
        great.push(next);
    }
    console.log(...great);
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`1
  5
  5 4 1 3 2`);
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
