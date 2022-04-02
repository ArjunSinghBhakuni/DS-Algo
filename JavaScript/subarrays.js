function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase = input[0].trim();
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
      // console.log(sub);
      // console.log(sum);
      if (sum % 2 == 1) {
        count++;
      }
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "user") {
  runProgram(`5
  1 2 3 7 9`);
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
