function runProgram(input) {
  var input = input.trim().split(" ").map(Number);
  for (var i = 0; i < input.length; i++) {
    for (var j = i; j < input.length; j++) {
      var subArr = [];
      for (var k = i; k <= j; k++) {
        subArr.push(input[k]);
      }
      var sum = 0;
      for (var a = 0; a < subArr.length; a++) {
        sum += subArr[a];
      }
      if (sum == 0) console.log(i, j);
    }
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`6 3 -1 -3 4 -2 2 4 6`);
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
