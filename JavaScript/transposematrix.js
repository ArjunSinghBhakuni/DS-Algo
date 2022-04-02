function runProgram(input) {
  var input = input.trim().split("\n");
  var matrix = [];
  for (var i = 0; i < input.length; i++) {
    matrix.push(input[i].trim().split(" ").map(Number));
  }
  for (var j = 0; j < matrix[0].length; j++) {
    var transpose = [];
    for (var i = 0; i < matrix.length; i++) {
      transpose.push(matrix[i][j]);
    }
    console.log(...transpose);
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`1 2 3
    4 5 6
    7 8 9
    1 2 3`);
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
