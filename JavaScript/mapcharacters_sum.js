function runProgram(input) {
  var input = input.split("\n");
  var N = +input[0];
  var K = +input[1];
  var str = input[2].trim();
  var obj = {};
  var strA = "abcdefghijklmnopqrstuvwxyz";
  for (i = 0; i < strA.length; i++) {
    obj[strA[i]] = i + N;
  }
  var sum = 0;
  for (i = 0; i < K; i++) {
    sum += obj[str[i]];
  }
  console.log(sum);
}

if (process.env.USERNAME === "user") {
  runProgram(`30
      5
      abcza`);
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
