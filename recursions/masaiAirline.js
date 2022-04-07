function runProgram(input) {
    input=input.trim().split("\n");
  var N=+input[0];
  var checkin=input[1].trim().split(" ").map(Number);
  var handBag=input[2].trim().split(" ").map(Number);
//   console.log(checkin,handBag)
for(let i=0;i<N;i++){
    if(checkin[i]>15 || handBag[i]>7) console.log("Stop");
    if(checkin[i]<=15 && handBag[i]<=7) console.log("Boarding");
}
}

if (process.env.USERNAME === "user") {
  runProgram(`4
12 14 15 6
8 5 7 4`);
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
