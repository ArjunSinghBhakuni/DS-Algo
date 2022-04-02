function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase = input[0].trim();
  var line = 1;
  for (var i = 0; i < testcase; i++) {
    var len = input[line++].trim();
    var arr = input[line++].trim().split(" ").map(Number);
    var count = 0;
    for (var i = 0; i < len; i++) {
      for (var j = i + 1; j < len; j++) {
        var subarray = [];
        for (var k = i; k <= j; k++) {
          subarray.push(arr[k]);
        }
        if ((subarray[0] + subarray[subarray.length - 1]) % 2 != 0) {
          count++;
        }
      }
    }
    console.log(count);
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`1
        5
        1 2 3 4 5`);
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
