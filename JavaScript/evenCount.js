function runProgram(input) {
      var arr = input.trim().split("").map(Number);
    //   console.log(arr)
    const evenCount=[]
    let even=arr.filter(num => num%2==0);
    let count=even.length;
      for(let i=0;i<arr.length;i++){
          if(arr[i]%2==0){
             evenCount.push(count--) 
          }else{
              evenCount.push(count)
          }
      }
      console.log(...evenCount)
  }

  //7 7 7 6 5 5 4 4 3 2 1 1
  
  if (process.env.USERNAME === "user") {
    runProgram(`574674546476`);
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
  