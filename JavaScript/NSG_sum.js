function runProgram(input) {
  var input = input.split("\n");
  var testcase = input[0].trim();
  var line = 1;
  for (let a = 0; a < testcase; a++) {
    var size = input[line++].trim();
    var arr = input[line++].trim().split(" ").map(Number);
    let sum = -2;
    for (let i = 0; i < size - 2; i++) {
      for (let j = i + 1; j < size - 1; j++) {
        if (arr[i] < arr[j]) {
          for (let k = j + 1; k < size; k++) {
            while (arr[k] < arr[j]) {
              sum += arr[k];
            }
          }
        } else {
          sum += -1;
        }
      }
    }
    console.log(sum);
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`1
  6
  5 1 6 2 5 1`);
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
