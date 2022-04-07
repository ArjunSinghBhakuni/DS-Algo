function runProgram(input) {
  var input = input.trim("").split(" ").map(Number);
  var [x, r] = input;
  console.log(power(x, r));
}

function power(x, r) {
  if (r == 0) return 1;
  else return x * power(x, r - 1);
}

if (process.env.USERNAME === "user") {
  runProgram(`2 4`);
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
