function runProgram(input) {
  input = input.trim().split("\n");
  var testcase = +input[0];
  var line=1;
  for(let i=0;i<testcase;i++){
      var str1=input[line++].trim().split("");
      var str2=input[line++].trim().split("");
    //   console.log(str1,str2);
    if(str1.length!=str2.length){
       console.log("False");
        break;
    }  
       else{
        str1.sort();
        str2.sort();
        var notAnagram=0;
         for(let j=0;j<str1.length;j++){
        if(str1[j] != str2[j]) {
            notAnagram++;
            break;
          }
        }
        notAnagram==0 ? console.log("True") : console.log("False");
}
  }
}

if (process.env.USERNAME === "user") {
  runProgram(`2
abcd
dcab
aa
aaa`);
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
