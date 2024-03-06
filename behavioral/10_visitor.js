class Visitor {
    visitRegular() {}
    visitSilver() {}
    visitGolden() {}
}

class SendPromotionVisitor extends Visitor {
    visitRegular(customer) {
        console.log(`Sending regular promotion to ${customer}`);
    }
    visitSilver(customer) {
        console.log(`Sending silver promotion to ${customer}`);

    }
    visitGolden(customer) {
        console.log(`Sending golden promotion to ${customer}`);

    }
}

class Customer {
    constructor(name) {
        this.name = name;
    }

    accept() {}
}

class RegularCustomer extends Customer {
    accept(visitor) {
        visitor.visitRegular(this.name)
    }
}

class SilverCustomer extends Customer {
    accept(visitor) {
        visitor.visitSilver(this.name)
    }
}

class GoldenCustomer extends Customer {
    accept(visitor) {
        visitor.visitGolden(this.name)
    }
}

const goldenCustomer = new GoldenCustomer('Yulia');
const sendPromotion = new SendPromotionVisitor();
goldenCustomer.accept(sendPromotion);