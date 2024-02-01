class ProcessingState {
    handle(request) {
        console.log('Замовлення обробляється.');
        request.state = new ShippedState();
    }
}

class ShippedState {
    handle(request) {
        console.log('Замовлення відправлено.');
        request.state = new DeliveredState();
    }
}

class DeliveredState {
    handle(request) {
        console.log('Замовлення доставлено.');
    }
}

class Order {
    constructor() {
        this.state = new ProcessingState();
    }

    next() {
        this.state.handle(this);
    }
}

let order = new Order();
order.next();
order.next();
order.next();
