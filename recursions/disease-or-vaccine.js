function runProgram(input) {
  input = input.trim().split("\n");
  var N = +input[0];
  var vaccine = input[1]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  var patient = input[2]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
    // console.log(vaccine,patient)
    var isSaved = 0;
    var isDeath = 0;
  for (let i = 0; i < N; i++) {
  if(vaccine[i]>patient[i]){
       isSaved++;
  }else isDeath++;
  }
isDeath>0 ? console.log("No") : console.log("Yes");
}

if (process.env.USERNAME === "user") {
  runProgram(`5
123 146 454 542 456
100 328 248 689 200`);
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
