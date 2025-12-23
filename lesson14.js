// লেসন ১৪: 'this' কীওয়ার্ড এবং ক্লাস (The 'this' Keyword and Classes)

/**
 * ১. 'this' কীওয়ার্ড:
 * এটি মূলত বর্তমান অবজেক্টকে নির্দেশ করে। 
 * অর্থাৎ, যার ভেতরে 'this' ব্যবহার করা হয়েছে, সেই কনটেক্সটকেই সে চেনে।
 */
const person = {
    name: "Abir",
    greet: function() {
        console.log(`১. হ্যালো, আমার নাম ${this.name}। ('this' এখানে 'person' অবজেক্টকে বুঝাচ্ছে)`);
    }
};

person.greet();


/**
 * ২. ক্লাস (ES6 Classes): 
 * অনেকগুলো অবজেক্ট তৈরি করার জন্য একটি ব্লুপ্রিন্ট বা ছাঁচ। 
 * এর মাধ্যমে আমরা অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং (OOP) করতে পারি।
 */
class Student {
    // কন্ট্রাক্টর: যখনই নতুন স্টুডেন্ট তৈরি হবে, এটি কল হবে
    constructor(name, id, department) {
        this.name = name;
        this.id = id;
        this.department = department;
    }

    // মেথড: ক্লাসের ভেতরের ফাংশন
    showDetails() {
        console.log(`২. ছাত্রের নাম: ${this.name}, বিভাগ: ${this.department}`);
    }
}

// নতুন অবজেক্ট তৈরি করা (Instance)
const student1 = new Student("Karim", 101, "CSE");
const student2 = new Student("Rahim", 102, "EEE");

student1.showDetails();
student2.showDetails();


/**
 * ৩. ইনহেরিটেন্স (Inheritance): 
 * এক ক্লাসের বৈশিষ্ট্য অন্য ক্লাসে নিয়ে আসা।
 */
class CR extends Student {
    constructor(name, id, department, batch) {
        super(name, id, department); // বাবা (Student) ক্লাসের ডাটা পাস করা
        this.batch = batch;
    }

    showCRDetails() {
        console.log(`৩. ${this.name} হলো ${this.batch} ব্যাচের সিআর (CR)।`);
    }
}

const cr1 = new CR("Tanvir", 105, "CSE", "55th");
cr1.showDetails(); // বাবার মেথড এক্সেস করা
cr1.showCRDetails(); // নিজের মেথড এক্সেস করা
