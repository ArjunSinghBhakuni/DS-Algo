function factorialProduct(n) {
  if (n === 0 || n == 1) return 0;
  else return Math.log(n) + factorialProduct(n - 1);
}

function runProgram(input) {
  console.log(factorialProduct(input).toFixed(4));
}

if (process.env.USERNAME === "user") {
  runProgram(3);
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
