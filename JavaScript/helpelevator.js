function runProgram(input) {
  var input = input.trim().split("\n");
  var testcases = input[0];
  var persons = input[1].trim().split(" ").map(Number);
  for (var i = 0; i < testcases; i++) {
    if (persons[i] < 85) console.log("Enter");
    else console.log("Beep");
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`5
  24 83 89 43 91`);
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
