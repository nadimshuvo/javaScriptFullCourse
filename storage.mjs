// storage.mjs - LocalStorage হ্যান্ডেল করার জন্য মডিউল

export class StorageManager {
    static save(key, data) {
        try {
            const jsonData = JSON.stringify(data);
            localStorage.setItem(key, jsonData);
        } catch (error) {
            console.error("ডাটা সেভ করতে সমস্যা হয়েছে:", error);
        }
    }

    static load(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error("ডাটা লোড করতে সমস্যা হয়েছে:", error);
            return null;
        }
    }
}
