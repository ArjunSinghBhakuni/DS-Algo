function runProgram(input) {
  var input = input.split("\n");
  var testcase = input[0].trim();
  var line = 1;
  for (let i = 0; i < testcase; i++) {
    let len = input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);
    const num = [];
    for (let i = 0; i < len; i++) {
      let count = 1;
      for (let j = i; j >= 0; j--) {
        if (arr[j] < arr[i]) {
          count++;
        }
        if (arr[j] > arr[i]) {
          break;
        }
      }
      num.push(count);
    }
    console.log(...num);
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`2
    7
    100 80 60 70 60 75 85
    5
    3 5 0 9 8`);
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
