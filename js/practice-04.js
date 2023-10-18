function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    } else {
      return "Not Found";
    }
    // Only change code above this line
  }

checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift")
//should return the string pony.

//checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet") should return the string kitten.

//checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house") should return the string Not Found.

//checkObj({city: "Seattle"}, "city") should return the string Seattle.

//checkObj({city: "Seattle"}, "district") should return the string Not Found.

//checkObj({pet: "kitten", bed: "sleigh"}, "gift") should return the string Not Found.

function checkForProperty(object, property) {
    return object.hasOwnProperty(property);
  }
  
  //checkForProperty({ top: 'hat', bottom: 'pants' }, 'top'); // true
 //checkForProperty({ top: 'hat', bottom: 'pants' }, 'middle'); // false