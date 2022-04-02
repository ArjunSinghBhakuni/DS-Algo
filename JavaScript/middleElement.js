function runProgram(input) {
  var input = input.trim().split("\n");
  var len = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  var value=0;
  for(var i=1;i<len-1;i++){
      if(
        arr.slice(0, i - 1).map((el) => el <= arr[i]) &&
          arr.slice(i+1,len).map((el) => el >= arr[i])
      ){
          value=1;
         break;
      }
  }
  value==1 ? console.log(arr[i]) : console.log(-1)
}

if (process.env.USERNAME === "user") {
  runProgram(`5
4 3 6 7 8`);
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
