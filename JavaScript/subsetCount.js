function runProgram(input) {
  var input = input.trim().split("\n");
  var [testcase, N] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  var count = 0;
  for (var i = 0; i < testcase; i++) {
    for (var j = i; j < testcase; j++) {
      var sum = 0;
      var sub = [];
      for (var k = i; k <= j; k++) {
        sub.push(arr[k]);
      }
      for (var m = 0; m < sub.length; m++) {
        sum += sub[m];
      }
      if (sum == N) {
        count++;
      }
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "user") {
  runProgram(`4 10
    1 2 3 4`);
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
