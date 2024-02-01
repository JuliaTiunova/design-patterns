class CartSnapshot {
    constructor(items) {
        this.items = [...items];
    }
}

class Cart {
    constructor() {
        this.items = [];
        this.snapshots = [];
    }

    addProduct(product) {
        this.items.push(product);
    }

    removeProduct(productId) {
        this.items = this.items.filter(item => item.id !== productId);
    }

    saveSnapshot() {
        this.snapshots.push(new CartSnapshot(this.items));
    }

    restoreSnapshot(snapshotIndex) {
        if (snapshotIndex < this.snapshots.length) {
            this.items = [...this.snapshots[snapshotIndex].items];
        }
    }

    getItems() {
        return this.items;
    }
}

let cart = new Cart();
cart.addProduct({ id: 1, name: 'Product 1', price: 100 });
cart.addProduct({ id: 2, name: 'Product 2', price: 200 });

cart.saveSnapshot();

cart.addProduct({ id: 3, name: 'Product 3', price: 300 });

cart.restoreSnapshot(0);

console.log(cart.getItems());
