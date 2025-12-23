// লেসন ৫: লুপ (Loops)

// ১. For Loop: যখন আমরা জানি কতবার লুপটি চলবে।
console.log("For Loop শুরু:");
for (let i = 1; i <= 5; i++) {
    console.log("সংখ্যা:", i);
}

// ২. While Loop: যখন একটি নির্দিষ্ট শর্ত সত্যি থাকা পর্যন্ত লুপটি চলবে।
console.log("\nWhile Loop শুরু:");
let count = 1;
while (count <= 3) {
    console.log("কাউন্ট:", count);
    count++; // এটি না দিলে ইনফিনিট লুপ হয়ে যাবে!
}

// ৩. লুপ দিয়ে অ্যারে (Array) ট্রাভার্স করা
let fruits = ["Apple", "Mango", "Banana"];
console.log("\nফলের নামের তালিকা:");
for (let i = 0; i < fruits.length; i++) {
    console.log("ফল:", fruits[i]);
}
