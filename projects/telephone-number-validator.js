function telephoneCheck(str) {
 
    const validPhnRegex = /^\d{3}-\d{3}-\d{4}$|^\d{10}$|^1 \d{3}(-| )\d{3}(-| )\d{4}$|^\b\d{3}\b \d{3}-d{4}$|^(\(|1\()\d{3}\)\d{3}-\d{4}$|^1 \(\d{3}\) \d{3}-\d{4}$/;
     
     console.log(validPhnRegex.test(str));
   
     return validPhnRegex.test(str)
   }
   
   telephoneCheck("(555)555-5555");
   