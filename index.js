

// Constructor fn.
function Address(city, state, zipcode) {
    this.city = city;
    this.state = state;
    this.zipcode = zipcode;
}

let myAddress = new Address('Kochi', 'Kerala', 688535);

let myWorkAddress = new Address('Kochi', 'Kerala', 688535);

let myAddress1 = myAddress;

console.log(areEqual(myAddress, myWorkAddress));
console.log(areSame(myAddress, myWorkAddress));
console.log(areEqual(myAddress, myAddress1));
console.log(areSame(myAddress, myAddress1));

function areEqual(address1, address2) {
    for (const key in address1) {
        if (address1[key] != address2[key]) {
            return false;
        }
    }
    return true;
}

function areSame(address1, address2) {
    return address1 === address2;
}