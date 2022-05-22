class Customer {
    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    private _firstName: string;
    private _lastName: string;

    constructor(first: string, last: string) {
        this._firstName = first;
        this._lastName = last;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }
}

let customer: Customer = new Customer("Minh", "Nguyen");
console.log(`Hi ${customer.firstName} ${customer.lastName}`);