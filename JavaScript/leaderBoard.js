function runProgram(input) {
  var num = input.split("\n");
  var testCases = num[0].trim();
  var line = 1;
  for (var i = 0; i < testCases; i++) {
    var [name, mark] = num[line++].trim().split(" ");
    leaderBoard(name, mark);
  }
}
function leaderBoard(name, mark) {
  var rank = 1;
  var prev_mark = 0;
  var count = 0;
  for (var i = 0; i < name.length; i++) {
    if (mark == prev_mark) {
      console.log(rank, name);
    } else {
      rank += count;
      console.log(rank, name);
      count = 0;
    }
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`6
    rancho 45
    chatur 32
    raju 30
    farhan 28
    virus 32
    joy 45`);
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
