function runProgram(input) {
  var n = +input;
  if (n > 0) {
    var a = Math.floor(n / 5);
    var b = n % 5;
    if (b == 0) console.log(a);
    else console.log(a + 1);
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`5`);
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
