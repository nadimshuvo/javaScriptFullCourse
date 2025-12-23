// mathUtils.mjs - এটি একটি মডিউল ফাইল (Module File)

/**
 * ১. Named Export: 
 * আমরা 'export' কীওয়ার্ড ব্যবহার করে অন্য ফাইলের জন্য এই ডাটাগুলো উন্মুক্ত করি।
 */
export const pi = 3.14159;

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

/**
 * ২. Default Export: 
 * প্রতিটি ফাইলে একটি মাত্র 'default export' থাকতে পারে।
 */
const multiplier = 10;
export default multiplier;
