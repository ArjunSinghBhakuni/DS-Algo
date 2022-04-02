function runProgram(input) {
  var test = input.split("\n");
  var testCases = Number(test[0]);
  var arr = test[1].split(" ").map(Number);
  var oddCount = 0;
  for (var i = 0; i < testCases; i++) {
    if (arr[i] % 2 != 0) {
      oddCount++;
    } else {
      oddCount = 0;
    }
  }
  console.log(oddCount);
}

if (process.env.USERNAME === "user") {
  runProgram("12\n1 1 1 1 2 2 2 2 2 1 1 1");
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
