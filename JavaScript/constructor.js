var parents = {
  father: "krishna",
  mother: "priya",
};

var son = Object.create(parents);

son.name = "raj";
console.log(son);

function son2() {
  this.name = "swanand";
}

var parents2 = {
  father: "x",
  mother: "y",
};

son2.prototype = parents2;

var s = new son2();

console.log(s);
