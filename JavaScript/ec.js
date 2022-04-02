function runProgram(input) {
  var num = input.split("\n");
  var testcase = num[0];
  for (var i = 0; i < testcase; i++) {
    var line = 1;
    var arr = num[line++];
    for (var i = 0; i < testcase; i++) {
      for (var j = i; j >= 0; j--) {
        var word = "";
        for (var k = i; k <= j; k++) {
          if (arr[k] == 0) {
            word += arr[k];
          }
          // console.log(word)
        }
      }
      console.log(word.length);
    }
  }
}
// }

if (process.env.USERNAME === "user") {
  runProgram("6\n110101");
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
