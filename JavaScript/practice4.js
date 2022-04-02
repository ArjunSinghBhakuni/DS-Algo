function runProgram(input) {
  var input = input.split("\n");
  var testcase = input[0];
  var line = 1;
  for (var i = 0; i < testcase; i++) {
    var size = input[line++];
    var name = input[line++].trim().split("");
    for (var j = 0; j < size; j++) {
      var sub = "";
      for (var k = j; k < size; k++) {
        sub += name[k];
      }
      console.log(sub);
    }
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`1
  4 
  aman`);
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
