function runProgram(input) {
  input = input.trim().split("\n");
  var k = +input[0];
  var arrival = input[1].trim().split(" ").map(Number);
  var departure = input[2].trim().split(" ").map(Number);
  if(parkingSlot(k, arrival, departure)) console.log("Possible");
  else console.log("Not Possible")
}

function parkingSlot(k, arrival, departure) {
  let count = 0;
  let i = 1;
  let j = 0;
  while (i < arrival.length && j < departure.length) {
    if (arrival[i] <= departure[j]) {
      count++;
      i++;
    }
    else {
      j++;
      count--;
    }
    if (count >= k) return false;
  }
 return true;
}

if (process.env.USERNAME === "user") {
  runProgram(`1
  1 2
  1 2`);
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
