
  function runProgram(input) {
    input = input.trim().split("\n");
      const testcase=+input[0].trim();
      let arr=input[1].trim().split(` `).map(Number);
      let sum=arr[0]
    //   console.log(sum)
      for(let i=0;i<testcase;i++){
          sum+=Math.min(Math.abs[arr[i+1]-arr[i],Math.abs[arr[i+2]-arr[i]]])
      }
      console.log(sum)
  }
  
  if (process.env.USERNAME === "user") {
    runProgram(`4
    10 30 40 20`);
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
  