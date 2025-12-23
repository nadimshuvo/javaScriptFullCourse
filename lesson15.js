// লেসন ১৫: ফেচ এপিআই এবং জেসন (Fetch API and Working with JSON)

/**
 * ১. JSON (JavaScript Object Notation): 
 * এটি সার্ভার থেকে ডাটা আদান-প্রদান করার সবচেয়ে জনপ্রিয় ফরম্যাট।
 * এটি দেখতে একদম জাভাস্ক্রিপ্ট অবজেক্টের মতোই।
 */
const jsonString = '{"name": "Abir", "age": 25, "city": "Dhaka"}';
const userObj = JSON.parse(jsonString); // JSON থেকে Object এ রূপান্তর
console.log("১. JSON থেকে অবজেক্ট (JSON to Object):", userObj.name);


/**
 * ২. Fetch API: 
 * ইন্টারনেট থেকে বা কোনো ডাটাবেস থেকে তথ্য আনার জন্য এটি ব্যবহার করা হয়।
 * এটি 'Promise' রিটার্ন করে, তাই আমরা async/await দিয়ে কাজ করবো।
 */
async function getPosts() {
    try {
        console.log("\n২. ডাটা লোড হচ্ছে... (Loading data...)");
        
        // একটি ফ্রি টেস্ট এপিআই (JSONPlaceholder) থেকে ডাটা নিচ্ছি
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        
        // রেসপন্সটিকে JSON ফরম্যাটে কনভার্ট করতে হবে
        const post = await response.json();
        
        console.log("   পোস্টের টাইটেল (Post Title):", post.title);
        console.log("   পোস্টের বডি (Post Body):", post.body);
        
    } catch (error) {
        console.log("   সরি! ডাটা আনতে সমস্যা হয়েছে। (Error fetching data.)", error);
    }
}

getPosts();

/**
 * ৩. বাস্তব উদাহরণ:
 * এপিআই থেকে যখন ডাটা আসে, তখন আমরা সেগুলো লুপ চালিয়ে আমাদের 
 * ওয়েবসাইটে বা মোবাইল অ্যাপে দেখাই।
 */
