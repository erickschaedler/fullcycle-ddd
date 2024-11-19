export default class Address {

    _street: string = '';
    _number: number = 0;
    _zip: string = '';
    _city: string = '';

    constructor(street: string, number: number, zip: string, city: string) {
        this._street = street;
        this._number = number;
        this._zip = zip;
        this._city = city;

        this.validate();
    }

    validate() {
        if (!this._street || !this._number || !this._zip || !this._city) {
            throw new Error('Address is not valid');
        }
    }

    toString() {
        return `${this._street} ${this._number}, ${this._zip} ${this._city}`;
    }
}