function runProgram(input) {
  var input = input.split("\n");
  const N = +input[0];
  let array = [];
  for (let i = 1; i <= N; i++) {
    let arr = input[i].trim().split(" ");
    array.push(arr);
  }
  buyTicket(N, array);
}

function buyTicket(N, array) {
  let queue = [];
  for (let i = 0; i < N; i++) {
    if (array[i][0] == "E") {
      queue.push(array[i][1]);
      console.log(queue.length);
    } else if (array[i][0] == "D") {
      if (queue.length != 0) {
        console.log(queue.shift() + " " + queue.length);
      } else {
        console.log(-1 + " " + 0);
      }
    }
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`5
    E 2
    D
    D
    E 3
    D`);
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
