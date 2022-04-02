function calculateAverage(char){
   var lower="abcdefghijklmnopqrstuvwxyz";
   var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   for (let i = 0; i < lower.length; i++) {
         if(lower[i]==char){
             return upper[i]
         } ;     
   } 
}
console.log(calculateAverage("j"));
var word="amar";
var aj=""
for (let j = 0; j < word.length; j++) {

        aj+=calculateAverage(word[j]);
    }
    
console.log(aj);

function isPrime(num){
    for (let i = 2; i < num; i++) {
        if(num%i==0){
            console.log(false);
        }
        
    }console.log(true);
}
isPrime(23);

function isVowel(char){
    var vowel=["a","e","i","o","u","A","E","I","O","U"];
    for (let i = 0; i < vowel.length; i++) {
    if(char==vowel[i]){
        return true;
    } ;
    }
     return false;
}
var myName="AmarJyotiPatra";
var output2="";
for (let i = 0; i < myName.length; i++) {
    var isV=isVowel(myName[i]);
    if(! isV){
        output2 += myName[i];
    }
    
}
console.log(output2);

function arrayProduct(items){
    var prod=1;
    for(i=0;i<items.length;i++){
        prod *= items[i];
    }
    return prod;
}
function itemProduct(numbers,product){
    var products=[];
    for (let i = 0; i < numbers.length; i++) {
        products.push(product/numbers[i])
        
    }
    return products;
}

function runProgram(input) {
    var arr=input.split("\n");
    var cases=Number(arr[0]);
    for (let i = 2; i <arr.length; i+=2){
        var nums=arr[i].split(" ").map(Number);
        var prod=arrayProduct(nums);
        var it_prod=itemProduct(nums, prod);
        console.log(it_prod.join(" "));
    } 
}

if (process.env.USERNAME === "user") {
  runProgram('2\n5\n1 2 3 4 5\n3\n3 2 7');
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