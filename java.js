let car1 = {
    make: "Toyota",
    model: "Camry",
    year: 2022,
    category: "Sedan",
    color: "Silver",
    price: 28000,
    photo: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1000",
    fuelType: "Gasoline",
    horsepower: 203,
    seatingCapacity: 5,

    getPerformanceRating: function () {
        if (this.horsepower < 200) {
            return "Low Performance";
        } else if (this.horsepower <= 400) {
            return "Moderate Performance";
        } else {
            return "High Performance";
        }
    },

    getPriceCategory: function () {
        if (this.price < 30000) {
            return "Budget Friendly";
        } else if (this.price <= 60000) {
            return "Mid Range";
        } else {
            return "Luxury";
        }
    }
};

let car2 = {
    make: "Ford",
    model: "Mustang",
    year: 2023,
    category: "Sports Car",
    color: "Red",
    price: 55000,
    photo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000",
    fuelType: "Gasoline",
    horsepower: 450,
    seatingCapacity: 4,

    getPerformanceRating: function () {
        if (this.horsepower < 200) {
            return "Low Performance";
        } else if (this.horsepower <= 400) {
            return "Moderate Performance";
        } else {
            return "High Performance";
        }
    },

    getPriceCategory: function () {
        if (this.price < 30000) {
            return "Budget Friendly";
        } else if (this.price <= 60000) {
            return "Mid Range";
        } else {
            return "Luxury";
        }
    }
};

let car3 = {
    make: "Tesla",
    model: "Model S",
    year: 2024,
    category: "Electric",
    color: "Black",
    price: 85000,
    photo: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1000",
    fuelType: "Electric",
    horsepower: 670,
    seatingCapacity: 5,

    getPerformanceRating: function () {
        if (this.horsepower < 200) {
            return "Low Performance";
        } else if (this.horsepower <= 400) {
            return "Moderate Performance";
        } else {
            return "High Performance";
        }
    },

    getPriceCategory: function () {
        if (this.price < 30000) {
            return "Budget Friendly";
        } else if (this.price <= 60000) {
            return "Mid Range";
        } else {
            return "Luxury";
        }
    }
};

let car4 = {
    make: "Honda",
    model: "Civic",
    year: 2021,
    category: "Sedan",
    color: "Blue",
    price: 26000,
    photo: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1000",
    fuelType: "Gasoline",
    horsepower: 158,
    seatingCapacity: 5,

    getPerformanceRating: function () {
        if (this.horsepower < 200) {
            return "Low Performance";
        } else if (this.horsepower <= 400) {
            return "Moderate Performance";
        } else {
            return "High Performance";
        }
    },

    getPriceCategory: function () {
        if (this.price < 30000) {
            return "Budget Friendly";
        } else if (this.price <= 60000) {
            return "Mid Range";
        } else {
            return "Luxury";
        }
    }
};

let car5 = {
    make: "BMW",
    model: "M4",
    year: 2024,
    category: "Sports Car",
    color: "White",
    price: 92000,
    photo: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1000",
    fuelType: "Gasoline",
    horsepower: 503,
    seatingCapacity: 4,

    getPerformanceRating: function () {
        if (this.horsepower < 200) {
            return "Low Performance";
        } else if (this.horsepower <= 400) {
            return "Moderate Performance";
        } else {
            return "High Performance";
        }
    },

    getPriceCategory: function () {
        if (this.price < 30000) {
            return "Budget Friendly";
        } else if (this.price <= 60000) {
            return "Mid Range";
        } else {
            return "Luxury";
        }
    }
};

let cars = [car1, car2, car3, car4, car5];

let buttons = document.querySelectorAll(".ship-btn");

buttons[0].addEventListener("click", function () {
    displayCar(car1);
});

buttons[1].addEventListener("click", function () {
    displayCar(car2);
});

buttons[2].addEventListener("click", function () {
    displayCar(car3);
});

buttons[3].addEventListener("click", function () {
    displayCar(car4);
});

buttons[4].addEventListener("click", function () {
    displayCar(car5);
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