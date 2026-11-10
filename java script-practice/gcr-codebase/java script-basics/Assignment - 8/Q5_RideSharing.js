class User{
    constructor(name, rating){
        this.name = name;
        this.rating = rating;
    }
}
class Driver extends User{
    constructor(name, rating, vehicle){
        super(name, rating);
        this.vehicle = vehicle;
    }
}
class Trip{
    constructor(fromLocation, toLocation, distance){
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }
    calculateFare(driver){
        if(this.distance == null || this.distance < 0){
            throw new Error("Invalid distance");
        }
        let fare = this.distance * 10;
        return fare;
    }   
}
let driver = new Driver("Lucky",4.5,"Car");
console.log("Driver:", driver.name);
console.log("Vehicle:",driver.vehicle);
try{
    let trip = new Trip("Location A", "Location B", 15);
    let fare = trip.calculateFare(driver);
    console.log("Fare for the trip:", fare);
}
catch(error){
    console.error("Error:", error.message); 
}
