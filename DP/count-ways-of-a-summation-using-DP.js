function runProgram(n) {
    var DP = [];
    DP[0] = DP[1] = DP[2] = 1;
    DP[3] = 2;
    for(var i = 4; i <= +n; i++){
        DP[i] = DP[i - 1] + DP[i - 3] + DP[i - 4];
    } 
    console.log(DP[n])
  }
  
  if (process.env.USERNAME === "user") {
    runProgram(`5`);
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
  