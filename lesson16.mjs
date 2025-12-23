// লেসন ১৬: জাভাস্ক্রিপ্ট মডিউল (JavaScript Modules - import/export)

/**
 * ১. Named Import: 
 * অন্য ফাইল থেকে নির্দিষ্ট জিনিস নিয়ে আসার জন্য { } ব্যবহার করা হয়।
 */
import { add, pi, subtract } from './mathUtils.mjs';

/**
 * ২. Default Import: 
 * ডিফল্ট এক্সপোর্ট আমদানির সময় আমরা যেকোনো নাম দিতে পারি।
 */
import myNumber from './mathUtils.mjs';

console.log("১. পাই-এর মান (Pi Value):", pi);
console.log("২. যোগফল (Addition):", add(10, 5));
console.log("৩. বিয়োগফল (Subtraction):", subtract(10, 5));
console.log("৪. ডিফল্ট ভ্যালু (Default Value):", myNumber);

/**
 * নোট: 
 * Node.js-এ মডিউল চালানোর জন্য আমরা ফাইলের এক্সটেনশন .mjs ব্যবহার করেছি। 
 * ব্রাউজারে এটি চালানোর সময় <script type="module" src="..."> ব্যবহার করতে হয়।
 */
