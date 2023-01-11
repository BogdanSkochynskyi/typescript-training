"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomerModule_1 = require("./CustomerModule");
var myCustomerFromModule = new CustomerModule_1.CustomerModule("Bogdan", "Skochynskyi");
console.log(myCustomerFromModule.firstName);
console.log(myCustomerFromModule.lastName);
