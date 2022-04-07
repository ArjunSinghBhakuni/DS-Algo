function generateSubSequence(String str, String res)
{
      if(str.length()==0)
            {
            print(res)
            return
      }
      generateSubSequence(str.substring(1),res)//character is not present[0]
      generateSubSequence(str.substring(1),res+str.str[0])//character is present[1]
}
main()
{
    generateSubSequence("abc","");//main function we are calling orginal string and empty string
}