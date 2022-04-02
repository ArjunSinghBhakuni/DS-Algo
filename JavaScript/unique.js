function runProgram(input) {
  var input = input.trim().split("");
  var count = 0;
  for (var i = 0; i < input.length; i++) {
    for (var j = i + 1; j < input.length; j++) {
      if (input[i] == input[j]) {
        count++;
      }
    }
  }
  if (count == 0) console.log("Unique");
  else console.log("No");
}

if (process.env.USERNAME === "user") {
  runProgram(`masai`);
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
