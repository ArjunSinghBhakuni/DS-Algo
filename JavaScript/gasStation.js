function runProgram(input) {
  var input = input.trim().split("\n");
  var N=+input[0];
  var gas=input[1].trim().split(" ").map(Number);
  var cost=input[2].trim().split(" ").map(Number);
  var fuel=0; //current fuel
  var start=0; //starting index
  var total=0; // total sum of gas[i]-cost[i]
 for(var i=0;i<N;i++){
            fuel = fuel + gas[i]-cost[i];
            total = total + (gas[i]-cost[i]);
            if(fuel<0){
                start=i+1;
                fuel=0;
            }
        }
        if(total<0){
            start =-1;
        }
        // cout<<start;
        console.log(start)
}

if (process.env.USERNAME === "user") {
  runProgram(`5
1 2 3 4 5
3 4 5 1 2`);
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
