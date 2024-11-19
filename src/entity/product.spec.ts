import Product from "./product";

describe('Product', () => {
    it('should throw error when creating a product without id', () => {
        expect(() => new Product('', 'Product 1', 100)).toThrow('ID is required');
    });

    it('should throw error when creating a product without name', () => {
        expect(() => new Product('1', '', 100)).toThrow('Name is required');
    });

    it('should throw error when creating a product without price', () => {
        expect(() => new Product('1', 'Product 1', 0)).toThrow('Price is required');
    });

    it('should change product name', () => {
        const product = new Product('1', 'Product 1', 100);

        product.changeName('Product 2');

        expect(product.name).toBe('Product 2');
    });

    it('should change product price', () => {
        const product = new Product('1', 'Product 1', 100);

        product.changePrice(200);

        expect(product.price).toBe(200);
    });
});