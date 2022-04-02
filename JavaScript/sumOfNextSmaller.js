function runProgram(input) {
  var input = input.split("\n");
  var testcase = input[0].trim();
  var line = 1;
  for (let i = 0; i < testcase; i++) {
    let num = input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);
    let sum = 0;
    for (let i = 0; i < num; i++) {
      for (let j = i + 1; j < num; j++) {
        if (arr[i] > arr[j]) {
          sum += arr[j];
          break;
        }
      }
    }
    console.log(sum);
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`2
    4
    4 3 1 2
    4
    1 2 3 4`);
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
