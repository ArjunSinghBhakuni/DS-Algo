function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase = input[0].trim();
  var line=1;
  var arr=[];
  for (var i = 0; i < testcase; i++) {
     arr.push(+input[line++]);
}
console.log(arr[1])
}

if (process.env.USERNAME === "user") {
  runProgram(`3
  2
  1
  2`);
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
