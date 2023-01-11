var CustomerNew = /** @class */ (function () {
    function CustomerNew(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(CustomerNew.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerNew.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerNew;
}());
var myCustomer = new CustomerNew("Bogdan", "Skochynskyi");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
