// লেসন ১৮: প্রোটোটাইপ এবং প্রোটোটাইপাল ইনহেরিটেন্স (Prototype and Prototypal Inheritance)

/**
 * ১. প্রোটোটাইপ (Prototype): 
 * জাভাস্ক্রিপ্টে প্রায় প্রতিটি অবজেক্টেরই একটি নিজস্ব 'Prototype' থাকে। 
 * এটি মূলত একটি ডিফল্ট অবজেক্ট যা থেকে অন্য অবজেক্টগুলো বৈশিষ্ট্য শেয়ার করে।
 */
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// আমরা যদি চাই সব 'Person' একই মেথড শেয়ার করুক, তবে সেটি প্রোটোটাইপে যোগ করতে হয়।
Person.prototype.greet = function() {
    console.log(`হ্যালো, আমি ${this.name}। আমার বয়স ${this.age} বছর।`);
};

const p1 = new Person("Abir", 25);
const p2 = new Person("Karim", 30);

p1.greet();
p2.greet();

/**
 * ২. প্রোটোটাইপাল ইনহেরিটেন্স (Prototypal Inheritance): 
 * একটি অবজেক্ট যখন অন্য অবজেক্টের বৈশিষ্ট্য ধার করে বা ইনহেরিট করে।
 */
const animal = {
    eats: true,
    walk: function() {
        console.log("প্রাণীটি হাঁটছে... (Animal is walking)");
    }
};

const rabbit = {
    jumps: true,
    // আমরা rabbit এর প্রোটোটাইপ হিসেবে animal কে সেট করছি
    __proto__: animal 
};

console.log("\n২. ইনহেরিটেন্স উদাহরণ:");
console.log("খরগোশ কি খায়? (Does rabbit eat?):", rabbit.eats); // true (animal থেকে আসছে)
rabbit.walk(); // animal এর মেথড ব্যবহার করছে


/**
 * ৩. কেন এটি গুরুত্বপূর্ণ?
 * মেমোরি বাঁচানোর জন্য! একই ফাংশন বারবার তৈরি না করে প্রোটোটাইপে রাখলে 
 * সব অবজেক্ট সেটি একসাথেই ব্যবহার করতে পারে।
 */

console.log("\n৩. অবজেক্টের প্রোটোটাইপ চেক করা:");
console.log(Object.getPrototypeOf(rabbit) === animal); // true
