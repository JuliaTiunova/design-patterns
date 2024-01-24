class Customer {
    constructor(mediator) {
        this.mediator = mediator;
    }

    makeOrder(product, quantity) {
        this.mediator.placeOrder(this, product, quantity);
    }
}

class Product {
    constructor(name, stock, mediator) {
        this.name = name;
        this.stock = stock;
        this.mediator = mediator;
    }

    updateStock(quantity) {
        this.stock += quantity;
        this.mediator.notifyStockChange(this, quantity);
    }
}

class Order {
    constructor(mediator) {
        this.mediator = mediator;
    }

    processOrder(customer, product, quantity) {
        if (product.stock < quantity) {
            console.log(`Order cannot be processed. Not enough stock for ${product.name}.`);
            return;
        }

        product.updateStock(-quantity);
        console.log(`Order processed for ${customer.constructor.name}: ${quantity} x ${product.name}`);
    }
}

class ECommerceMediator {
    constructor() {
        this.customers = [];
        this.products = [];
        this.orders = new Order(this);
    }

    registerCustomer(customer) {
        this.customers.push(customer);
    }

    registerProduct(product) {
        this.products.push(product);
    }

    placeOrder(customer, product, quantity) {
        this.orders.processOrder(customer, product, quantity);
    }

    notifyStockChange(product, quantityChange) {
        console.log(`Stock updated for ${product.name}. New stock: ${product.stock}`);
    }
}

// Usage
const mediator = new ECommerceMediator();
const customer = new Customer(mediator);
const product = new Product("Smartphone", 100, mediator);

mediator.registerCustomer(customer);
mediator.registerProduct(product);

// Customer places an order
customer.makeOrder(product, 2);

// Update stock for a product
product.updateStock(50);
