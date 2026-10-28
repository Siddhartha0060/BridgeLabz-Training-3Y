let userName = "Siddharth";

// Get the current Hour
let currentHour = new Date().getHours();

// Greeting accpording to time 
if (currentHour < 12){
    console.log(`Good Morning, ${userName}!`);
}else if(currentHour <= 17){
    console.log(`Good Afternoon, ${userName}!`);
} else {
    console.log(`Good Evening, ${userName}!`);
}