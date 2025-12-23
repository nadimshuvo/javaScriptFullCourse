// লেসন ৭: অ্যারে এবং অবজেক্ট (Arrays and Objects)

// ১. অ্যারে (Arrays): একই নামের অধীনে একাধিক জিনিসের তালিকা রাখা।
let colors = ["Red", "Green", "Blue", "Yellow"];

console.log("প্রথম রঙ:", colors[0]); // ইনডেক্স ০ থেকে শুরু হয়
console.log("রঙের সংখ্যা:", colors.length);

// নতুন রঙ যোগ করা
colors.push("Purple");
console.log("আপডেটেড তালিকা:", colors);

// ২. অবজেক্ট (Objects): একটি জিনিসের বিভিন্ন বৈশিষ্ট্য বা প্রপার্টি রাখা।
let person = {
    firstName: "Abir",
    lastName: "Hossain",
    age: 25,
    isStudent: true,
    // অবজেক্টের ভেতর ফাংশন (Method)
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log("\nব্যক্তির নাম:", person.firstName);
console.log("পূর্ণ নাম:", person.fullName());

// প্রপার্টি আপডেট করা
person.age = 26;
console.log("আপডেটেড বয়স:", person.age);

// অবজেক্টের ভেতর অ্যারে
let student = {
    name: "Karim",
    subjects: ["Math", "Physics", "English"]
};

console.log("\nছাত্রের প্রথম বিষয়:", student.subjects[0]);
