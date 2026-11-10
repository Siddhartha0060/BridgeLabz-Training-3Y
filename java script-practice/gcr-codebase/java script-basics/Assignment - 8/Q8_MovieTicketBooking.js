class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}
MovieTicket.prototype.printTicket = function() {
    console.log("Movie:", this.movieName);
    console.log("Seat:", this.seatNo);
    console.log("Price:", this.price);
};
class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }
    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}
let t1 = new OnlineTicket("Avengers", "A1", 200, 30);
t1.printTicket();
console.log("Convenience Fee:", t1.convenienceFee);
console.log("Total Amount:", t1.getTotalAmount());