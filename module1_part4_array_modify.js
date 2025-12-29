// Module 1: Array Methods Mastery - Part 4 (Modification & Static Methods)

// ==========================================
// 6. MODIFICATION METHODS (পরিবর্তন মেথড)
// ==========================================

/**
 * 6.1 push() - শেষে এলিমেন্ট যোগ করে (original array পরিবর্তন করে)
 * Returns: নতুন length
 */
console.log("1. push() - শেষে যোগ করা:");
const arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5);
console.log(arr1); // [1, 2, 3, 4, 5]
console.log("নতুন length:", newLength);

/**
 * 6.2 pop() - শেষ এলিমেন্ট সরিয়ে ফেলে
 * Returns: সরানো এলিমেন্ট
 */
console.log("\n2. pop() - শেষটি সরানো:");
const removed = arr1.pop();
console.log("সরানো হয়েছে:", removed); // 5
console.log(arr1); // [1, 2, 3, 4]

/**
 * 6.3 shift() - প্রথম এলিমেন্ট সরিয়ে ফেলে
 */
console.log("\n3. shift() - প্রথমটি সরানো:");
const first = arr1.shift();
console.log("সরানো হয়েছে:", first); // 1
console.log(arr1); // [2, 3, 4]

/**
 * 6.4 unshift() - শুরুতে এলিমেন্ট যোগ করে
 */
console.log("\n4. unshift() - শুরুতে যোগ:");
arr1.unshift(0, 1);
console.log(arr1); // [0, 1, 2, 3, 4]

/**
 * 6.5 splice() - যেকোনো জায়গায় add/remove করে
 * splice(start, deleteCount, item1, item2, ...)
 */
console.log("\n5. splice() - মাঝখানে পরিবর্তন:");
const arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 1, 99); // index 2 থেকে 1টি মুছে 99 যোগ
console.log(arr2); // [1, 2, 99, 4, 5]

/**
 * 6.6 toSpliced() - নতুন array রিটার্ন করে (ES2023)
 */
const original = [1, 2, 3, 4, 5];
const modified = original.toSpliced(2, 1, 99);
console.log("\n6. toSpliced():");
console.log("Original:", original); // [1, 2, 3, 4, 5]
console.log("Modified:", modified); // [1, 2, 99, 4, 5]

// ==========================================
// 7. COMBINATION METHODS (কম্বিনেশন মেথড)
// ==========================================

/**
 * 7.1 concat() - দুই বা ততোধিক array জোড়া দেয়
 */
console.log("\n7. concat() - array জোড়া:");
const arr3 = [1, 2];
const arr4 = [3, 4];
const combined = arr3.concat(arr4, [5, 6]);
console.log(combined); // [1, 2, 3, 4, 5, 6]

/**
 * 7.2 join() - array কে string এ রূপান্তর করে
 */
console.log("\n8. join() - string বানানো:");
const words = ["Hello", "World"];
console.log(words.join(" ")); // "Hello World"
console.log(words.join("-")); // "Hello-World"

/**
 * 7.3 slice() - array এর একটি অংশ কপি করে
 * slice(start, end) - end inclusive নয়
 */
console.log("\n9. slice() - অংশ কপি:");
const arr5 = [1, 2, 3, 4, 5];
console.log(arr5.slice(1, 4)); // [2, 3, 4]
console.log(arr5.slice(-2)); // [4, 5] - শেষ 2টি

/**
 * 7.4 with() - নির্দিষ্ট index এর value পরিবর্তন করে নতুন array (ES2023)
 */
const arr6 = [1, 2, 3, 4];
const updated = arr6.with(2, 99);
console.log("\n10. with():");
console.log("Original:", arr6); // [1, 2, 3, 4]
console.log("Updated:", updated); // [1, 2, 99, 4]

// ==========================================
// 8. STATIC METHODS (স্ট্যাটিক মেথড)
// ==========================================

/**
 * 8.1 Array.from() - array-like বা iterable থেকে array তৈরি
 */
console.log("\n11. Array.from() - string থেকে array:");
const str = "Hello";
console.log(Array.from(str)); // ['H', 'e', 'l', 'l', 'o']

// Range তৈরি করা
const range = Array.from({ length: 5 }, (_, i) => i + 1);
console.log("Range:", range); // [1, 2, 3, 4, 5]

/**
 * 8.2 Array.of() - arguments থেকে array তৈরি
 */
console.log("\n12. Array.of():");
console.log(Array.of(1, 2, 3)); // [1, 2, 3]
console.log(Array.of(5)); // [5] - new Array(5) এর চেয়ে ভালো

/**
 * 8.3 Array.isArray() - array কি না চেক করে
 */
console.log("\n13. Array.isArray():");
console.log(Array.isArray([1, 2])); // true
console.log(Array.isArray("hello")); // false

// ==========================================
// FINAL PRACTICAL EXERCISE
// ==========================================

/**
 * Exercise: Todo List Management
 * সব array methods একসাথে ব্যবহার করে একটি todo list তৈরি করুন
 */
console.log("\n=== Todo List Manager ===");

let todos = [];

// Add todos
todos.push({ id: 1, task: "Learn JS", done: false });
todos.push({ id: 2, task: "Build Project", done: false });
todos.push({ id: 3, task: "Deploy", done: false });

console.log("All Todos:", todos);

// Mark first as done
todos[0].done = true;

// Get pending todos
const pending = todos.filter(t => !t.done);
console.log("Pending:", pending.map(t => t.task));

// Check if all done
const allDone = todos.every(t => t.done);
console.log("সব শেষ?", allDone);

console.log("\n✅ Module 1 সম্পূর্ণ! আপনি এখন Array এর সব মেথড জানেন!");
