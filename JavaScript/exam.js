function runProgram(input) {
  var word = input.split("\n");
  var test = word[0];
  var line = 1;
  for (var i = 0; i < test; i++) {
    var size = word[line++];
    var arr = word[line++].split(" ").map(Number);
    var count = 0;

    for (var i = 0; i < size; i++) {
      for (var j = i; j < size; j++) {
        var odd = 0;
        var even = 0;
        for (var k = i; k <= j; k++) {
          if (arr[k] % 2 == 0) {
            even += arr[k];
          } else {
            odd += arr[k];
          }
        }
        if (odd > even) {
          count++;
        }
      }
    }
    console.log(count);
  }
}

if (process.env.USERNAME === "user") {
  runProgram("1\n5\n1 2 3 4 5");
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
