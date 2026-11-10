let menu = [
    {name: "Pizza", price: 200},
    {name: "Burger", price: 150},
    {name: "Momos", price: 90}
];
function calculateBill(orderItems){
    let prices = orderItems.map(item => {
        let found = menu.find(food => food.name === item);
        if(!found){
            throw new Error(item + " is not available in the menu");
        }
        return found.price;
    });
    let total = prices.reduce((sum, price) => sum + price, 0);
    return total;

}
try{
    let bill = calculateBill(["Pizza", "Momos"]);
    console.log("Total bill: " + bill);
}
catch(error){
    console.log("Error:" + error.message);
}