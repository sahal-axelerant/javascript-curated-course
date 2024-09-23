
function showAddress(address) {
    for (const key in address) {
        console.log(key, address[key]);
    }
}

let address = {
    city: "Kochi",
    state: "Kerala",
    zip: 688535
};
showAddress(address);