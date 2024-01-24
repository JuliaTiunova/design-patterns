class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ProductCollection {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  // mine
  getCollection() {
    return this.products;
  }
  // Encapsulation
  // Consistency with Iterable Protocol
  // Flexibility and Control
  // Lazy Evaluation: processed one at a time
  [Symbol.iterator]() {
    let index = 0;
    let products = this.products;

    return {
      next: function () {
        if (index < products.length) {
          return { value: products[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}

// Usage
const collection = new ProductCollection();
collection.addProduct(new Product('Laptop', 1000));
collection.addProduct(new Product('Smartphone', 500));
collection.addProduct(new Product('Tablet', 300));

for (const product of collection) {
  console.log(`${product.name}: $${product.price}`);
}

// mine
// This method is totally fine for many applications,
// especially if you don't need the benefits of encapsulation
// or flexibility provided by custom iterators.
const myCollection = collection.getCollection();
myCollection.forEach((product) => {
  console.log(`${product.name}: $${product.price}`);
});
