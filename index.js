
// Factory fn
function createAddress(city, state, zipcode) {
    return {
        city,
        state,
        zipcode
    }
}

// Constructor fn.
function Address(city, state, zipcode) {
    this.city = city;
    this.state = state;
    this.zipcode = zipcode;
}

let myAddress = createAddress('Kochi', 'Kerala', 688535);
console.log(myAddress);

let myWorkAddress = new Address('Bangalore', 'Karnataka', 688535);
console.log(myWorkAddress);