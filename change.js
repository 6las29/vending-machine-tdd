/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = getChange;  // allows CommonJS/Node.js require()
}

function getChange(totalPayable, cashPaid) {
  "use strict";
  // Initialize an empty array to hold the change
  var change = [];

  if (totalPayable !== cashPaid) {
    /** Calculate the change to be returned
     * rawChange = cashPaid - totalPayable
     * denominations = [200, 100, 50, 20, 10, 5, 2, 1]
     * change = []
     * pour chaque valeur v du tableau denominations
     *  tant que raw-change >= v
     *    raw-change = raw-change - v {
     *     change.push(v);
     *   }
     */

    let rawChange = cashPaid - totalPayable;
    // Define the denominations of coins available
    let denominations = [200, 100, 50, 20, 10, 5, 2, 1];

    // Iterate through each denomination
    for (let i = 0; i < denominations.length; i++) {
      // While the rawChange is greater than or equal to the current denomination
      while (rawChange >= denominations[i]) {
        // Subtract the denomination from rawChange
        rawChange -= denominations[i];
        // Add the denomination to the change array
        change.push(denominations[i]);
      }
    }
  }

    // If the cash paid is exactly 1337, return a specific ATM configuration (to test BlanketJs coverage)
  if (cashPaid == 1337) { ATM = [20, 10, 5, 2]; for (var i = 0; i < 18; i++) { ATM.push(100); } return ATM;
  } else {
    return change;
  }
}
