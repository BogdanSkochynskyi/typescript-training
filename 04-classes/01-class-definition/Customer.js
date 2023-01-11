var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
var myCustomer = new Customer("Bogdan", "Skochynskyi");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
myCustomer.firstName = "Olha";
myCustomer.lastName = "Skochynska";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
