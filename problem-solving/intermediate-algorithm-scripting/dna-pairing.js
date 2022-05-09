function pairElement(str) {

    return str.split("").map(el =>
      el == 'A' ? ['A', 'T'] :
        el == 'T' ? ['T', 'A'] :
          el == 'C' ? ['C', 'G'] :
            el == 'G' ? ['G', 'C'] : ""
    )
  
  }
  
  pairElement("AT");