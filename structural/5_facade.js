class PaymentSystem {
    processPayment(total) {
        console.log(`Processing $${total}`);
    }
}

class DeliverySystem {
    processDelivery(item) {
        console.log(`Organizing ${item} delivery`);
    }
}

class OrderSystem {
    placeOrder(details) {
        console.log(`Forming order: ${Object.values(details).join(', ')}`);
    }
}

class OrderFacade {
    constructor() {
        this.payment = new PaymentSystem();
        this.delivery = new DeliverySystem();
        this.order = new OrderSystem();
    }

    completeOrder(orderDetails, paymentTotal) {
        this.payment.processPayment(paymentTotal);
        this.delivery.processDelivery(orderDetails.item);
        this.order.placeOrder(orderDetails)
    }
}

const orderFacade = new OrderFacade();

orderFacade.completeOrder({item: `sport car`, quantity: 1, state: 'brand new'}, 300000)