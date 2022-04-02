function runProgram(input) {
  var input = input.split("\n");
  const testcase = input[0].trim();
  var line = 1;
  for (let i = 0; i < testcase; i++) {
    let len = input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);
    let sum = 0;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] < arr[i + 1] && arr[i + 1] % 2 == 0) {
        sum += arr[i];
      }
    }
    console.log(sum);
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`1
  5
  2 3 5 8 3`);
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
