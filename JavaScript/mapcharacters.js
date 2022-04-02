function runProgram(input) {
  var input = input.split("\n");
  var start = input[0].trim();
  var smallerCase = "abcdefghijklmnopqstuvwxyz";
  var smallerCase = smallerCase.trim().split("");
  var len = input[1].trim();
  var arr = input[2].trim().split("");
  var sum = start * len;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < smallerCase.length; j++) {
      if (arr[i] == smallerCase[j]) {
        sum += j;
      }
    }
  }
  console.log(sum);
}

if (process.env.USERNAME === "user") {
  runProgram(`30
    5
    abcza`);
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
