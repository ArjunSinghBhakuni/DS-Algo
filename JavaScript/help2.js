function runProgram(input) {
  var arr = input.split("");
  var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < num.length; j++) {
      if (arr[i] == num[j]) {
        var word = [];
        console.log(word.push(arr[i - 1]));
      }
      console.log(word);
    }
  }
}

if (process.env.USERNAME === "user") {
  runProgram("a3b2");
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
