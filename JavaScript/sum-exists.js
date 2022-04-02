function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase = +input[0].trim();
  var arr = input[1].trim().split(" ").map(Number);
  var sum = +input[2].trim();
  var isPossible=false;
  for (var i = 0; i < testcase; i++) {
    for (var j = i + 1; j < testcase; j++) {
      var add=0;
        for (var k = i; k <= j; k++) {
              add+=arr[k];
              if(add==sum){
                isPossible=true;
                break;
              }
        }
      }
    }
    if (isPossible) console.log("yes");
    else console.log("no")
    }

if (process.env.USERNAME === "user") {
  runProgram(`9
  1 2 3 4 5 6 7 8 9
  5`);
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
