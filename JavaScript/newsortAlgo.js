function runProgram(input) {
  var num = input.split("\n");
  var [testCases, k] = num[0].trim().split(" ").map(Number);
  var arr = num[1].trim().split(" ").map(Number);
  for (var j = 0; j < testCases; j++) {
    for (var i = 0; i < testCases - j - 1; i++) {
      if (arr[i] % k > arr[i + 1] % k) {
        temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  console.log(...arr);
}

if (process.env.USERNAME === "user") {
  runProgram(`5 6
    12 18 17 65 46`);
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
