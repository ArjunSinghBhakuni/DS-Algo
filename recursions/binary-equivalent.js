function binary(n) {
  if (n > 0) return binary(Math.floor(n / 2)) + (n % 2);
  else return "";
}

function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase = input[0].trim();
  var line = 1;
  for (let i = 0; i < testcase; i++) {
    let num = +input[line++];
    console.log(binary(num));
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`2
  15
  78255`);
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
