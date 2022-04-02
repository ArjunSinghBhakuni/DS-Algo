//
var person = {
  name: "Sidharth",
  age: 100,
  height: "6 Ft 12 In",
  gender: "Female",
  hobbies: ["Coding", "Weight Lifting", "Running", "Eating"],
};

var json = JSON.stringify(person);

console.log(json);

var regularObject = JSON.parse(json);

console.log(regularObject);

console.log(localStorage.setItem("myCat", "Tom"));

Storage.setItem();

localStorage.removeItem("myCat");

var loadVal = JSON.Parse(localStorage.getItem("name"));

console.log(loadVal);

var loadVal = JSON.Parse(localStorage.getItem("name"));

var cat = localStorage.getItem("myCat");
console.log(cat);
