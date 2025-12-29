// Module 1: Array Methods Mastery - Part 3 (Reduction & Sorting Methods)

const numbers = [5, 2, 8, 1, 9, 3];
const cart = [
    { product: "Laptop", price: 50000, quantity: 1 },
    { product: "Mouse", price: 500, quantity: 2 },
    { product: "Keyboard", price: 1200, quantity: 1 }
];

// ==========================================
// 4. REDUCTION METHODS (রিডাকশন মেথড)
// ==========================================

/**
 * 4.1 reduce() - সব এলিমেন্টকে একটি মানে রিডিউস করে
 * Use case: যোগফল, গুণফল, object তৈরি, grouping
 */
console.log("1. reduce() - মোট যোগফল:");
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 28

// Real-world: Shopping cart এর মোট দাম
const totalPrice = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
}, 0);
console.log("মোট বিল:", totalPrice); // 51700

/**
 * 4.2 reduceRight() - ডান থেকে বামে reduce করে
 */
console.log("\n2. reduceRight() - ডান থেকে concatenate:");
const words = ["Hello", "World", "JavaScript"];
const reversed = words.reduceRight((acc, word) => acc + " " + word, "");
console.log(reversed.trim()); // "JavaScript World Hello"

// ==========================================
// 5. SORTING METHODS (সর্টিং মেথড)
// ==========================================

/**
 * 5.1 sort() - array কে sort করে (original array পরিবর্তন করে!)
 * Use case: ডাটা সাজানো
 */
console.log("\n3. sort() - সংখ্যা সাজানো:");
const unsorted = [5, 2, 8, 1, 9];
unsorted.sort((a, b) => a - b); // ascending
console.log("Ascending:", unsorted);

unsorted.sort((a, b) => b - a); // descending
console.log("Descending:", unsorted);

/**
 * 5.2 toSorted() - নতুন sorted array রিটার্ন করে (ES2023)
 * Original array অপরিবর্তিত থাকে
 */
const original = [5, 2, 8, 1, 9];
const sorted = original.toSorted((a, b) => a - b);
console.log("\n4. toSorted():");
console.log("Original:", original); // [5, 2, 8, 1, 9]
console.log("Sorted:", sorted); // [1, 2, 5, 8, 9]

/**
 * 5.3 reverse() - array উল্টে দেয় (original পরিবর্তন করে)
 */
console.log("\n5. reverse():");
const arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]

/**
 * 5.4 toReversed() - নতুন reversed array (ES2023)
 */
const orig = [1, 2, 3];
const rev = orig.toReversed();
console.log("\n6. toReversed():");
console.log("Original:", orig); // [1, 2, 3]
console.log("Reversed:", rev); // [3, 2, 1]

// ==========================================
// PRACTICAL EXERCISE
// ==========================================

/**
 * Exercise: Student marks analysis
 * 1. মোট নম্বর বের করুন
 * 2. গড় নম্বর বের করুন
 * 3. সর্বোচ্চ নম্বর অনুযায়ী সাজান
 */
const students = [
    { name: "Abir", marks: 85 },
    { name: "Karim", marks: 92 },
    { name: "Rahim", marks: 78 },
    { name: "Sadia", marks: 95 }
];

console.log("\n=== Student Analysis ===");

const totalMarks = students.reduce((sum, s) => sum + s.marks, 0);
console.log("মোট নম্বর:", totalMarks);

const average = totalMarks / students.length;
console.log("গড় নম্বর:", average.toFixed(2));

const toppers = students.toSorted((a, b) => b.marks - a.marks);
console.log("টপার লিস্ট:", toppers);
