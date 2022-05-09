function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  const sourceKeys = Object.keys(source);
  console.log(sourceKeys);

  const res = collection.filter(obj => {
    return sourceKeys.every(key => {
      return obj.hasOwnProperty(key) && obj[key] == source[key]
    })
  })

  console.log(res);
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });