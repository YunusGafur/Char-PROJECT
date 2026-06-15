let car3 = {
    make: "Voyager",
    model: "Elite",
    year: 3026,
    category: "Racer/interceptor",
    color: "Intersetllar Black",
    price: 83315000,
    photo: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1000",
    fuelType: "Electric Induction Core",
    horsepower: 679974190,
    seatingCapacity: 4,

}
let car1 = {
    make: "Nova X1",
    model: "Glactical",
    year: 3042,
    category: "Cargo/Rover",
    color: "Ionized Grey",
    price: 638110,
    photo: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1000",
    fuelType: "Fission-Corevx9",
    horsepower: 20000000,
    seatingCapacity: 13,
};

let car2 = {
    make: "Falcon",
    model: "GT",
    year: 2997,
    category: "Hauler",
    color: "Red Shift violet",
    price: 994873,
    photo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000",
    fuelType: "CombustionXSolarRadiation",
    horsepower: 45044000,
    seatingCapacity: 8,
}
let car4 = {
    make: "Interceptor",
    model: "V-77",
    year: 3042,
    category: "Warship/warper",
    color: "Voidridden 98-Semi",
    price: 260999999375927000,
    photo: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1000",
    fuelType: "Highly Specialized Fusion Reactor w Multi-Quantum stabilization",
    horsepower: 158000e+9,
    seatingCapacity: 3,
}
let car5 = {
    make: "FreightMaster",
    model: "9000",
    year: 3009,
    category: "Colossal Cargo/Heavy Transport",
    color: "Carbon Tungsten Silver Alloy",
    price: 920001098,
    photo: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1000",
    fuelType: "Fission Reactor/Particle Accelerator",
    horsepower: 5030003875002,
    seatingCapacity: 48,
}
let cars = [car1, car2, car3, car4, car5];
let buttons = document.querySelectorAll(".ship-btn");
buttons[0].addEventListener("click", function () {
    displayCar(car1);
});
buttons[4].addEventListener("click", function () {
    displayCar(car5);
});
buttons[3].addEventListener("click", function () {
    displayCar(car4);
});
buttons[1].addEventListener("click", function () {
    displayCar(car2);
});

buttons[2].addEventListener("click", function () {
    displayCar(car3);
});
function displayCar(car) {

    document.getElementById("photo").src = car.photo;
    document.getElementById("shipTitle").textContent =
        car.make + " " + car.model;
    document.getElementById("make").textContent = car.make;
    document.getElementById("model").textContent = car.model;
    document.getElementById("year").textContent = car.year;
    document.getElementById("category").textContent = car.category;
    document.getElementById("color").textContent = car.color;
    document.getElementById("price").textContent = "$" + car.price;
    document.getElementById("fuelType").textContent = car.fuelType;
    document.getElementById("horsepower").textContent = car.horsepower;
    document.getElementById("seatingCapacity").textContent = car.seatingCapacity;

    document.getElementById("outputArea").textContent =
        "Performance Rating: " + car.getPerformanceRating() +
        "Price Category: " + car.getPriceCategory();
}