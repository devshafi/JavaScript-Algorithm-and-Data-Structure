const Person = function (firstAndLast) {
    // Only change code below this line
  
    this.getFullName = function () {
      return firstAndLast;
    };
  
    this.getFirstName = function () {
      return firstAndLast.split(" ")[0];
    }
  
    this.getLastName = function () {
      return firstAndLast.split(" ")[1]
    }
    this.setFirstName = function (first) {
      firstAndLast = first + " " + firstAndLast.split(" ")[1]
    }
    this.setLastName = function (last) {
      firstAndLast = firstAndLast.split(" ")[0] + " " + last
    }
    this.setFullName = function (fullName) {
      firstAndLast = fullName
    }
  };
  
  const bob = new Person('Bob Ross');
  bob.getFullName();
  bob.setFullName("Haskell Curry")
  console.log(bob.getFullName())