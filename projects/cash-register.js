function checkCashRegister(price, cash, cid) {
    /**
    * multiplying by 100 to avoid 
    * decimal number calculation problem
     */
  
    // change that need to be returned
    let change = (cash * 100) - (price * 100);
  
    let cidTotal = 0;
    for (let cashInCur of cid) {
      cidTotal += cashInCur[1] * 100;
    }
    if (cidTotal < change) {
      return { status: "INSUFFICIENT_FUNDS", change: [] }
    }
    else if (cidTotal == change) {
      return { status: "CLOSED", change: cid }
    }
    else {
      // sorting larger currency to smaller currency
      // to start from larger to smaller
      cid = cid.reverse();
  
      const currencyUnits = {
        'ONE HUNDRED': 100 * 100,
        'TWENTY': 20 * 100,
        'TEN': 10 * 100,
        'FIVE': 5 * 100,
        'ONE': 1 * 100,
        'QUARTER': 0.25 * 100,
        'DIME': 0.1 * 100,
        'NICKEL': 0.05 * 100,
        'PENNY': 0.01 * 100
      }
  
      let returnedCash = [];
      for (let cash of cid) {
        let changeInUnit = 0;
        cash[1] = cash[1] * 100; // to avoid decimal calculation
        while (cash[1] > 0 && change >= currencyUnits[cash[0]]) {
          changeInUnit += currencyUnits[cash[0]]
          cash[1] -= currencyUnits[cash[0]];
          change -= currencyUnits[cash[0]];
        }
        changeInUnit = changeInUnit / 100; // converting back to origianl value
        if (changeInUnit > 0) {
          returnedCash.push([cash[0], changeInUnit])
        }
  
      }
      // unable provide change from cid
      if (change > 0) return { status: "INSUFFICIENT_FUNDS", change: [] }
  
      return { status: "OPEN", change: returnedCash };
    }
  
  
  
  }
  
  console.log('val', checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));