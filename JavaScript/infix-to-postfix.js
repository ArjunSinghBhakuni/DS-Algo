	//Function to return precedence of operators
function prec(c) {
		if(c == '^')
			return 3;
		else if(c == '/' || c=='*')
			return 2;
		else if(c == '+' || c == '-')
			return 1;
		else
			return -1;
	}

function infixToPostfix(s) {
		let st = []; 
		let result = "";
		for(let i = 0; i < s.length; i++) {
			let c = s[i];
			if((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9'))
				result += c;
			else if(c == '(')
				st.push('(');
			// If the scanned character is an ‘)’,
			// pop and to output string from the stack
			// until an ‘(‘ is encountered.
			else if(c == ')') {
				while(st[st.length - 1] != '(')
				{
					result += st[st.length - 1];
					st.pop();
				}
				st.pop();
			}
			else {
				while(st.length != 0 && prec(s[i]) <= prec(st[st.length - 1])) {
					result += st[st.length - 1];
					st.pop();
				}
				st.push(c);
			}
		}
		// Pop all the remaining elements from the stack
		while(st.length != 0) {
			result += st[st.length - 1];
			st.pop();
		}
          console.log(result)
	}

    
if (process.env.USERNAME === "user") {
  infixToPostfix(`a+b-c+d*(e-f)/g+(h*(i/j))`);
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
