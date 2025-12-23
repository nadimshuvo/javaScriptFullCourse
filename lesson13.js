// লেসন ১৩: স্কোপ, ক্লোজার এবং হোইস্টিং (Scope, Closures, and Hoisting)

/**
 * ১. হোইস্টিং (Hoisting): 
 * জাভাস্ক্রিপ্ট কোড চালানোর আগেই ভেরিয়েবল এবং ফাংশন ডিক্লারেশনকে ওপরে নিয়ে যায়।
 * (JavaScript moves declarations to the top before execution.)
 */
console.log("১. হোইস্টিং উদাহরণ (Hoisting):");
// console.log(a); // এটি এরর দিবে কারণ let/const হোইস্ট হলেও ইনিশিয়ালাইজ হয় না।
sayHi(); // ফাংশন ডিক্লারেশন হোইস্ট হয়, তাই আগে কল করা যায়।

function sayHi() {
    console.log("   হ্যালো! আমি ফাংশন হোইস্টিং থেকে আসছি। (Hello from Hoisting!)");
}


/**
 * ২. স্কোপ (Scope): ভেরিয়েবল কোথায় এক্সেস করা যাবে।
 * (Where a variable can be accessed.)
 */
const globalVar = "আমি গ্লোবাল (Global)";

function scopeTest() {
    const localVar = "আমি লোকাল (Local)";
    console.log("\n২. স্কোপ টেস্ট (Scope):");
    console.log("   " + globalVar); // ভেতর থেকে গ্লোবাল পাওয়া যায়
    console.log("   " + localVar);
}
scopeTest();
// console.log(localVar); // এটি এরর দিবে কারণ localVar শুধু ফাংশনের ভেতরেই আছে।


/**
/**
 * ৩. ক্লোজার (Closures): 
 * সহজ কথায়: একটি ফাংশন যখন তার জন্মস্থানের (Outer Scope) ভেরিয়েবলগুলোকে 
 * "মনে রাখে" এবং পরেও সেগুলো ব্যবহার করতে পারে, তাকেই ক্লোজার বলে।
 */
function counterCreator() {
    let count = 0; // এটি বাইরের ফাংশনের ভেরিয়েবল
    
    // এই ভেতরের ফাংশনটি একটি "ব্যাগ" হিসেবে 'count' কে সাথে নিয়ে বের হয়
    return function() {
        count++; // সে তার ব্যাগে থাকা 'count' এর মান ১ বাড়াচ্ছে
        console.log("   বর্তমান কাউন্ট (Current Count):", count);
    };
}

/**
 * এখানে কী হচ্ছে?
 * ১. counterCreator কল করার পর 'count' ভেরিয়েবলটি মেমোরি থেকে মুছে যাওয়ার কথা ছিল।
 * ২. কিন্তু যেহেতু এটি একটি anonymous function রিটার্ন করেছে যা 'count' কে ব্যবহার করে,
 *    তাই জাভাস্ক্রিপ্ট 'count' কে মেমোরিতে বাঁচিয়ে রাখে।
 * ৩. একেই বলে ক্লোজার (Closure) - ফাংশনটি তার বাইরের পরিবেশকে (Environment) আটকে রেখেছে।
 */

console.log("\n৩. ক্লোজার উদাহরণ (Closures):");
const myCounter = counterCreator();
myCounter(); // ১ (সে আগের ০ মনে রেখেছে)
myCounter(); // ২ (সে আগের ১ মনে রেখেছে)
myCounter(); // ৩ (সে আগের ২ মনে রেখেছে)
