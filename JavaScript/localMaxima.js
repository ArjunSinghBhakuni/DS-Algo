function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase=+input[0];
  var line=1;
  for(let i=0;i<testcase;i++){
  var N = input[line++];
  var arr = input[line++].trim().split(" ").map(Number);
  console.log(arr)
  if(N<3){
      console.log(-1);
    }else{
      var count = 0;
      for(let a=1;a<N-1;a++){
       if(arr[a]>arr[a-1] && arr[a]>arr[a+1]){
           count++;
       }
      }
      console.log(count)
  }
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`2
2
1 2
10
884 729 768 201 266 494 597 328 705 287`);
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
