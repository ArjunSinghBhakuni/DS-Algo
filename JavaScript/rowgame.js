function runProgram(input) {
  var input = input.trim().split("\n");
  var testcases = input[0].trim();
  var line = 1;
  for (var i = 0; i < testcases; i++) {
    var size = input[line++].trim().split(" ").map(Number);
    var row = size[0];
    var col = size[1];
    var matrix = [];
    for (var j = 0; j < row; j++) {
      var array = input[line++].trim().split(" ").map(Number);
      matrix.push(array);
    }
    var count = 0;
    for (var k = 0; k < row; k++) {
      for (var l = k; l < col; l++) {
        console.log(matrix[k][l]);
      }
    }
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`2
    3 3
    1 2 1 
    1 3 1
    1 2 1
    3 3
    1 2 3
    1 1 3
    1 2 3`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/);
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
