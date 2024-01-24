class CatalogComponent {
    constructor(name) {
        this.name = name;
    }

    printName() {
        throw new Error("Must be implemented")
    }
}

class Product extends CatalogComponent {
    constructor(name) {
        super(name);
    }

    printName() {
        console.log(this.name);
    }
}

class Category extends CatalogComponent {
    constructor(name) {
        super(name);
        this.products = [];
    }

    add(product) {
        this.products.push(product)
    }

    printName() {
        this.products.forEach(product => product.printName());
    }
}

const shoes = new Category('Shoes');
const bags = new Category('Bags');
const rootCategory = new Category('Root')

const sneakerBlack = new Product('black sneaker');
const toteBag = new Product('tote bag');
const greenBag = new Product('green bag');
const sportCar = new Product('sport car');

shoes.add(sneakerBlack);

bags.add(toteBag);
bags.add(greenBag);

rootCategory.add(sportCar);

rootCategory.add(shoes);
rootCategory.add(bags);

rootCategory.printName();