function runProgram(input) {
  var input = input.trim().split("\n");
  var [row,col] = input[0].trim().split(" ").map(Number);
  var output = [];
  var line = 1;
  for (var k = 0; k < row; k++) {
    var arr = input[line++].trim().split(" ").map(Number);
    output.push(arr);
  }
  // console.log(output,row,col)
  for (var j = 0; j < col; j++) {
    var out1 = [];
    for (var i = row - 1; i >= 0; i--) {
      out1.push(output[i][j]);
    }
    console.log(out1.join(" "));
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`4 3
  1 8 9
  2 7 10
  3 6 11
  4 5 12`);
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
