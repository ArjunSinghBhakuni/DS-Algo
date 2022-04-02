function runProgram(input) {
  var input = input.trim().split("\n");
  var testcase = input[0].trim().split("");
  var line = 1;
  for (var a = 0; a < testcase; a++) {
      var [N, M] = input[line++].trim().split(" ").map(Number);
      var arr = [];
      var record = [];
      var count=0;
      for(var j=0;j<N;j++){
          arr.push(input[line++]);
      }
    //   console.log(arr)
    var  i = 0;
    var  j = 0;
    var start=[i][j];
    for(var m=0;m<N;m++){
        for(var k=0;k<M;k++){
            if(i<0 || j<0) break;
            if(arr[j][k]=="R") j++;
            if(arr[j][k]=="D") i++;
            if(arr[j][k]=="L") j--;
            if(arr[j][k]=="U") i--;
            record.push([i][j])
            count++;
        }
    }
    console.log(record);
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`1
3 4
RRDR
LLUD
LLLL
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
