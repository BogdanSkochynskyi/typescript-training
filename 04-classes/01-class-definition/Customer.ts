class Customer {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myCustomer = new Customer("Bogdan", "Skochynskyi");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

myCustomer.firstName = "Olha";
myCustomer.lastName = "Skochynska";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);