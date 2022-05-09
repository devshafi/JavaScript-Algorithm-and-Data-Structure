function truthCheck(collection, pre) {
    let flag = true;;
    for(let i=0;i<collection.length;i++){
      if(!collection[i][pre]){
        // console.log(collection[i][pre])
        flag = false;
        break;
      }
    }
    return flag;
  }
  
  truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");