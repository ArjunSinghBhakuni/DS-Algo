function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase = input[0].trim();
  var line = 1;
  for (let t = 0; t < testcase; t++) {
    var [N, k] = input[line++].trim().split(" ").map(Number);
    var arr = input[line++].trim().split(" ").map(Number);
    let flag = false;
    for (let i = N - 1; i >= 0; i--) {
      for (let j = 0; j < N; j++) {
        if (i != j && arr[i] - arr[j] == k) {
          flag = true;
        }
      }
    }
     flag ? console.log("Yes"):console.log("No");
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`2
  5 3
  1 2 3 4 5
  5 8
  1 2 3 4 5 `);
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
