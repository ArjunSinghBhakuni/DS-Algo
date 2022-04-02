function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase = input[0].trim();
  var arr = input[1].trim().split(" ").map(Number);
  let even = 0;
  let odd = 0;
  for (let i = 0; i < testcase; i++) {
    if (arr[i] % 2 == 0) even += arr[i];
    else odd += arr[i];
  }
  console.log(2 * even + 3 * odd);
}

if (process.env.USERNAME === "hello") {
  runProgram(`5
    1 2 3 4 5`);
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
