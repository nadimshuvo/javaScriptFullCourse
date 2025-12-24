// utils.mjs - ভ্যালিডেশন এবং ইউটিলিটি ফাংশন

export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

export function formatDate(date) {
    return new Intl.DateTimeFormat('bn-BD', { dateStyle: 'full' }).format(date);
}
