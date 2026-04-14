## Invoice Generator
A printable invoice builder built with React, Ant Design & Moment.js
Version: 1.0.0 • Stack: React, Ant Design, Tailwind CSS, Moment.js

- Overview
Invoice Generator is a single-page React application that lets users fill in a form and instantly produce a print-ready, A4-sized invoice. It requires no backend — all data is handled client-side and the final invoice is printed directly from the browser.
The app ships with sensible placeholder values so the invoice layout is always visible, even before any data is entered.

- Features

Slide-out drawer form to enter all invoice details
Dynamic product line-items — add or remove rows on the fly
Auto-calculated subtotal, GST tax, and total
Supports Bank and UPI payment methods
Print-optimised layout (A4, 210 × 297 mm) via window.print()
Placeholder defaults keep the preview meaningful before form submission
Form validation — all fields are required before generating
Fully responsive sidebar action buttons (Create & Print)