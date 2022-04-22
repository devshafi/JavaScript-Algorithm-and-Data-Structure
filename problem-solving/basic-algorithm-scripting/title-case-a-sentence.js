function titleCase(str) {
    let lowercaseStr = str.toLowerCase();
    let lowerArr = lowercaseStr.split(" ");
    let titleCaseString = "";
    for (let i = 0; i < lowerArr.length; i++) {
      
      let word = lowerArr[i];
      const firstCharUpper = word[0].toUpperCase();
      let titleCaseWord = firstCharUpper + word.substring(1);
      console.log(titleCaseWord);
  
      i<lowerArr.length- 1?
      titleCaseString += titleCaseWord+" ":
      titleCaseString += titleCaseWord;
      console.log(titleCaseString);
  
    }
    return titleCaseString;
  }
  
  titleCase("I'm a little tea pot");