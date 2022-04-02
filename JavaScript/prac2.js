function runProgram(input) {
  var arr = input.split("");
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      for (var k = i; k <= j; k++) {
        if (arr[k] == arr[j]) {
          count++;
        }
      }
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "user") {
  runProgram("abcab");
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
