function myReplace(str, before, after) {
    let isBeforeUpperCase = (/^[A-Z]/).test(before);
    let modifiedAfter;
    if (isBeforeUpperCase) {
      modifiedAfter = after.split("").map((el, i) => {
        return i == 0 ? el.toUpperCase():el
      }).join("")
      console.log(modifiedAfter)
    }else{
      modifiedAfter = after.split("").map((el, i) => {
        return i == 0 ? el.toLowerCase():el
      }).join("")
    }
    return str.replace(before,modifiedAfter)
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped");