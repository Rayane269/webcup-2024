import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import tailwindGridArea from './resources/tailwindcss/tailwind-grid-area'

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                'webcup': ["Webcup"],
                'opensans': ['"Open Sans"'],
                'lato': ['"Lato Regular"'],
                'lato-italic': ['"Lato Italic"'],
                'lato-bold': ['"Lato Bold"'],
                'lato-bold-italic': ['"Lato Bold Italic"'],
                'lato-black': ['"Lato Black"'],
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "#f42c37",
                secondary: "#f42c37",
                brandYellow: "#fdc62e",
                brandGreen: "#2dcc6f",
                brandBlue: "#1376f4",
                brandWhite: "#eeeeee",
                
            },
            
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "3rem",
            },
        },
    },

    presets: [
        tailwindGridArea,
    ],

    plugins: [forms, typography],
};
