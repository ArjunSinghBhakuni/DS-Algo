function runProgram(input) {
    var num = +input[0].trim();
    for(var i=4;i<=num;i++){
      num=num[i-1]+num[i-3]+num[i-4];
    }
    console.log(num)
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
  