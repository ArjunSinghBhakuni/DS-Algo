function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase = input[0].trim();
  var line = 1;
  for (let i = 0; i < testcase; i++) {
    let STK = [];

    let N = input.length; // Size of sting S

    let TOP = STK[0]; // TOP of the stack STK

    let FLAG = 0;

    for (let i = 0; i <= N - 1; i++) {
      if (S[i] == "(" || S[i] == "{" || S[i] == "[") {
        STK.push(S[i]);
      } else {
        if (STK.length == 0) {
          FLAG = 1;
          break;
        } else {
          if (
            (S[i] == ")" && STK[TOP] != "(") ||
            (S[i] == "}" && STK[TOP] != "{") ||
            (S[i] == "]" && STK[TOP] != "[")
          ) {
            FLAG = 1;
            break;
          } else {
            STK.pop();
          }
        }
      }
    }

    if (FLAG == 1) print("Not balanced");
    else {
      if (STK.empty) print("Balanced");
      else print("Not Balanced");
    }
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`3
    {([])}
    ()
    ([]
    `);
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
