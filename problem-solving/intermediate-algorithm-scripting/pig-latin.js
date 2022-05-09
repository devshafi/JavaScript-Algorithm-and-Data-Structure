function translatePigLatin(str) {
    const regex = "^[^aeiou]*"
    const [res] = str.match(regex);
    let finalString = "";
    if (res) {
      const consLen = res.length;
      const strWithoutCons = str.substr(consLen);
      finalString = strWithoutCons+res+"ay";
      console.log(finalString)
    }else{
      finalString = str+"way";
    }
    return finalString
  }
  
  translatePigLatin("algorithm");