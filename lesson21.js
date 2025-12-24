// লেসন ২১: এরর হ্যান্ডলিং (Error Handling - Try/Catch/Finally)

/**
 * কেন এরর হ্যান্ডলিং দরকার?
 * কোড চালানোর সময় অনেক সময় ভুল হতে পারে (যেমন: ভুল ডাটা আসা বা নেটওয়ার্ক এরর)। 
 * এরর হ্যান্ডলিং না করলে পুরো অ্যাপটি এক নিমেষেই ক্রাশ করে বন্ধ হয়ে যাবে।
 */

// ১. বেসিক try...catch
console.log("১. বেসিক এরর হ্যান্ডলিং:");
try {
    // এখানে এমন কোড থাকে যা ভুল হতে পারে
    const result = someRandomFunction(); // এই ফাংশনটি কোথাও ডিফাইন করা নেই
    console.log(result);
} catch (error) {
    // যদি ভুল হয়, তবে এই ব্লকটি কাজ করবে
    console.log("   সরি! একটি ভুল হয়েছে। (Something went wrong.)");
    console.log("   ভুলের নাম (Error Name):", error.name);
}


/**
 * ২. throw: নিজের মতো এরর তৈরি করা।
 * যেমন- বয়স ১৮ এর কম হলে আমরা একটি এরর তৈরি করতে পারি।
 */
function checkAge(age) {
    if (age < 18) {
        throw new Error("আপনার বয়স ১৮ এর কম! (Age must be 18+)");
    }
    return "স্বাগতম! (Welcome!)";
}

console.log("\n২. কাস্টম এরর (Throw):");
try {
    console.log(checkAge(15));
} catch (err) {
    console.log("   সতর্কবার্তা:", err.message);
}


/**
 * ৩. finally: ভুল হোক বা না হোক, এই ব্লকটি সবসময় কাজ করবে। 
 * সাধারণত ডাটাবেস বা ফাইল কানেকশন বন্ধ করার জন্য এটি ব্যবহার করা হয়।
 */
console.log("\n৩. finally এর ব্যবহার:");
try {
    console.log("   প্রসেস শুরু হচ্ছে...");
    // throw new Error("হঠাৎ সমস্যা!");
} catch (e) {
    console.log("   ভুল ধরা পড়েছে:", e.message);
} finally {
    console.log("   সব কাজ শেষ! (I will always run regardless of errors)");
}

/**
 * সারসংক্ষেপ:
 * try: যে কোড নিয়ে আমরা ভয়ে আছি তা এখানে থাকে।
 * catch: ভুল হলে কি করতে হবে তা এখানে থাকে।
 * throw: নিজের ইচ্ছেমতো ভুল তৈরি করতে।
 * finally: সব শেষে যা অবশ্যই করতে হবে তা এখানে থাকে।
 */
