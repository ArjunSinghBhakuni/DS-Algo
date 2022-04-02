function runProgram(input) {
  var input = input.trim().split("\n");
  var [N,Q]=input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  var line=2;
  for(let i=0;i<Q;i++){
      var [left,right,value]=input[line++].trim().split(" ").map(Number);
      var count=0;
      for(let a=left-1;a<right;a++){
          if(arr[a]==value){
              count++;
          }
      }
    //   const freq=arr.filter()
      console.log(count)
  }

}

if (process.env.USERNAME === "user") {
  runProgram(`6 2
1 5 3 2 3 2 
3 6 2
4 4 2`);
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
