function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase = +input[0];
  var arr= input[1].trim().split(" ").map(Number);
  var equilibrium=false;
  for (var t = 1; t < testcase-1; t++) {
    if(arr.slice(0, t).reduce((a, b) => a + b, 0) ==
        arr.slice(t+1, testcase).reduce((a, b) => a + b, 0)
    ){
        equilibrium=true;
        break;
    }
  }
  equilibrium==true ? console.log(t+1) : console.log(-1)
}

if (process.env.USERNAME === "user") {
  runProgram(`5
3 3 5 5 1`);
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
