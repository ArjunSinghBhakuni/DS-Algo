function runProgram(input) {
  var input = input.trim().split("");
  var start = 0;
  var end = 1;
  for (var i = 0; i < input.length; i++) {
    if (input[start] == input[end]) {
      input.slice(start, end);
      end++;
    }
    start++;
  }
  console.log(input);
}

if (process.env.USERNAME === "user") {
  runProgram(`aaaabbbbbcccccdddd`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/);
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
