function convertHTML(str) {

    const pairs = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&apos;'
    }
    return str.split("")
      .map(el => pairs[el] || el
      ).join("")
  }
  
  convertHTML("Dolce & Gabbana");