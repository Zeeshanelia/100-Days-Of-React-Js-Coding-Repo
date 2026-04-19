
## Myntra Clone (React + Redux Toolkit)

A scalable frontend e-commerce application built with React, Redux Toolkit, and modern architecture patterns. This project demonstrates professional state management, API handling, and clean UI structure similar to real-world production apps.

🚀 Tech Stack
Frontend: React
State Management: Redux Toolkit
Routing: React Router
UI Components: Custom Components (Header, Footer, Spinner, etc.)
HTTP Client: Axios


The app uses Redux Toolkit to maintain a single global store:

items → Product data
bag → Cart functionality
fetchStatus → API lifecycle state

This ensures:

Predictable state updates
Easy debugging
Scalable architecture
2. Slice-Based Architecture

Each feature is isolated into its own slice:

itemsSlice → Handles product list
bagSlice → Manages cart items
fetchStatusSlice → Tracks API status

This follows separation of concerns, making the app maintainable.

3. AtraPI Fetch Lifecycle Handling

The project cks API states using:

fetchDone
currentlyFetching

Flow:

START → LOADING → DONE

Used for:

Showing loaders
Preventing duplicate API calls
Improving user experience
4. App Layout Pattern

The App.jsx acts as a root layout (App Shell):

Persistent UI → Header & Footer
Dynamic UI → <Outlet />
Global Loader → Controlled via Redux
{fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
5. Smart Data Fetching

FetchItems component is responsible for:

Calling API
Dispatching Redux actions
Managing fetch lifecycle

This separates data logic from UI, a key production practice.

🔄 Application Flow
App loads
FetchItems triggers API call
Redux updates:
currentlyFetching = true
Loader is displayed
API response received
Redux updates:
currentlyFetching = false
fetchDone = true
UI renders actual pages



✨ Features
Global state management with Redux Toolkit
Clean and modular folder structure
Loading state handling
Dynamic routing with React Router
Reusable components
Scalable architecture