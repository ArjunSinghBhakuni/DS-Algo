function runProgram(input) {
  var num = input.split("\n");
  var size = num[0];
  var str = num[1];

  for (var i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
      for (var k = i; k <= j; k++) {
        console.log();
        if (arr[i] == "a" && arr[j] == "a") {
          if (str[k] == "a") console.log(size - k);
        }
      }
    }
  }
}

if (process.env.USERNAME === "user") {
  runProgram("7\nabcdavn ");
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
