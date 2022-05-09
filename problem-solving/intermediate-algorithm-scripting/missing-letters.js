function fearNotLetter(str) {

    for (let i = 0; i < str.length-1; i++) {
      const currentCharIndex = str[i].charCodeAt(0);
      const nextCharIndex = str[i+1].charCodeAt(0);
      const charsIndexDiff = nextCharIndex - currentCharIndex;
      if(charsIndexDiff>1){
        return String.fromCharCode(currentCharIndex+1);
      }
  
    }
    return undefined;
  }
  
  console.log(fearNotLetter("abce"));