function runProgram(input) {
  var input = +input;
  var line = 1;
  var count = 0;
  var count = count + line;
  while (count <= input) {
    line++;
  }
  console.log(count);
}

if (process.env.USERNAME === "user") {
  runProgram(`25`);
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
