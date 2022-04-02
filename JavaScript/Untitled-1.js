function runProgram(input) {
  var num = input.split("\n");
  var size = num[0];
  var arr = num[1].split(" ").map(Number);
  var arrk = num[2];
  var lar = [];
  var lineSize = 2;
  for (var j = 0; j < lineSize; j++) {
    for (var i = 0; i < size; i++) {
      if (arr[i] > arrk[j]) {
        lar += arr[i];
      }
    }
  }
  console.log(lar);
}

if (process.env.USERNAME === "user") {
  runProgram("10\n13 89 81 66 81 63 71 76 73 81\n2\n65\n15");
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
