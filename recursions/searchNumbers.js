function runProgram(input) {
    input = input.trim().split("\n");
    const N = +input[0];
    const arr = input[1].trim().split(" ").map(Number);
    const K=+input[2];
    var line=3;
    var output=[];
    for(let i=0;i<K;i++){
        var [l,r]=input[line++].trim().split(" ").map(Number);
      var len= arr.filter(x=>x>=l && x<=r);
      output.push(len.length)
    }
    console.log(...output)
    }
  
  if (process.env.USERNAME === "user") {
    runProgram(`5
    10 1 10 3 4
    4
    1 10
    2 9
    3 4
    2 2
    `);
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
  