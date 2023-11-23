/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/components/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: "rgb(var(--color-primary) / <alpha-value>)",
                second: "rgb(var(--color-second) / <alpha-value>)",
                bgcolor: "rgb(var(--color-bgcolor) / <alpha-value>)",
                btn: "rgb(var(--color-btn) / <alpha-value>)",
                blue: "rgb(var(--color-blue) / <alpha-value>)",
            },
        },
    },
    plugins: [],
};
