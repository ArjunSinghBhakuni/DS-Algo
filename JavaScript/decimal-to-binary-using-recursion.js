function runProgram(input) {
  var input = input.split("\n");
  var testcase = input[0].trim();
  var line = 1;
  for (let a = 0; a < testcase; a++) {
    var num = input[line++].trim();
   console.log(binary(num))
  }
}

function binary(decimal_number) {
  if (decimal_number == 0) return 0;
  else return (decimal_number % 2) + 10 * binary(parseInt(decimal_number / 2));
}

if (process.env.USERNAME === "user") {
  runProgram(`2
4
15`);
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
