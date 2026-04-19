## 🔐 React Authentication App (Protected Routes)

A simple and scalable React application demonstrating authentication flow with protected routes using React Router v6.

🚀 Features
🔑 Login & Signup pages
🔒 Protected route (/profile)
🛡️ Route guarding using AuthGuard
🔁 Redirect unauthorized users to login
💾 LocalStorage-based authentication (basic demo)
❌ 404 page handling
🧠 Core Concept
✅ Protected Routing

This project uses a custom AuthGuard component to restrict access to certain routes.

If user is authenticated → allow access
If not → redirect to login page



-  How It Works
1. Authentication Logic

Authentication is simulated using:

localStorage.setItem("token", "dummyToken")
2. AuthGuard Flow
const isAuthenticated = localStorage.getItem("token")

return isAuthenticated
  ? <Outlet />
  : <Navigate to="/login" replace />
3. Route Protection
<Route element={<AuthGuard />}>
  <Route path="/profile" element={<Profile />} />
</Route>




