function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase=+input[0];
  var line=1;
  for(let i=0;i<testcase;i++){
  var [N, K] = input[line++].trim().split(" ").map(Number);
  var arr = input[line++].trim().split(" ").map(Number).filter(a=>a==0);
//   if(Math.floor(N/2)<=arr.length) console.log("No");
  if(arr.length>Math.floor(N/2) && arr.length>K)  console.log("Yes");
  else console.log("No");
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`1
5 1
1 0 0 0 1`);
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
