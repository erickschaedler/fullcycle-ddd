import Product from './product';
import ProductService from './product.service';

describe("Product service unit tests", () => {
    it('should change the price of all products', () => {
        const product1 = new Product('product1', "Product 1", 100);
        const product2 = new Product('product2', "Product 2", 200);
        const products = [product1, product2];

        ProductService.increasePrice(products, 10);

        expect(product1.price).toBe(110);
        expect(product2.price).toBe(220);
    });
});