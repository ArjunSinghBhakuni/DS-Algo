function runProgram(input) {
  input = input.trim().split("\n");
  var testcase = +input[0];
  var line = 1;
  var mat = [];
  for (var i = 0; i < testcase; i++) {
    var size = input[line++].trim();
    var mats = [];
    for (var w = 0; w < size; w++) {
      mats.push(input[line++].trim().split(" ").map(Number));
    }
    mat.push(mats);
  }
  for (var k = 0; k < mat.length; k++) {
    // 1st row
    var str = [];
    for (var j = 0; j < mat.length; j++) {
      str.push(mat[0][j]);
    }
    //  diagonal
    var i = 1;
    var j = mat.length - 2;
    while (i < mat.length && j >= 0) {
      str.push(mat[i][j]);
      i++;
      j--;
    }
    // last row
    for (var j = 1; j <= mat.length - 1; j++) {
      str.push(mat[size - 1][j]);
    }
  }
  console.log(str.join(" "));
}
if (process.env.USERNAME === "user") {
  runProgram(`4
  3
  1 2 3
  4 5 6
  7 8 9
  6
  1 2 3 4 5 6
  4 5 6 7 8 9
  7 8 9 10 11 12
  1 2 3 4 5 6
  4 5 6 7 8 9
  7 8 9 10 11 10
  2
  1 2 
  4 5 
  4
  1 2 3 4
  4 5 6 5
  7 8 9 6
  10 11 12 13`);
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
