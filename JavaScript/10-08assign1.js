function runProgram(input) {
  var input = input.split("\n");
  var len1 = input[0].trim().split(" ").map(Number);
  var [row,col] = len1;
  for (var i = 1; i <= row; i++) {
    var matrix = input[i].trim().split(" ");
    for (var j = 0; j < row; j++) {
      for (var k = 0; k < col; k++) {
        console.log(matrix[j][k]);
      }   
    }
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`3 4
  1 2 3 4
  0 5 6 1
  9 3 0 8
  2 2
  8 8
  8 8`);
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
