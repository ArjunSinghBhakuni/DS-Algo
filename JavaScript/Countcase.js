var arr = ["A", "Quick", "brown", "FOX", "Jumps", "Over", "A", "lazy", "DOG"];
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for (var j = 0; j < arr.length; j++) {
  for (var m = 0; m < arr[j].length; m++) {
    var count = 0;
    for (var i = 0; i < upper.length; i++) {
      if (arr[m] == upper[i]) {
        count++;
      }
    }
    console.log(count);
  }
}
