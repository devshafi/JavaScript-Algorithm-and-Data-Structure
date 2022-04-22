function getIndexToIns(arr, num) {
    const sortedArr = arr.sort((a, b) => a - b);
    console.log(sortedArr)
  
    // static cases check
    if (arr.length == 0) return 0;
    else if (num > sortedArr[sortedArr.length - 1]) {
      return sortedArr.length;
    }
  
    for (let i = 0; i < sortedArr.length - 1; i++) {
  
      if (num == sortedArr[i]) {
        return i;
      }
      else if (num > sortedArr[i] && num < sortedArr[i + 1]) {
        return i + 1;
      }
    }
  }
  
  console.log(getIndexToIns([], 1));