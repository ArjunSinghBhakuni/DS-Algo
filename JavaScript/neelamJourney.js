function runProgram(input) {
    input = input.trim().split("\n");
    const N = +input[0].trim();
    const arr = input[1].trim().split(" ").map(Number);
    let currentCost=arr[0];
    let totalCost=0;
    for(let i=0;i<N;i++){
        currentCost=Math.min(currentCost,arr[i]);
        totalCost+=currentCost;
    }
    console.log(totalCost)
  }
  
  if (process.env.USERNAME === "user") {
    runProgram(`5
    4 7 8 3 4`);
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
  