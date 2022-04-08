function runProgram(input) {
    input = input.trim().split("\n");
    const n=+input[0].trim()
    console.log(findValue(n))
   }
 
   function findValue(n){
    var dp=[];
    if (n <= 0) return 0;
    if(dp[n] != -1) return dp[n];
    let val=0;
    val = findValue(n/2) + findValue(n/3) + findValue(n/4)
    if(val< dp[n]) return dp[n];
    else return val;
}
   
   if (process.env.USERNAME === "user") {
     runProgram(`12
     2`);
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
   