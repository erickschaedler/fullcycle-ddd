import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/order_item";

let customer = new Customer('1', 'John Doe');
let address = new Address('AvenidaMS', 1234, '12345-000', 'SJH');
customer.setAddress(address);
customer.activate();

const item1 = new OrderItem('1', 'Product 1', 100);
const item2 = new OrderItem('2', 'Product 2', 200);

// Agregados diferentes, enttão usa o id. Mesmo agregado os itens ficam dentro do pedido
const order = new Order('1', '1', [item1, item2]);