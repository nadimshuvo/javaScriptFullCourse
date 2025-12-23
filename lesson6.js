// লেসন ৬: ফাংশন (Functions)

// ১. বেসিক ফাংশন: যখন কোনো কাজ বারবার করার প্রয়োজন হয়, আমরা সেটি ফাংশনের ভেতর লিখে রাখি।
function sayHello() {
    console.log("হ্যালো! কেমন আছেন?");
}

sayHello(); // ফাংশন কল করা

// ২. প্যারামিটার এবং আর্গুমেন্ট (Parameters & Arguments)
function greetUser(name) {
    console.log("স্বাগতম, " + name + "!");
}

greetUser("Abir");
greetUser("Karim");

// ৩. রিটার্ন ভ্যালু (Return Value)
function add(a, b) {
    return a + b;
}

let result = add(10, 20);
console.log("যোগফল:", result);

// ৪. অ্যারো ফাংশন (Arrow Function) - আধুনিক নিয়ম
const multiply = (x, y) => {
    return x * y;
};

console.log("গুনফল:", multiply(5, 4));
