function runProgram(input) {
  var num = input.split("\n");
  var size = num[0];
  var arr = num[1].split(" ").map(Number);
  var sum = 0;
  for (var i = 0; i < size; i++) {
    for (var j = i + 1; j < size; j++) {
      if (j - i == isPrime(j - i)) {
        sum = sum + arr[j] - arr[i];
      }
    }
  }
  console.log(sum);
}
function isPrime(num) {
  var count = 0;
  for (var i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == 2) console.log(num);
}

if (process.env.USERNAME === "user") {
  runProgram("6\n1 2 3 5 7 12");
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
