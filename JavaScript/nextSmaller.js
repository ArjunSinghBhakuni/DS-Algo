function runProgram(input) {
  var input = input.split("\n");
  let len = input[0].trim();
  let arr = input[1].trim().split(" ").map(Number);
  let smaller = [];
  for (let i = 1; i < len; i++) {
    if (i == 1 && arr[i] <= arr[i - 1]) {
      smaller.push(-1);
    }
    if (arr[i - 1] < arr[i]) {
      smaller.push(arr[i - 1]);
    }
    if (arr[i - 1] == arr[i]) {
      smaller.push(arr[i - 2]);
    }
    if (arr[i] < arr[i - 1]) {
      smaller.push(-1);
    }
  }
  console.log(...smaller);
}

if (process.env.USERNAME === "user") {
  runProgram(`8
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
