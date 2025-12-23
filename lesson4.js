// লেসন ৪: কন্ডিশনাল স্টেটমেন্ট (Conditionals - If/Else)

// JavaScript-এ কোনো সিদ্ধান্ত নেওয়ার জন্য আমরা if, else if এবং else ব্যবহার করি।

let age = 18;

if (age >= 18) {
    console.log("আপনি ভোট দিতে পারবেন।");
} else {
    console.log("আপনি এখনো ছোট, ভোট দিতে পারবেন না।");
}

// একাধিক শর্ত চেক করা (Else If)
let mark = 75;

if (mark >= 80) {
    console.log("ফলাফল: A+");
} else if (mark >= 70) {
    console.log("ফলাফল: A");
} else if (mark >= 60) {
    console.log("ফলাফল: B");
} else {
    console.log("ফলাফল: F");
}

// Switch Statement (যখন একটি ভেরিয়েবলের অনেকগুলো মান চেক করতে হয়)
let day = "Monday";

switch (day) {
    case "Saturday":
        console.log("আজ বন্ধের দিন!");
        break;
    case "Sunday":
        console.log("আজও কি বন্ধ?");
        break;
    default:
        console.log("আজ কাজের দিন।");
}
