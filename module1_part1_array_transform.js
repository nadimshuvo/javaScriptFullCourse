// Module 1: Array Methods Mastery - Part 1 (Transformation Methods)

/**
 * জাভাস্ক্রিপ্টে Array হলো সবচেয়ে শক্তিশালী ডাটা স্ট্রাকচার।
 * এখানে আমরা সব Array মেথড শিখবো বিস্তারিতভাবে।
 */

const numbers = [1, 2, 3, 4, 5];
const users = [
    { name: "Abir", age: 25, city: "Dhaka" },
    { name: "Karim", age: 30, city: "Chittagong" },
    { name: "Rahim", age: 22, city: "Dhaka" }
];

// ==========================================
// 1. TRANSFORMATION METHODS (রূপান্তর মেথড)
// ==========================================

/**
 * 1.1 map() - প্রতিটি এলিমেন্টকে রূপান্তর করে নতুন array তৈরি করে
 * Use case: ডাটা ট্রান্সফর্ম করা, UI এর জন্য ডাটা প্রস্তুত করা
 */
console.log("1. map() - প্রতিটি সংখ্যাকে দ্বিগুণ করা:");
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Real-world example: শুধু নাম বের করা
const names = users.map(user => user.name);
console.log("শুধু নাম:", names); // ["Abir", "Karim", "Rahim"]

/**
 * 1.2 flatMap() - map করে তারপর flat করে (nested array সমতল করে)
 * Use case: যখন map করার পর nested array আসে
 */
console.log("\n2. flatMap() - প্রতিটি সংখ্যা এবং তার দ্বিগুণ:");
const flatMapped = numbers.flatMap(num => [num, num * 2]);
console.log(flatMapped); // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

/**
 * 1.3 flat() - nested array কে সমতল করে
 * Use case: জটিল nested structure সহজ করা
 */
console.log("\n3. flat() - nested array সমতল করা:");
const nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat()); // [1, 2, 3, 4, [5, 6]] - শুধু 1 level
console.log(nested.flat(2)); // [1, 2, 3, 4, 5, 6] - 2 levels
console.log(nested.flat(Infinity)); // সব level সমতল

/**
 * 1.4 forEach() - প্রতিটি এলিমেন্টের জন্য কিছু করা (কিন্তু নতুন array তৈরি করে না)
 * Use case: side effects (console.log, DOM update, etc.)
 */
console.log("\n4. forEach() - প্রতিটি ইউজার প্রিন্ট করা:");
users.forEach((user, index) => {
    console.log(`${index + 1}. ${user.name} - ${user.city}`);
});

/**
 * 1.5 entries(), keys(), values() - Iterator রিটার্ন করে
 */
console.log("\n5. entries(), keys(), values():");
for (const [index, value] of numbers.entries()) {
    console.log(`Index ${index}: ${value}`);
}

// ==========================================
// PRACTICAL EXERCISE
// ==========================================

/**
 * Exercise: একটি shopping cart থেকে শুধু product names বের করুন
 * এবং প্রতিটি নামের আগে "Product: " যোগ করুন
 */
const cart = [
    { id: 1, product: "Laptop", price: 50000 },
    { id: 2, product: "Mouse", price: 500 },
    { id: 3, product: "Keyboard", price: 1200 }
];

const productLabels = cart.map(item => `Product: ${item.product}`);
console.log("\nShopping Cart Labels:", productLabels);

/**
 * পরবর্তী পার্টে শিখবো:
 * - Filtering Methods (filter, find, findIndex, etc.)
 * - Reduction Methods (reduce, reduceRight)
 * - Searching Methods (includes, indexOf, some, every)
 */
