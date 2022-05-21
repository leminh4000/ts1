var reviews = [88, 90, 92, 94, 96, 98.99, 100];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log("Review ".concat(i + 1, ": ").concat(reviews[i]));
    total += reviews[i];
}
console.log("Average: ".concat(total / reviews.length));
