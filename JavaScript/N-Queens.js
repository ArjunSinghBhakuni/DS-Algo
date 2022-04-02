var count = 0;
function nQueen(board, row) {
  if (row == board.length) {
    // console.log(board);
    count++;
  }
  for (let col = 0; col < board.length; col++) {
    if (check(board, row, col)) {
      board[row][col] = "Q";
      nQueen(board, row + 1);
      board[row][col] = 0;
    }
  }
}
function check(board, row, col) {
  //row wise check
  for (let i = 0; i < board.length; i++) {
    if (board[i][col] == "Q") {
      return false;
    }
  }
  //column wise;
  for (let i = 0; i < board.length; i++) {
    if (board[row][i] == "Q") {
      return false;
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (row - col == i - j) {
        if (board[i][j] == "Q") {
          return false;
        }
      }
      if (row + col == i + j) {
        if (board[i][j] == "Q") {
          return false;
        }
      }
    }
  }
  return true;
}
function runProgram(input) {
  let N = +input.trim();
  let board = new Array(N).fill(0).map(() => new Array(N).fill(0));
  // console.log(board)
  nQueen(board, 0);
  console.log(count);
}
if (process.env.USERNAME === "user") {
  runProgram(`4`);
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
