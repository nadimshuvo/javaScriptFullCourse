// লেসন ৯: আধুনিক জাভাস্ক্রিপ্ট (Modern JS - ES6+ Features)

// ১. টেমপ্লেট লিটারেলস (Template Literals)
// এখন আমরা ব্যাকটিক ( ` ) ব্যবহার করে ডাইনামিক স্ট্রিং লিখতে পারি।
const product = "ল্যাপটপ";
const price = 50000;
console.log(`এই ${product}-এর দাম ${price} টাকা।`); // ${} ব্যবহার করে ভেরিয়েবল বসানো যায়।

// ২. ডিস্ট্রাকচারিং (Destructuring) - অবজেক্ট বা অ্যারে থেকে সহজে ডেটা বের করা।
const user = {
    userName: "Adnan",
    city: "Dhaka",
    hobby: "Coding"
};

const { userName, city } = user; // অবজেক্ট থেকে সরাসরি ভেরিয়েবল তৈরি
console.log(`নাম: ${userName}, শহর: ${city}`);

// ৩. স্প্রেড অপারেটর (Spread Operator - ...) - লিস্ট কপি বা জোড়া লাগানো।
const oldNumbers = [1, 2, 3];
const newNumbers = [...oldNumbers, 4, 5]; // ৩টি ডট ব্যবহার করে কপি করা হয়
console.log("নতুন লিস্ট:", newNumbers);

// ৪. ডিফল্ট প্যারামিটার (Default Parameters)
function welcome(name = "Unknown") {
    console.log(`Welcome, ${name}!`);
}

welcome("Arif");
welcome(); // নাম না দিলেও কাজ করবে কারণ ডিফল্ট ভাবে "Unknown" দেওয়া আছে।
