function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  var str=[];
  for(let i=0;i<testcase;i++){
      if(arr[i]<0){
          str.push(0)
      }else{
          str.push(arr[i])
      }
  }
  console.log(str.join(""))
}

if (process.env.USERNAME === "user") {
  runProgram(`5
2 -4 6 8 -9`);
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
