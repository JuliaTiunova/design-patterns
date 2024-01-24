class Bag {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  describe() {
    return `Bag: ${this.name} - color: ${this.color}`;
  }
}

class Shoes {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }

  describe() {
    return `Pair of ${this.name} of ${this.size}`;
  }
}

// Factory
class ProductFactory {
  createProduct() {
    throw new Error('This method should be overridden');
  }
}

class BagFactory extends ProductFactory {
  createProduct({ name, color }) {
    return new Bag(name, color);
  }
}

class ShoesFactory extends ProductFactory {
  createProduct({ name, size }) {
    return new Shoes(name, size);
  }
}

// I would remake like this
// class Product extends ProductFactory {
//   createProduct(options) {
//     const { name, color, size, category } = options;

//     const categoryType = {
//       bags: color ? new Bag(name, color) : null,
//       shoes: size ? new Shoes(name, size) : null,
//       default: null,
//     };

//     return categoryType[category] || categoryType.default;
//   }
// }

// const bagsFactory = new Product();
// const shoesFactory = new Product();

const bagsFactory = new BagFactory();
const shoesFactory = new ShoesFactory();

const bag = bagsFactory.createProduct({
  name: 'Chain bag',
  color: 'black',
  category: 'bags',
});
const shoes = shoesFactory.createProduct({
  name: 'Heels',
  size: '39 EU',
  category: 'shoes',
});

console.log(bag.describe());
console.log(shoes.describe());
