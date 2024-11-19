import Order from "./order";
import OrderItem from "./order_item";

describe('Order', () => {
    it('should throw error when creating an order without id', () => {
        const newOrdemItem = new OrderItem('1', 'Product 1', 100, '1', 1);

        expect(() => new Order('', '1', [newOrdemItem])).toThrow('ID is required');
    });

    it('should throw error when creating an order without customer id', () => {
        const newOrdemItem = new OrderItem('1', 'Product 1', 100, '1', 1);

        expect(() => new Order('1', '', [newOrdemItem])).toThrow('Customer ID is required');
    });

    it('should throw error when creating an order without items', () => {
        expect(() => new Order('1', '1', [])).toThrow('Order must have at least one item');
    });

    it('should calculate total price of order', () => {
        const item1 = new OrderItem('1', 'Product 1', 100, '1', 2);
        const item2 = new OrderItem('2', 'Product 2', 200, '2', 1);

        const order = new Order('1', '1', [item1, item2]);

        expect(order.total()).toBe(400);
    });

    it('should throw error when creating an order with invalid item quantity', () => {
        const newOrdemItem = new OrderItem('1', 'Product 1', 100, '1', 0);

        expect(() => new Order('1', '1', [newOrdemItem])).toThrow('Quantity must be greater than zero');
    });

    it('should throw error when creating an order with invalid item price', () => {
        const newOrdemItem = new OrderItem('1', 'Product 1', 0, '1', 1);

        expect(() => new Order('1', '1', [newOrdemItem])).toThrow('Price must be greater than zero');
    });
});