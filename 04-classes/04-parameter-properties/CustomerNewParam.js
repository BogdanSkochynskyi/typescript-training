"use strict";
var CustomerNewParam = /** @class */ (function () {
    function CustomerNewParam(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(CustomerNewParam.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerNewParam.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerNewParam;
}());
var myCustomerNewParam = new CustomerNewParam("Bogdan", "Skochynskyi");
console.log(myCustomerNewParam.firstName);
console.log(myCustomerNewParam.lastName);
