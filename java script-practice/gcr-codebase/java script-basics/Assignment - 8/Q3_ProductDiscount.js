function Product(name,price){
    this.name = name;
    this.price = price;
}
Product.prototype.applyDiscount = function(percent){
    let discount = (this.price * percent) / 100;
    let newPrice = this.price - discount;
    return newPrice;
};
let p1 = new Product("Laptop", 50000);
let p2 = new Product("SmartPhone", 25000);
let p3 = new Product("Headphones",5000);

console.log(p1.name, p1.applyDiscount(10));
console.log(p2.name, p2.applyDiscount(15));
console.log(p3.name, p3.applyDiscount(20));