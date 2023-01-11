"use strict";
var CustomerNewConfig = /** @class */ (function () {
    function CustomerNewConfig(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(CustomerNewConfig.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerNewConfig.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerNewConfig;
}());
var myCustomerNewConfig = new CustomerNewConfig("Bogdan", "Skochynskyi");
console.log(myCustomerNewConfig.firstName);
console.log(myCustomerNewConfig.lastName);
