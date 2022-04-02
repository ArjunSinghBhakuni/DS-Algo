function runProgram(input) {
    var input = input.trim().split("\n");
    var testcase = +input[0];
    var line = 1;
    for (let i = 0; i < testcase; i++) {
      var arr = input[line++].trim().split(" ").map(Number);
    //   console.log(arr)
      for (let j = 0; j < 12; j++) {
          if(j!=arr[j]){
              console.log(j);
              break;
          }
      }
    }
  }
  
  if (process.env.USERNAME === "user") {
    runProgram(`2
    0 1 2 4 5 6 9 10 11 12 
    1 2 3 5 7 8 9 10 11 12`);
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
  