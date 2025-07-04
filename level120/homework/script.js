
function orderCompleted(orderId) {
  console.log(`შეკვეთა #${orderId} დამთავრდა`);
}

class OrderManager {
  constructor() {
    this.activeOrders = new Map();
    this.completedOrders = new Set();
  }

  processOrder(orderId, customerName, callback) {
    // ვამატებთ აქტიურ შეკვეთებში
    this.activeOrders.set(orderId, customerName);
    console.log(
      `შეკვეთა მიღებულია: #${orderId}, მომხმარებელი: ${customerName}`
    );

    setTimeout(() => {

      this.activeOrders.delete(orderId);

      this.completedOrders.add(customerName);

      callback(orderId);

      this.printStatus();
    }, 3000);
  }

  printStatus() {
    console.log("------ აქტიური შეკვეთები ------");

    for (let [orderId, customerName] of this.activeOrders) {
      console.log(`შეკვეთა #${orderId}: ${customerName}`);
    }

    console.log("------ დასრულებული შეკვეთები ------");
    
    for (let customerName of this.completedOrders) {
      console.log(`მომხმარებელი: ${customerName}`);
    }

    console.log("--------------------------");
  }
}

const manager = new OrderManager();

manager.processOrder(101, "Liza", orderCompleted);
manager.processOrder(102, "Luka", orderCompleted);
manager.processOrder(103, "Niko", orderCompleted);
