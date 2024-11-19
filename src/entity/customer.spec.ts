import Address from "./address";
import Customer from "./customer";

describe('Customer', () => {

    it('should throw error when creating a customer without id', () => {
        expect(() => new Customer('', 'John Doe')).toThrow('ID is required');
    });

    it('should throw error when creating a customer without name', () => {
        expect(() => new Customer('1', '')).toThrow('Name is required');
    });

    it('should throw error when changing name to empty', () => {
        const customer = new Customer('1', 'John Doe');

        customer.changeName('Jane');

        expect(customer.name).toBe('Jane');
    });

    it('should throw error when activating customer without address', () => {
        const customer = new Customer('1', 'John Doe');
        const address = new Address('1', 123, 'Main St', 'Springfield');
        customer.setAddress(address);

        customer.activate();

        expect(customer.isActive).toBe(true);
    });

    it('should deactivate customer', () => {
        const customer = new Customer('1', 'John Doe');
        customer.deactivate();

        expect(customer.isActive).toBe(false);
    });

    it('should thorw error when activating customer without address', () => {
        const customer = new Customer('1', 'John Doe');

        expect(() => customer.activate()).toThrow('Address is mandatory to activate customer');
    });
});