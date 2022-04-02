function balancedParenthesis(input){
    let st=[];
    for(let i=0;i<input.length;i++){
        if(input[i] == "(" || input[i]=="{" || input[i]=="["){
            st.push(input[i]);
        }else{
            if (st[st.length - 1] == "(" && st.length != 0) {
              if (input[i] == ")") {
                st.pop();
              } else st.push(1);
            } else if (st[st.length - 1] == "{" && st.length != 0) {
              if (input[i] == "}") {
                st.pop();
              } else st.push(1);
            } else if (st[st.length - 1] == "[" && st.length != 0) {
              if (input[i] == "]") {
                st.pop();
              }
            } else st.push(1);
        }
    }
    st.length==0 ? console.log("Balanced") : console.log("Unbalanced")
}
balancedParenthesis("[([{])]]}");