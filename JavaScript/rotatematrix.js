function runProgram(input) {
  var input = input.trim().split("\n");
  var testcases = +input[0];
  var line = 1;
  var matrix = [];
  for (var i = 0; i < testcases; i++) {
    var array = input[line++].trim().split(" ").map(Number);
    matrix.push(array);
  }
  rotatematrix(matrix, testcases);
}

   function rotatematrix(mat,N)
{
    let row = 0, col = 0;
    let prev, curr;
    while (row < N && col < N)
    {
        if (row + 1 == N || col + 1 == N)
            break;
        // Store the first element of next
        // row, this element will replace
        // first element of current row
        prev = mat[row + 1][col];
        // Move elements of first row
        // from the remaining rows
        for(let i = col; i < N; i++)
        { curr = mat[row][i];
            mat[row][i] = prev;
            prev = curr;
        } row++;
        // Move elements of last column
        // from the remaining columns
        for(let i = row; i < N; i++)
        {
            curr = mat[i][N - 1];
            mat[i][N - 1] = prev;
            prev = curr;
        }
        N--;
   
        // Move elements of last row
        // from the remaining rows
        if (row < N)
        {
            for(let i = N - 1; i >= col; i--)
            {
                curr = mat[N - 1][i];
                mat[N - 1][i] = prev;
                prev = curr;
            }
        }
        N--;
   
        // Move elements of first column
        // from the remaining rows
        if (col < N)
        {
            for(let i = N - 1; i >= row; i--)
            {
                curr = mat[i][col];
                mat[i][col] = prev;
                prev = curr;
            }
        }
        col++;
        console.log(...mat.join(" "));
    }
    }

if (process.env.USERNAME === "user") {
  runProgram(`4
    1 2 3 4
    1 2 3 4
    1 2 3 4
    1 2 3 4`);
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
