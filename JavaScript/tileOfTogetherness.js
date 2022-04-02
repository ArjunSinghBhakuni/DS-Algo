function runProgram(input) {
  var [N,M] = input.trim().split(" ").map(Number);
  var digit=N.toString().split("").map(Number);
  while(N<M){
       for(let x of digit){
           N+=Number(x)
        }
    }
     if(N==M) console.log(M)
     else    console.log(-1)
    
}

if (process.env.USERNAME === "user") {
  runProgram(`32 47`);
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
