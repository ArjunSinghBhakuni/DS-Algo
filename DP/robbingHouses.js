function runProgram(input) {
    input=input.trim().split("\n");
    const testcase=+input[0];
    let line=1;
    for(let i=0;i<testcase;i++){
        const len=+input[line++];
        const houses=input[line++].trim().split(" ").map(Number);
        console.log(maxLoot(houses,len))
    }
   }
   function maxLoot(houses, n){
      //  if (n == 0) return 0;
      //  if (n == 1) return houses[0];
      //  if (n == 2) return Math.max(houses[0], houses[1]);

       let dp = new Array(n);
  
       // Initialize the dp[0] and dp[1]
       dp[0] = houses[0];
       dp[1] = Math.max(houses[0], houses[1]);
  
       // Fill remaining positions
       for (let i = 2; i<n; i++)
           dp[i] = Math.max(houses[i]+dp[i-2], dp[i-1]);
  
       return dp[n-1];
   }
   
   if (process.env.USERNAME === "user") {
     runProgram(`3
     2
     1 100
     3
     2 100 99
     4
     100 1 1 100`);
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
   