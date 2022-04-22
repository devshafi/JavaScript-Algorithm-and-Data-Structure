function repeatStringNumTimes(str, num) {

    if (num < 0) return "";
  
    let finalStr = "";
    for (let i = 0; i < num; i++) {
      finalStr += str;
    }
    return finalStr;
  }
  
  console.log(repeatStringNumTimes("abc", -2));