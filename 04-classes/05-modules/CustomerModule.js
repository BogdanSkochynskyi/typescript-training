"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModule = void 0;
var CustomerModule = /** @class */ (function () {
    function CustomerModule(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(CustomerModule.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerModule.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerModule;
}());
exports.CustomerModule = CustomerModule;
