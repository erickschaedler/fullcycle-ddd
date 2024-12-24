import Customer from "./customer";
import Order from "./order";
import OrderService from "./order.service";
import OrderItem from "./order_item";

describe("Order service unit tests", () => {
    it ("slould place an order", () => {
        const price = 100;
        const customer = new Customer('c1', 'Customer 1');
        const item = new OrderItem('1', 'Product 1', price, '1', 1);
        const order = OrderService.placeOrder(customer, [item]);

        expect(customer.rewardPoints).toBe(price/2);
        expect(order.total()).toBe(price);
    });

    it('should calculate total price of order', () => {
        const item1 = new OrderItem('1', 'Product 1', 100, '1', 2);
        const item2 = new OrderItem('2', 'Product 2', 200, '2', 1);

        const order = new Order('1', '1', [item1]);
        const order2 = new Order('2', '2', [item2]);

        const total = OrderService.calculateTotal([order, order2]);

        expect(total).toBe(400);
    });
});