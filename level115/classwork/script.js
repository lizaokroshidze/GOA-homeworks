class product {
    constructor (name, price){
        this.name = name;
        this.price = price;
    };

    displayProduct() {
        console.log(`product: ${this.name}`);
        console.log(`price: $${this.price.toFixed(2)}`);
    };

    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    };
}

const salesTax = 0.5;

const product1 = new product("shirt", 19.99);
const product2 = new product("dress", 100.00);


product1.displayProduct();
product2.displayProduct();

const total = product1.calculateTotal(salesTax) + product2.calculateTotal(salesTax);

console.log(`Total price (with tax): $${total.toFixed(2)}`);

