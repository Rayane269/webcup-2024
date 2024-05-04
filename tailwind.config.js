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
        },
    },

    presets: [
        tailwindGridArea,
    ],

    plugins: [forms, typography],
};
