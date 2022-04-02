function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase = input[0].trim();
  var line = 1;
  for (var i = 0; i < testcase; i++) {
    var [N, K] = input[line++].trim();
    var arr = input[line++].trim().split(" ").map(Number);
    var count = 0;
    for (var i = 0; i < N; i++) {
      for (var j = i; j < N; j++) {
        var subarray = [];
        for (var k = i; k <= j; k++) {
          subarray.push(arr[k]);
        }
      }
    }
  }
  for (let a = 0; a < subarray.length; a++) {
    if (subarray[a] % 2 == 0) {
      count++;
    }
    console.log(count);
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`2
    4 2
    4 3 2 1
    2 1
    2 3`);
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
