let workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];
class FitnessAnalytics {
    constructor(data) {
        if (data.length === 0) {
            throw new Error("Dataset is empty");
        }
        this.data = data;
    }
    getActiveUsers() {
        return this.data.filter(user => user.steps > 7000);
    }
    getAverageCalories() {
        let total = this.data.reduce((sum, user) => {
            return sum + user.calories;
        }, 0);
        return total / this.data.length;
    }
    getUserSummary() {
        return this.data.map(user => {
            return user.user + " burned " + user.calories + " calories";
        });
    }
}
try {
    let fitness = new FitnessAnalytics(workoutData);
    console.log("Active Users:", fitness.getActiveUsers());
    console.log("Average Calories:", fitness.getAverageCalories());
    console.log("User Summary:", fitness.getUserSummary());
}
catch (error) {
    console.log("Error:", error.message);
}