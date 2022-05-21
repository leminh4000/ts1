let reviews: number[] = [88, 90, 92, 94, 96, 98.99, 100];
let total: number = 0;
for (let i = 0; i < reviews.length; i++) {
    console.log(`Review ${i + 1}: ${reviews[i]}`);
    total += reviews[i];
}
console.log(`Average: ${total / reviews.length}`);