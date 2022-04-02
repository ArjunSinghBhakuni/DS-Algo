function runProgram(input) {
  var input = input.trim().split("\n");
  var N = +input[0];
  let odd = 0;
  let even = 0;
  var arr = input[1].trim().split(" ").map(Number);
  var oddArr = arr.filter((x) => x % 2 != 0);
  var evenArr = arr.filter((x) => x % 2 === 0);
  for (let i of oddArr) {
    odd += i;
  }
  for (let i of evenArr) {
    even += i;
  }
  //   console.log(odd,even)
  odd > even ? console.log("Odd") : console.log("Even");
}

if (process.env.USERNAME === "user") {
  runProgram(`4
1 2 3 4`);
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
