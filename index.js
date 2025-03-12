var customerName = 'bob';
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
  }
  var bestCustomer;
function setBestCustomer() {
  bestCustomer = 'not bob';
}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}
const leastFavoriteCustomer = 'some initial value';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'some new value'; 
}