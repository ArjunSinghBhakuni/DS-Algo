function runProgram(input) {
  input = input.split("\n");
  var n = +input[0].trim();
  var line = 1;
  var obj = {};
  for (let i = 0; i < n; i++) {
    var word = input[line++].trim();
    obj[word] = obj[word] ? obj[word] + 1 : 1;
  }
  var output1=[];
  output1.push(...Object.keys(obj));
  var output2 = [];
  output1.push(...Object.values(obj));
  for(let x=0;x<output1.length;x++){
}
console.log(output1+" "+output2[x]);
}

if (process.env.USERNAME === "user") {
  runProgram(`3
masai
school
masai`);
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
