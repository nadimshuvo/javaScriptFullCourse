// লেসন ৩: বেসিক অপারেটরস (Basic Operators)

// ১. গাণিতিক অপারেটর (Arithmetic Operators)
let a = 10;
let b = 5;

console.log("যোগ (Addition):", a + b);      // ১৫
console.log("বিয়োগ (Subtraction):", a - b);  // ৫
console.log("গুন (Multiplication):", a * b); // ৫০
console.log("ভাগ (Division):", a / b);       // ২
console.log("ভাগশেষ (Remainder):", a % 3);  // ১

// ২. তুলনা অপারেটর (Comparison Operators)
console.log("সমান কি না (Equal):", a == 10);      // true
console.log("অসমান কি না (Not Equal):", a != b);  // true
console.log("বড় কি না (Greater):", a > b);        // true
console.log("ছোট কি না (Less):", a < b);           // false

// ৩. লজিক্যাল অপারেটর (Logical Operators)
let isAdult = true;
let hasLicense = false;

// AND (&&) - সব শর্ত সত্যি হতে হবে
console.log("ড্রাইভ করতে পারবে? (AND):", isAdult && hasLicense); // false

// OR (||) - যেকোনো একটি শর্ত সত্যি হলেই হবে
console.log("ড্রাইভ করতে পারবে? (OR):", isAdult || hasLicense);  // true

// NOT (!) - উল্টে দেওয়া
console.log("উল্টো (NOT):", !isAdult); // false
