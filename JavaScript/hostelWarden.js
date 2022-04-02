function runProgram(input) {
    var input = input.trim().split("\n");
    var n = +input[0].trim();
    var arr1 = input[1].trim().split(" ").sort((a, b) => a - b).map(Number);
    var arr2 = input[2].trim().split(" ").sort((a, b) => a - b).map(Number);
    var max=0;
    for (var i = 0; i < n; i++) {
     let temp=Math.abs(arr1[i]-arr2[i]);
     max=Math.max(temp,max);
      }
      console.log(max)
      }
  
  if (process.env.USERNAME === "user") {
    runProgram(`3
    4 -4 2
    4 0 5`);
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
  