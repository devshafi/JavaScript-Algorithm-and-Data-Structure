function addTogether(x, y) {
    console.log(x, y)
    if ((x && y) && (typeof x !== "number" || typeof y !== "number")) {
      return undefined;
    }
    else if (x && typeof x !== 'number') return undefined;
    else if (!y) {
      return function (y) {
        if (y && typeof y !== 'number') return undefined;
        return x + y
      }
    }
    return x + y
  }
  
  // addTogether(2, 3);
  // addTogether(2, 3)
  // addTogether(5)(7)
  addTogether(2)([3])