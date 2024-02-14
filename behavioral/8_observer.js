class Publisher {
    constructor() {
        this.subscribers = [];
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber)
    }

    unsubscribe(subscriber) {
        this.subscribers = this.subscribers.filter((item) => item.id !== subscriber.id)
    }

    notifySubscribers(data) {
        this.subscribers.forEach((subscriber) => {
            subscriber.update(data)
        })
    }
}

class SubscriberInterface {
    constructor(name, id) {
        this.name = name,
        this.id = id
    }

    update() {
        alert('Should be implemented')
    }
}

class Subscriber extends SubscriberInterface {
    constructor(name, id) {
        super(name, id)
    }

    update(data) {
        console.log(`${this.name} has been notified of ${data.publisherName} update`);
    }
}


const publisher = new Publisher();
const subscriberA = new Subscriber('subscriberA', 1)
const subscriberB = new Subscriber('subscriberB', 2)

publisher.subscribe(subscriberA);
publisher.subscribe(subscriberB);

publisher.notifySubscribers({publisherName: 'Barnes & Nobles'});

publisher.unsubscribe(subscriberA);

publisher.notifySubscribers({publisherName: 'a-ba-ba-ga-la-ma-ga'});