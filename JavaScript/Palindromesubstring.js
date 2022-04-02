function runProgram(input) {
  var input = input.split("");
  var palindrome = input.reverse();
  var count = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i] == palindrome[i]) {
      count++;
    } else {
      count = 0;
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "user") {
  runProgram(`thisracecarisgood`);
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
