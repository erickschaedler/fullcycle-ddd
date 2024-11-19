import Address from "./address";

export default class Customer {
    private _id: string;
    private _name: string = '';
    private _address!: Address
    private _active: boolean = false;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate();
    }

    get name() {
        return this._name;
    }

    validate() {
        if (!this._id) {
            throw new Error('ID is required');
        }

        if (!this._name) {
            throw new Error('Name is required');
        }
    }

    changeName(name: string) {
        this._name = name;
    }

    get isActive() {
        return this._active;
    }

    activate() {
        if (!this._address) {
            throw new Error('Address is mandatory to activate customer');
        }

        this._active = true;
    }

    deactivate() {
        this._active = false;
    }

    setAddress(address: Address) {
        this._address = address;
    }
}

let newCustomer = new Customer('1', 'John Doe');