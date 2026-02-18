/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    green: 'var(--brand-green)',
                    yellow: 'var(--brand-yellow)',
                    cyan: 'var(--brand-cyan)',
                    navy: 'var(--brand-navy)',
                    text: 'var(--brand-text)',
                    gray: 'var(--brand-gray)',
                }
            },
            fontFamily: {
                bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
                noto: ['"Noto Sans"', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-in forwards',
                'marquee': 'marquee 30s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    plugins: [],
};
