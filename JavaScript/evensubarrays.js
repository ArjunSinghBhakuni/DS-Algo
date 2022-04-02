function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase = input[0].trim();
  var line = 1;
  for (var i = 0; i < testcase; i++) {
    var len = input[line++].trim();
    var arr = input[line++].trim().split(" ").map(Number);
    var count = 0;
    var subarray = [];
    for (var i = 0; i < len; i++) {
      for (var j = i; j < len; j++) {
        for (var k = i; k <= j; k++) {
          if (arr[k] % 2 == 0) {
            subarray.push(arr[k]);
          }
        }
      }
    }
    console.log(count);
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`1
        5
        1 2 3 7 5`);
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
