function runProgram(input) {
  var input = input.split("\n");
  var testcase = input[0].trim();
  var line = 1;
  for (let i = 0; i < testcase; i++) {
    var [M, N] = input[line++].trim().split(" ").map(Number);
    var arrM = input[line++]
      .trim()
      .split(" ")
      .sort((a, b) => a - b)
      .map(Number);
    var arrN = input[line++]
      .trim()
      .split(" ")
      .sort((a, b) => a - b)
      .map(Number);
    var isMatched = false;
    for (let a = 0; a < M; a++) {
      for (let b = 0; b < N; b++) {
        while (arrN[b] < arrM[a]) {
          // console.log(arrN[b], arrM[a]);
          isMatched = true;
          break;
        }
      }
    }
    isMatched == true ? console.log("YES") : console.log("NO");
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`1
  3 3
  22 117 119
  96 48 127`);
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
