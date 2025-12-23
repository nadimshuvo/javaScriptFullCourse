// লেসন ১৭: কল, অ্যাপ্লাই এবং বাইন্ড (Call, Apply, and Bind)

/**
 * কেন এগুলো ব্যবহার করবো?
 * জাভাস্ক্রিপ্টে 'this' কীওয়ার্ড কোনো অবজেক্টের ভেতর থাকলে সেই অবজেক্টকে নির্দেশ করে। 
 * কিন্তু মাঝে মাঝে আমাদের 'this' কে ম্যানুয়ালি পরিবর্তন করতে হয়। 
 * তখন আমরা call, apply, অথবা bind ব্যবহার করি।
 */

const person1 = {
    firstName: "Abir",
    lastName: "Hossain",
    fullName: function(city, country) {
        console.log(`${this.firstName} ${this.lastName} lives in ${city}, ${country}`);
    }
};

const person2 = {
    firstName: "Karim",
    lastName: "Uddin"
};

/**
 * ১. call(): এটি সরাসরি একটি ফাংশনকে কল করে। 
 * প্রথম প্যারামিটার হিসেবে 'this' এর মান দিতে হয়, এরপর কমা দিয়ে অন্যান্য আর্গুমেন্ট।
 */
console.log("১. call() উদাহরণ:");
person1.fullName.call(person2, "Dhaka", "Bangladesh");


/**
 * ২. apply(): এটি call() এর মতোই কাজ করে। 
 * পার্থক্য শুধু হলো, আর্গুমেন্টগুলো একটি অ্যারের (Array) মধ্যে পাঠাতে হয়।
 */
console.log("\n২. apply() উদাহরণ:");
person1.fullName.apply(person2, ["Chittagong", "Bangladesh"]);


/**
 * ৩. bind(): এটি সরাসরি মেথডকে কল করে না। 
 * বরং এটি একটি নতুন ফাংশন রিটার্ন করে যা আমরা পরে কল করতে পারি।
 */
console.log("\n৩. bind() উদাহরণ:");
const karrimGreet = person1.fullName.bind(person2, "Sylhet", "Bangladesh");

// অনেক পরে বা অন্য কোত্থাও কল করা হচ্ছে
karrimGreet();

/**
 * সারসংক্ষেপ:
 * call: তখনি চালায়, কমা দিয়ে ডাটা নেয়।
 * apply: তখনি চালায়, অ্যারে দিয়ে ডাটা নেয়।
 * bind: পরে চালানোর জন্য একটি কপি তৈরি করে রাখে।
 */
