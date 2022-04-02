function runProgram(input) {
    input = input.trim().split("\n");
    var k = +input[0];
    var arr1 = input[1].split(" ").map(Number);
    var arr2 = input[2].split(" ").map(Number);
    const arrival=arr1.sort((a, b) => a - b);
    const departure=arr2.sort((a, b) => a - b);
   var count=0;
   var isPossible=false;
   for(let i=1;i<arrival.length;i++){
           if(arrival[i]>=departure[i-1]){
                 count++;
                 isPossible=true;      
           }
       }
   if(count>k){
       isPossible=false;
   }
   if(isPossible) console.log("Possible");
   else console.log("Not Possible")
  }
  
  if (process.env.USERNAME === "user") {
    runProgram(`1
      1 3 5
      2 6 8`);
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
  