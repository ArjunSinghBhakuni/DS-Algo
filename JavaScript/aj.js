function runProgram(input) {
  var num = input.split("\n");
  var arr = num.join(" ").split(" ");
  var countx = 0;
  var counto = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == "x") {
      countx++;
    } else {
      counto++;
    }
  }
  if (countx > counto) console.log("x");
  else if (counto > countx) console.log("o");
  else console.log("Tie");
}

if (process.env.USERNAME === "hello") {
  runProgram("x o x\no x x\no o o");
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
