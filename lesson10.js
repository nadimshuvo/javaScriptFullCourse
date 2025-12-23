// লেসন ১০: অ্যাসিনক্রোনাস জাভাস্ক্রিপ্ট (Asynchronous JS - Callbacks & setTimeout)

// ১. সিনক্রোনাস (Synchronous)
console.log("১. আমি প্রথমে চলবো। (1. I will run first)");
console.log("২. আমি দ্বিতীয় লাইনে চলবো। (2. I will run second)");

// ২. অ্যাসিনক্রোনাস (Asynchronous)
console.log("\n৩. setTimeout শুরু করছি... (3. Starting setTimeout...)");

setTimeout(() => {
    console.log("৫. এই লাইনটি ২ সেকেন্ড পর আসলো! (5. This line came after 2 seconds! S1)");
}, 2000);

console.log("৪. আমি ৩ নম্বর লাইনের সাথে সাথেই প্রিন্ট হলাম। (4. I printed right after line 3.)");


// ৩. কলব্যাক ফাংশন (Callback Function)
function getMessage(callback) {
    console.log("\nমেসেজ লোড হচ্ছে... (Loading message...)");
    setTimeout(() => {
        const msg = "হ্যালো! আমি একটি কলব্যাক থেকে আসছি। (Hello! I am coming from a callback. S2)";
        callback(msg);
    }, 3000);
}

// ফাংশন কল করা
getMessage((data) => {
    console.log("প্রাপ্ত মেসেজ (Received Message):", data);
});

console.log("getMessage কল করেছি... (Called getMessage...)");
