function runProgram(input) {
  var input = input.trim().split("\n");
  var [N,K]=input[0].trim().split(" ").map(Number);
  var arr1=input[1].trim().split(" ").map(Number).slice(0,N);
  var arr2=input[1].trim().split(" ").map(Number).slice(N,2*N);
//   console.log(arr1,arr2)
var sum1 = arr1.reduce((a, b) => a + b, 0);
var sum2 = arr2.reduce((a, b) => a + b, 0);
// console.log(sum1,sum2)
var diff=Math.abs(sum1-sum2);
// console.log(diff);
diff<=K ? console.log("Valid") : console.log("Invalid");
}

if (process.env.USERNAME === "user") {
  runProgram(`3 0
1 2 3 4 2 1`);
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
