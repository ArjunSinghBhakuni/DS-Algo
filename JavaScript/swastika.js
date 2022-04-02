function runProgram(input) {
  input = input.trim().split("\n");
  var [row, col] = input[0].split(" ").map(Number);
  var line = 1;
  var mat = [];
  for (var i = 0; i < row; i++) {
    mat.push(input[line++].trim().split(" ").map(Number));
  }
  differenceOfsum(mat, row, col);
}

function differenceOfsum(matrix, n, m) {
  var sum1 = 0;
  var sum2 = 0;
  for (i = 0; i <= Math.floor(n / 2); i++) {
    sum1 += matrix[i][0];
  }
  for (i = 1; i < m; i++) {
    sum1 += matrix[Math.floor(n / 2)][i];
  }
  for (i = Math.floor(n / 2) + 1; i < n; i++) {
    sum1 += matrix[i][m - 1];
  }
  for (i = 0; i <= Math.floor(m / 2); i++) {
    sum2 += matrix[n - 1][i];
  }
  for (i = n - 2; i >= 0; i--) {
    sum2 += matrix[i][Math.floor(m / 2)];
  }
  for (i = Math.floor(m / 2) + 1; i < m; i++) {
    sum2 += matrix[0][i];
  }
  console.log(sum2 - sum1);
}

if (process.env.USERNAME === "user") {
  runProgram(`3 5
    1 2 3 4 5
    6 7 8 9 10
    11 12 13 14 15
    `);
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
