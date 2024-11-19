import OrderItem from "./order_item";

export default class Order {
    private _id: string;
    private _customerId: string;
    private _items: OrderItem[];
    private _total: number;

    constructor(id: string, customerId: string, items: OrderItem[]) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;
        this._total = this.total();
        this.validate();
    }

    validate() {
        if (!this._id) {
            throw new Error('ID is required');
        }

        if (!this._customerId) {
            throw new Error('Customer ID is required');
        }

        if (!this._items || this._items.length === 0) {
            throw new Error('Order must have at least one item');
        }

        this._items.forEach(item => {
            if (item.quantity <= 0) {
                throw new Error('Quantity must be greater than zero');
            }

            if (item.price <= 0) {
                throw new Error('Price must be greater than zero');
            }
        });
    }

    total(): number {
        return this._items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }
}