// লেসন ২: ভেরিয়েবল এবং ডেটা টাইপ (Variables and Data Types)

// ১. ভেরিয়েবল (Variables): তথ্য জমা রাখার পাত্র।
// আধুনিক JavaScript-এ আমরা 'let' এবং 'const' ব্যবহার করি।

let name = "Abir"; // 'let' দিয়ে ভেরিয়েবল বানালে পরে তার মান পরিবর্তন করা যায়।
const age = 25;    // 'const' (constant) দিয়ে বানালে তার মান পরিবর্তন করা যায় না।

console.log("আমার নাম: " + name);
console.log("আমার বয়স: " + age);

// নাম পরিবর্তন করছি
name = "Karim"; 
console.log("নতুন নাম: " + name);

// age = 26; // এটি করলে এরর (Error) আসবে, কারণ const পরিবর্তনযোগ্য নয়।

// ২. ডেটা টাইপ (Data Types):
let stringExample = "Hello"; // String (লেখা)
let numberExample = 100;     // Number (সংখ্যা)
let booleanExample = true;   // Boolean (হ্যাঁ অথবা না)
let undefinedExample;        // Undefined (মান দেওয়া হয়নি)
let nullExample = null;      // Null (খালি)

console.log("টাইপ চেক:");
console.log(typeof stringExample); // string
console.log(typeof numberExample); // number
console.log(typeof booleanExample); // boolean
