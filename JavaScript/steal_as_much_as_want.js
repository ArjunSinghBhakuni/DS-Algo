function runProgram(input) {
  var input = input.trim().split("\n");
  let maxValue = 0;
  var maxCapacity = +input[0].trim();
  var n = +input[1].trim();
  var value = input[2].trim().split(" ").map(Number);
  var weight = input[3].trim().split(" ").map(Number);
  for (let i = 0; i < n ; i++) {
    for (let j = i; j < n - i - 1; j++) {
      if (value[j] / weight[i] < value[j + 1] / weight[i + 1]) {
        tmp=value[j];
        value[j]=value[j+1];
        value[j+1]=tmp
        temp=weight[i];
        weight[i]=weight[i+1];
        weight[i+1]=temp
      }
    }
  }
  for(let i=0;i<n;i++){
      if(weight[i]<=maxCapacity){
          maxValue+=value[i];
          maxCapacity-=weight[i];
      }else{
          maxValue+=Math.round(value[i]*(maxCapacity/weight[i]));
          break;
      }
  }
  console.log(maxValue)
}

if (process.env.USERNAME === "user") {
  runProgram(`50 
    3
    60 100 120 
    10 20 30`);
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
