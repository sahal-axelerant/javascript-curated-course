

let circle = {
    radius: 1,
    area: 0,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.radius);
console.log(circle.area);