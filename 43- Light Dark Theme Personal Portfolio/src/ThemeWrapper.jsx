// // ThemeWrapper.jsx
// import { useEffect } from 'react';

// export const ThemeWrapper = ({ children }) => {
//     // Initialize theme from localStorage or system preference
//     useEffect(() => {
//         const savedTheme = localStorage.getItem('theme');
//         const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

//         const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

//         if (theme === 'dark') {
//             document.documentElement.classList.add('dark');
//             document.body.classList.add('dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//             document.body.classList.remove('dark');
//         }
//     }, []);

//     return <>{children}</>;
// };