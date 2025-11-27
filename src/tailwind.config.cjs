/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
//     safelist: [
//       "bg-primary", "bg-secondary", "bg-accent", "text-primary", "text-secondary", "text-accent"
//     ],
    theme: {
        screens: {
            xs: '480px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {},
    },
    plugins: [],
};
//       },
//     },
//     plugins: [],
//   };


  