// লেসন ১২ (প্রাকটিক্যাল): reduce() এর বাস্তব উদাহরণ (Practical Examples of reduce)

/**
 * উদাহরণ ১: শপিং কার্ট-এর মোট দাম বের করা
 * (Calculating the total price of a Shopping Cart)
 */
const cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 500, quantity: 2 },
    { name: "Keyboard", price: 1200, quantity: 1 }
];

const totalCost = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
}, 0);

console.log("১. শপিং কার্ট-এর মোট দাম (Total Shopping Cart Price):", totalCost); // 52200


/**
 * উদাহরণ ২: অ্যারে থেকে কোনো জিনিস কতবার আছে তা গুনে বের করা 
 * (Frequency counting items in an array)
 */
const fruits = ["Apple", "Banana", "Apple", "Mango", "Banana", "Apple"];

const fruitCount = fruits.reduce((countObj, fruit) => {
    // যদি ফ্রুটটি অবজেক্টে আগে থেকে থাকে, তবে ১ বাড়াবে। না থাকলে ১ সেট করবে।
    if (countObj[fruit]) {
        countObj[fruit]++;
    } else {
        countObj[fruit] = 1;
    }
    return countObj;
}, {}); // এখানে শুরুর মান (Initial Value) একটি খালি অবজেক্ট {}

console.log("\n২. ফলের সংখ্যা (Count of Fruits):", fruitCount);
/* রেজাল্ট আসবে: { Apple: 3, Banana: 2, Mango: 1 } */


/**
 * উদাহরণ ৩: বড় অ্যারের থেকে শুধুমাত্র নির্দিষ্ট ডাটা দিয়ে ছোট অ্যারে বানানো
 * (Flattening or extracting specific data)
 */
const students = [
    { name: "Abir", score: 85 },
    { name: "Karim", score: 92 },
    { name: "Rahim", score: 78 }
];

const namesOnly = students.reduce((list, student) => {
    list.push(student.name);
    return list;
}, []); // এখানে শুরুর মান একটি খালি অ্যারে []

console.log("\n৩. শুধু নামগুলো (Names Only):", namesOnly); // ["Abir", "Karim", "Rahim"]
