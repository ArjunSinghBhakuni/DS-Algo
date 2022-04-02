calc = {
  items: "FireFox",
  vowels: "aeiouAEIOU",
  vowelsCount: function () {
    var count = 0;
    for (var i = 0; i < this.items.length; i++) {
      for (var j = 0; j < this.vowels.length; j++) {
        if (this.items[i] == this.vowels[j]) {
          count++;
        }
      }
    }
    console.log(count);
  },
  reverse: function () {
    var rev = "";
    for (var i = this.items.length - 1; i >= 0; i--) {
      rev += this.items[i];
    }
    console.log(rev);
  },
  changeCase: function () {
    var newCase = " ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < this.items.length; i++) {
      var char = "";
      for (var j = 0; j < lower.length; j++) {
        if (this.items[i] == lower[j]) {
          char += upper[j];
        }
      }
      if (char == "") {
        for (var k = 0; k < upper.length; k++) {
          if (this.items[i] == upper[k]) {
            char += lower[k];
          }
        }
      }
      if (char != "") {
        newCase += char;
      } else {
        newCase += this.items[i];
      }
    }
    console.log(newCase);
  },
};
calc.vowelsCount();
calc.reverse();
calc.changeCase();
