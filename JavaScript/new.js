function runProgram(input) {
  var num = input.split("\n");
  var testCases = num[0];
  var line = 1;
  for (var i = 0; i < testCases; i++) {
    var size = num[line++];
    var arr = num[line++].split(" ").map(Number);
    var count = 0;
    for (var j = 0; j < size; j++) {
      if (arr[j] > arr[j - 1]) {
        count++;
      }
    }
    if (count == 0) console.log(1);
    else console.log(count);
  }
}

if (process.env.USERNAME === "user") {
  runProgram("2\n2\n1 1\n6\n1 2 1 2 3 1");
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
