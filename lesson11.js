// লেসন ১১: প্রমিজ এবং অ্যাসিঙ্ক/অ্যাওয়েট (Promises and Async/Await)

/**
 * ১. প্রমিজ (Promise): এটি একটি প্রতিশ্রুতি। 
 * এটি হয় সফল (Resolve) হবে অথবা ব্যর্থ (Reject) হবে।
 */
const myPromise = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
        if (success) {
            resolve("ডেটা পাওয়া গেছে! (Data received!)");
        } else {
            reject("ডেটা পাওয়া যায়নি। (Data not found.)");
        }
    }, 2000);
});

// প্রমিজ ব্যবহার করা
console.log("প্রমিজ শুরু... (Promise started...)");
myPromise
    .then((data) => console.log(`সফল: ${data}`))
    .catch((err) => console.log(`ব্যর্থ: ${err}`));


/**
 * ২. অ্যাসিঙ্ক/অ্যাওয়েট (Async/Await): 
 * প্রমিজ ব্যবহার করার আরও সহজ এবং আধুনিক নিয়ম।
 */
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("সার্ভার থেকে তথ্য আসলো! (Info from server!)");
        }, 3000);
    });
}

async function startProcess() {
    console.log("\nপ্রসেস শুরু... (Process started...)");
    
    // await মানে হলো জাভাস্ক্রিপ্ট এখানে থামবে যতক্ষণ না প্রমিজটি সফল হয়
    const result = await fetchData();
    
    console.log(`রেজাল্ট: ${result} (Result: ${result})`);
    console.log("প্রসেস শেষ। (Process finished.)");
}

startProcess();
