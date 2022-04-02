function runProgram(input) {
     input = input.split("\n");
    let virat=input[0].trim().split("")
    let rohit=input[0].trim().split("");
    similarText(virat,rohit,[])
}

function similarText(virat,rohit,arr){
    virat=virat.toString().split("");
    rohit=rohit.toString().split("");
    for(let i=0;i<virat.length;i++){
        if(virat[i]<=virat[i+1]){
            for(let j=0;j<rohit.length;j++){
                arr[i]=rohit[j];
                rohit[j]=Number.MAX_VALUE;
            }
        }
    }
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== undefined){
            count++;
        }
    }
    console.log(count)
}



if (process.env.USERNAME === "user") {
  runProgram(`AEDFHR
  ABCDGH`);
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
