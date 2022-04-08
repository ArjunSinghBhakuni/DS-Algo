function runProgram(n) {
   n=+n;
   fibonacci(n)
  }

  function fibonacci(n) {
    var DP=[];
    DP[0]=0;
    DP[1]=1;
    for(let i=2;i<=n;i++){
      DP[i] = DP[i-1] + DP[i-2];
    }
    console.log(DP[n])
  }
  
  if (process.env.USERNAME === "user") {
    runProgram(`10`);
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
  