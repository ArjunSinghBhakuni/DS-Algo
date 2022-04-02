function runProgram(input) {
  var word = input.split("");
  var num = word.length;
  for (var i = 0; i < num; i++) {
    for (var j = 0; j < num; j++) {
      for (var k = i; k <= j; k++) {
        console.log("\n");
        for (var l = 0; l < word[k].length; l++) {
          for (var m = word[k].length - 1; m >= 0; m--) {
            console.log(word[l].length);
          }
        }
      }
    }
  }
}

if (process.env.USERNAME === "user") {
  runProgram("thisracecarisgood");
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
