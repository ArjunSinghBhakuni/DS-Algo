function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase = input[0].trim();
  let line = 1;
  for (let t = 0; t < testcase; t++) {
    let len = input[line++].trim();
    var arr = input[line++].trim().split(" ").map(Number);
    const num = [];
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        while (arr[j] < arr[i]) {
          num.push(arr[j]);
          break;
        }
      }
    }

    console.log(...num);
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`1
  8
  39 27 11 4 24 32 32 1`);
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
