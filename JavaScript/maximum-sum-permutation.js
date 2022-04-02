function runProgram(input) {
  input = input.trim("").split("\n");
  var n = +input[0];
  var arr = input[1]
    .trim("")
    .split(" ")
    .sort((a, b) => a - b)
    .map(Number);
  var sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i] * i;
  }
  console.log(sum);
}

if (process.env.USERNAME === "user") {
  runProgram(`4
  2 5 1 6`);
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
