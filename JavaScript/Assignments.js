var items = ["a", "b", "c", "d", "a", "c"];
var output = [];
for (var i = 0; i < 3; i++) {
  for (var j = 5; j >= 3; j--) {
    if (items[i] == items[j]) {
      output.push(items[i]);
    }
  }
}
console.log(output);
