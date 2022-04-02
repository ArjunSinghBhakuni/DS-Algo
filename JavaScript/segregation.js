function seperationOfOddEven(N, arr, Q) {
  let even = arr.filter((x) => x % 2 == 0);
  let odd = arr.filter((x) => x % 2);
  //  console.log(even,odd)
  if(Q === 1){
 console.log(even.join(),odd.join())
  } else{
      console.log(odd.join(),even.join())
  } 
}
