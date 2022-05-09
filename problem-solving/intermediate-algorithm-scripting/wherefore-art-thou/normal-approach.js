function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
  
    for (let i = 0; i < collection.length; i++) {
      let allExist = true;
      for (let key in source) {
        if(collection[i].hasOwnProperty(key)
        && collection[i][key] == source[key]
        ){
          console.log(key)
        }else allExist = false
      }
  
      if(allExist) arr.push(collection[i]);
    }
  
    console.log(arr)
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });