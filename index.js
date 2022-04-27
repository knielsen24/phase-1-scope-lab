// Write your solution in this file!

var customerName = "bob";


//var upperCaseCustomerName = () => customerName = customerName.toUpperCase();

function upperCaseCustomerName() {
   customerName = customerName.toUpperCase();
   return customerName;
}
// upperCaseCustomerName();


function setBestCustomer() {
    bestCustomer = "not bob";
    return bestCustomer;
}

//console.log(setBestCustomer());

function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
    return bestCustomer;
}

//console.log(setBestCustomer());

const leastFavoriteCustomer = "ted";

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "bob";
    return leastFavoriteCustomer;
}
