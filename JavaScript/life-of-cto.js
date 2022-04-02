function runProgram(input) {
    var input = input.trim().split("\n");
    var len = +input[0].trim();
    var arr=input[1].trim().split(" ").map(Number);
    var isPresent=false;
    for(var i=0;i<len;i++){
       if(arr[i]==1){
           isPresent=true;
           break;
       }
    }
    if(isPresent) console.log(i);
    else console.log(-1)
      }
  
  if (process.env.USERNAME === "user") {
    runProgram(`5
    0 0 0 0 0 `);
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
  