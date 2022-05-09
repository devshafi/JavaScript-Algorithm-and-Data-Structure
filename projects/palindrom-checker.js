function palindrome(str) {

    const newStr = str.replace(/\W|[_]/gi,"").toLowerCase();
    console.log(newStr);
  
    for (
      let i = 0, j = newStr.length - 1;
      i < newStr.length;
      i++, j--) {
      if (newStr[i] != newStr[j]) return false;
    }
    return true;
  }
  
  palindrome("A man, a plan, a canal. Panama");