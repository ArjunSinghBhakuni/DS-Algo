function runProgram(input) {
  input = input.split("\n");
 const grocery=[550,240,84,159,80,160,252];
 const N=+input[0];
 const arr=input[1].trim().split(" ").map(Number);
 let cost=0
 for(let i=0;i<7;i++){
  cost+=arr[i]*grocery[i];
 }
 console.log(cost*N)
}

if (process.env.USERNAME === "user") {
  runProgram(`4
0 1 1 1 0 0 1`);
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
