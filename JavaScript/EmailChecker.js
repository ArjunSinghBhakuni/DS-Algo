function runProgram(input) {
  var n = input.length;
  if (input[0] != "." && input[0] != "@" && input[n - 4] == ".")
    console.log("Yes");
  else console.log("No");
}

if (process.env.USERNAME === "hello") {
  runProgram(`mysite@masaischool.com`);
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
