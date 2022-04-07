function runProgram(input) {
  var input = input.trim().split("\n");
  var [N,M,k] = input[0].trim().split(" ").map(Number);
  var applicant=input[1].trim().split(" ").map(Number);
  var housesBuilt=input[2].trim().split(" ").map(Number);
//   console.log(k,housesBuilt);
var count=0;
for(let i=0;i<M;i++){
    for(let j=0;j<N;j++){
    // while(housesBuilt[i]-k == applicant[j] && housesBuilt[i]+k == applicant[j]){
    //     count++;
    // }
    for(let x=housesBuilt[i]-k;x<housesBuilt[i]+k+1;x++){
        if(x==applicant[j]){
            count++;
            break;
        }
    }
    }
}
console.log(count);
}

if (process.env.USERNAME === "user") {
  runProgram(`4 3 5
60 45 80 60
30 61 74`);
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
