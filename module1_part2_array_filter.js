// Module 1: Array Methods Mastery - Part 2 (Filtering & Searching Methods)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const users = [
    { name: "Abir", age: 25, city: "Dhaka", active: true },
    { name: "Karim", age: 30, city: "Chittagong", active: false },
    { name: "Rahim", age: 22, city: "Dhaka", active: true },
    { name: "Sadia", age: 28, city: "Sylhet", active: true }
];

// ==========================================
// 2. FILTERING METHODS (ফিল্টারিং মেথড)
// ==========================================

/**
 * 2.1 filter() - শর্ত অনুযায়ী এলিমেন্ট ফিল্টার করে নতুন array তৈরি করে
 * Use case: ডাটা ফিল্টার করা, search functionality
 */
console.log("1. filter() - জোড় সংখ্যা খুঁজে বের করা:");
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

// Real-world: শুধু Dhaka এর users
const dhakaUsers = users.filter(user => user.city === "Dhaka");
console.log("Dhaka এর ইউজার:", dhakaUsers);

/**
 * 2.2 find() - প্রথম ম্যাচ করা এলিমেন্ট রিটার্ন করে (না পেলে undefined)
 * Use case: একটি নির্দিষ্ট item খুঁজে বের করা
 */
console.log("\n2. find() - বয়স 30 এর ইউজার খুঁজুন:");
const user30 = users.find(user => user.age === 30);
console.log(user30); // { name: "Karim", ... }

/**
 * 2.3 findIndex() - প্রথম ম্যাচ করা এলিমেন্টের index রিটার্ন করে
 * Use case: কোন position এ আছে তা জানা
 */
console.log("\n3. findIndex() - Karim এর index:");
const karimIndex = users.findIndex(user => user.name === "Karim");
console.log(karimIndex); // 1

/**
 * 2.4 findLast() & findLastIndex() - শেষ থেকে খোঁজা (ES2023)
 */
console.log("\n4. findLast() - শেষ active user:");
const lastActive = users.findLast(user => user.active);
console.log(lastActive); // Sadia

// ==========================================
// 3. SEARCHING METHODS (সার্চিং মেথড)
// ==========================================

/**
 * 3.1 includes() - array তে কোনো value আছে কি না (true/false)
 * Use case: দ্রুত চেক করা
 */
console.log("\n5. includes() - 5 আছে কি?");
console.log(numbers.includes(5)); // true
console.log(numbers.includes(15)); // false

/**
 * 3.2 indexOf() - প্রথম occurrence এর index (না পেলে -1)
 */
console.log("\n6. indexOf() - 7 এর position:");
console.log(numbers.indexOf(7)); // 6

/**
 * 3.3 lastIndexOf() - শেষ occurrence এর index
 */
const duplicates = [1, 2, 3, 2, 1];
console.log("\n7. lastIndexOf() - 2 এর শেষ position:");
console.log(duplicates.lastIndexOf(2)); // 3

/**
 * 3.4 some() - অন্তত একটি এলিমেন্ট শর্ত পূরণ করে কি না (true/false)
 * Use case: validation
 */
console.log("\n8. some() - কোনো inactive user আছে?");
console.log(users.some(user => !user.active)); // true

/**
 * 3.5 every() - সব এলিমেন্ট শর্ত পূরণ করে কি না (true/false)
 * Use case: সব ডাটা valid কি না চেক করা
 */
console.log("\n9. every() - সবাই কি 18+ বয়সী?");
console.log(users.every(user => user.age >= 18)); // true

// ==========================================
// PRACTICAL EXERCISE
// ==========================================

/**
 * Exercise: একটি e-commerce product list থেকে:
 * 1. দাম 1000 এর কম সব products
 * 2. stock আছে কি না চেক করুন
 * 3. প্রথম out-of-stock product খুঁজুন
 */
const products = [
    { name: "Laptop", price: 50000, stock: 5 },
    { name: "Mouse", price: 500, stock: 0 },
    { name: "Keyboard", price: 1200, stock: 3 },
    { name: "Monitor", price: 15000, stock: 0 }
];

console.log("\n=== E-commerce Exercise ===");
const affordable = products.filter(p => p.price < 1000);
console.log("সাশ্রয়ী পণ্য:", affordable);

const hasStock = products.some(p => p.stock > 0);
console.log("স্টক আছে?", hasStock);

const outOfStock = products.find(p => p.stock === 0);
console.log("প্রথম স্টক শেষ:", outOfStock.name);
