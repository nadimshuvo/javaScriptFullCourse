// লেসন ১৯: রেগুলার এক্সপ্রেশন বা রিজেক্স (Regular Expressions - Regex)

/**
 * রিজেক্স (Regex) কী?
 * এটি মূলত টেক্সটের মধ্যে কোনো নির্দিষ্ট প্যাটার্ন বা লেখা খোঁজার একটি পদ্ধতি। 
 * ইমেইল ভ্যালিডেশন, পাসওয়ার্ড ফরম্যাট চেক করা ইত্যাদির জন্য এটি ব্যবহার করা হয়।
 */

// ১. একটি সাধারণ প্যাটার্ন (Literal Regex)
const pattern = /javascript/i; // 'i' মানে হলো case-insensitive (ছোট-বড় হাতের অক্ষরের পার্থক্য করবে না)
const text = "I love JavaScript!";

const result = pattern.test(text);
console.log("১. 'javascript' কি আছে? (Does it match?):", result);


// ২. বিশেষ চিহ্ন (Meta characters)
// ^ মানে শুরু, $ মানে শেষ, \d মানে সংখ্যা (0-9)
const phonePattern = /^01\d{9}$/; // ০১৮ দিয়ে শুরু হবে এবং মোট ১১টি সংখ্যা থাকবে
const myNumber = "01712345678";

console.log("\n২. ফোন নম্বর কি সঠিক? (Is phone valid?):", phonePattern.test(myNumber));


// ৩. কিছু কমন রিজেক্স মেথড:
const sentence = "JavaScript is fun, I like javascript.";

// match() - সব ম্যাচ খুঁজে বের করা
const matches = sentence.match(/javascript/gi); // 'g' মানে global (পুরো বাক্যের সব জায়গায় খুঁজবে)
console.log("৩. কয়টি মিল পাওয়া গেছে? (Total matches):", matches);

// replace() - লেখা পরিবর্তন করা
const newSentence = sentence.replace(/fun/, "awesome");
console.log("৪. নতুন বাক্য (New Sentence):", newSentence);


/**
 * ৪. ইমেইল ভ্যালিডেশন উদাহরণ (Email Validation):
 */
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

console.log("\n৫. ইমেইল টেস্ট (Email Test):");
console.log("   test@gmail.com ->", validateEmail("test@gmail.com"));
console.log("   invalid-email ->", validateEmail("invalid-email"));
