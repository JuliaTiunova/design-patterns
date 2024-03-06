class OrderProcessor {
    processOrder() {
        this.checkStock();
        this.processPayment();
        this.shipItem();
    }

    checkStock() {
        console.log("Перевірка наявності товару на складі");
    }

    processPayment() {
        console.log("Оплата замовлення");
    }

    shipItem() {
        console.log("Доставка товару");
    }
}

class DigitalOrderProcessor extends OrderProcessor {
    processPayment() {
        console.log("Оплата цифрового замовлення");
    }

    shipItem() {
        console.log("Цифровий продукт доступний для завантаження");
    }
}

class PhysicalOrderProcessor extends OrderProcessor {
    shipItem() {
        console.log("Доставка фізичного товару");
    }
}

const digitalOrder = new DigitalOrderProcessor();
digitalOrder.processOrder();

const physicalOrder = new PhysicalOrderProcessor();
physicalOrder.processOrder();
