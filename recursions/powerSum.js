function powerSum(X, N, exponentIncrement = 1) {
  let exponentVal = X - Math.pow(exponentIncrement, N);
  if (exponentVal < 0) return 0;
  else if (exponentVal === 0) return 1;
  else
    return (
      powerSum(exponentVal, N, exponentIncrement + 1) +
      powerSum(X, N, exponentIncrement + 1)
    );
}

function runProgram(input) {
    var [X,N]=input.trim().split(" ").map(Number);
    console.log(powerSum(X,N))
}

if (process.env.USERNAME === "user") {
runProgram(`10 2`);
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