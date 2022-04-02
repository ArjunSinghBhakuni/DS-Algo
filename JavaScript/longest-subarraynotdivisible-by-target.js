function runProgram(input) {
  var input = input.trim().split("\n");
  var [len, k] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  var count = 0;
  var longestSub = [];
  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      for (var n = i; n <= j; n++) {
        longestSub.push(arr[n]);
      }
      var sum = 0;
      for (var a = 0; a < longestSub.length; a++) {
        sum += longestSub[a];
      }
    }
  }
  if (sum != 0) {
    count++;
  }
  console.log(count);
}

if (process.env.USERNAME === "user") {
  runProgram(`4 3
    2 3 4 6`);
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
