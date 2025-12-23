// লেসন ১২: হায়ার অর্ডার ফাংশন (Higher Order Functions - Map, Filter, Reduce)

const numbers = [1, 2, 3, 4, 5];

/**
 * ১. map(): অ্যারের প্রতিটি এলিমেন্টের ওপর কাজ করে নতুন একটি অ্যারে তৈরি করে।
 * (Creates a new array by performing a function on each array element.)
 */
const doubled = numbers.map(num => num * 2);
console.log("১. দ্বিগুণ সংখ্যা (Doubled Numbers):", doubled); // [2, 4, 6, 8, 10]


/**
 * ২. filter(): শর্ত অনুযায়ী ফিল্টার করে নতুন অ্যারে তৈরি করে।
 * (Creates a new array with array elements that pass a test.)
 */
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("২. জোড় সংখ্যা (Even Numbers):", evenNumbers); // [2, 4]


/**
 * ৩. reduce(): অ্যারের সব এলিমেন্টকে মিলিয়ে একটি মাত্র মানে (Value) নিয়ে আসে।
 * এটি মূলত ২টি জিনিস নেয়: 
 *   ১. একটি কলব্যাক ফাংশন (যেটি ২টি প্যারামিটার নেয়: accumulator এবং currentValue)
 *   ২. একটি শুরুর মান (Initial Value)
 * 
 * Accumulator: এটি হলো একটি ব্যাগের মতো, যেখানে আগের সব রেজাল্ট জমা থাকে।
 * CurrentValue: অ্যারের বর্তমান যে সংখ্যাটি নিয়ে কাজ হচ্ছে।
 */

// উদাহরণ: [1, 2, 3, 4, 5] এর যোগফল বের করা
const totalSum = numbers.reduce((accumulator, currentValue) => {
    console.log(`Accumulator: ${accumulator}, CurrentValue: ${currentValue}`);
    return accumulator + currentValue;
}, 0); // এখানে ০ হলো শুরুর মান (Initial Value)

/**
 * কিভাবে কাজ করছে (Step-by-step):
 * Step 1: accumulator = 0 (শুরু), currentValue = 1 => যোগফল ১ (পরের ধাপে এটিই accumulator)
 * Step 2: accumulator = 1, currentValue = 2 => যোগফল ৩
 * Step 3: accumulator = 3, currentValue = 3 => যোগফল ৬
 * Step 4: accumulator = 6, currentValue = 4 => যোগফল ১০
 * Step 5: accumulator = 10, currentValue = 5 => শেষ যোগফল ১৫
 */

console.log("৩. মোট যোগফল (Total Sum):", totalSum);


/**
 * ৪. chaining: একাধিক মেথড একসাথে ব্যবহার করা।
 * (Using multiple methods together.)
 */
const result = numbers
    .filter(num => num > 2) // [3, 4, 5]
    .map(num => num * 10);  // [30, 40, 50]

console.log("৪. চেইনিং রেজাল্ট (Chaining Result):", result);
