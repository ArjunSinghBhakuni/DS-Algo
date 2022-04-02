var num=9687;
var words=num.toString();
var letter=[];
for(var i=0;i<words.length;i++){
switch(words[i]){
    case "0":
        letter.push("zero")
        break;
    case "1":
        letter.push("one")
        break;
    case "2":
        letter.push("two")
        break;
    case "3":
        letter.push("three")
        break;
    case "4":
        letter.push("four")
        break;
    case "5":
        letter.push("five");
        break;
    case "6":
        letter.push("six");
        break;
    case "7":
        letter.push("seven");
        break;
    case "8":
        letter.push("eight");
        break;
    case "9":
        letter.push("nine");
        break;
        default:
            letter.push("not a word");
} }

console.log(letter.join(" "));        