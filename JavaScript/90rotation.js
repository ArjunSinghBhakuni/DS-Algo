function runProgram(input) {
  var input = input.trim().split("\n");
  var testcases = +input[0];
  var line = 1;
  for (var i = 0; i < testcases; i++) {
    var len = +input[line++];
    var matrix = [];
    for (var j = 0; j < len; j++) {
      var array = input[line++].trim().split(" ").map(Number);
      matrix.push(array);
    }
    // console.log(matrix);
    rotation(matrix, len);
  }
}

function rotation(matrix, len) {
  for (var a = 0; a < len; a++) {
    var rotation = [];
    for (var b = len - 1; b >= 0; b--) {
      rotation.push(matrix[b][a]);
    }
    console.log(rotation.join(" "));
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`2
  4
  1 2 3 4
  5 6 7 8
  1 2 3 4
  5 6 7 8
  3
  1 2 3
  4 5 6
  7 8 9`);
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
