import { CustomerModule } from "./CustomerModule";

let myCustomerFromModule = new CustomerModule("Bogdan", "Skochynskyi");
console.log(myCustomerFromModule.firstName);
console.log(myCustomerFromModule.lastName);