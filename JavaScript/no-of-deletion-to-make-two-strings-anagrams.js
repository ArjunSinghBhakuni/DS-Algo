function remAnagram(str1, str2) {
  // make hash array for both string
  // and calculate frequency of each
  // character
  var count1 = Array.from({ length: 26 }, (_, i) => 0);
  var count2 = Array.from({ length: 26 }, (_, i) => 0);
  // count frequency of each character
  // in first string
  for (let i = 0; i < str1.length; i++)
  count1[str1.charAt(i).charCodeAt(0) - "a".charCodeAt(0)]++;
  
  // count frequency of each character
  // in second string
  for (let i = 0; i < str2.length; i++)
  count2[str2.charAt(i).charCodeAt(0) - "a".charCodeAt(0)]++;
  
  console.log(count1,count2);
  // traverse count arrays to find
  // number of characters to be removed
  var result = 0;
  for (let i = 0; i < 26; i++) result += Math.abs(count1[i] - count2[i]);
    console.log(result);
}
remAnagram(`abc`,`cde`)