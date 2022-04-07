function boxes(input) {
  if (input < 0) return 0;
  if (input == 0) return 1;
  return boxes(input - 1) + boxes(input - 3) + boxes(input - 5);
}

function runProgram(input) {
  console.log(boxes(input));
}
if (process.env.USERNAME === "user") {
  runProgram(7);
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
