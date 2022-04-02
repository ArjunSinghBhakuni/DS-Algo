function runProgram(input) {
  var input = input.split("\n");
  var size = input[0];
  var line = 1;
  for (var i = 0; i < size; i++) {
    var str = input[line++].split("");
    var good = "";
    for (var j = 0; j < str.length; j++) {
      if (str[j] != str[j + 1]) {
        good += str[j];
      }
    }
    console.log(good);
  }
}

if (process.env.USERNAME === "user") {
  runProgram("3\nabb\naaab\nababa");
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
