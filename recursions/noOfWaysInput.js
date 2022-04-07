function noOfWays(input) {
  if (input < 0) return 0;
  if (input == 0) return 1;
  return noOfWays(input - 1) + noOfWays(input - 2) + noOfWays(input - 3);
}

function runProgram(input) {
  console.log(noOfWays(input));
}
if (process.env.USERNAME === "user") {
  runProgram(4);
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
