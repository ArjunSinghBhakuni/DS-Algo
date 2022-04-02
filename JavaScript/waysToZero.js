function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase = input[0].trim();
  var num = input[1].trim();
  console.log(waysToZero(num, 0));
}

function waysToZero(num, x) {
  if (num == x) return 1;
  if (num < x) return 0;
  return waysToZero(num, x + 4) + waysToZero(num, x + 8);
}

if (process.env.USERNAME === "user") {
  runProgram(`1
  4`);
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
