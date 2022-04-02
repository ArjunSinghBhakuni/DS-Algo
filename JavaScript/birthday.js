function runProgram(input) {
  var [k, n] = input.trim().split(" ");
  for (var i = 0; i < k; i++) {
    for (var j = i; j < k; j++) {
      for (var k = i; k <= j; k++) {
        console.log(k);
      }
    }
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`4 2`);
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
