import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const Login = () => {
    const [passwordType, setPasswordType] = useState("password");
    const [errors, setErrors] = useState(null);
    const navigate = useNavigate();

    const [formInputType, setFormInputType] = useState({
        email: "",
        password: "",
    });

    const logIn = async (e) => {
        e.preventDefault();
        setErrors(null);

        try {
            await signInWithEmailAndPassword(
                auth,
                formInputType.email,
                formInputType.password
            );
            navigate("/dashboard");
        } catch (error) {
            if (error.code === "auth/network-request-failed") {
                setErrors("Network error. Please check your connection.");
            } else {
                setErrors("Invalid email or password.");
            }
        }
    };

    const HandleOnChange = (e) => {
        const { name, value } = e.target;
        setFormInputType((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="min-h-screen grid md:grid-cols-2 bg-gray-50">
            {/* Image Section */}
            <div className="hidden md:flex items-center justify-center bg-white p-6">
                <img
                    src="/images/login.webp"
                    alt="Login"
                    className="max-w-md rounded-xl shadow-2xl"
                />
            </div>

            {/* Form Section */}
            <div className="flex items-center justify-center px-6">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Welcome Back
                    </h2>
                    <p className="text-gray-500 mt-1">
                        Login to continue to your dashboard
                    </p>

                    <form className="mt-8 space-y-5" onSubmit={logIn}>
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                onChange={HandleOnChange}
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type={passwordType}
                                name="password"
                                required
                                onChange={HandleOnChange}
                                placeholder="••••••••"
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                            />
                            <button
                                type="button"
                                onClick={() =>
                                    setPasswordType((p) =>
                                        p === "password" ? "text" : "password"
                                    )
                                }
                                className="absolute right-3 top-9 text-gray-500 hover:text-purple-600"
                            >
                                {passwordType === "password" ? (
                                    <i className="ri-eye-line text-lg"></i>
                                ) : (
                                    <i className="ri-eye-off-line text-lg"></i>
                                )}
                            </button>
                        </div>

                        {/* Error */}
                        {errors && (
                            <div className="bg-red-100 text-red-700 px-4 py-2 rounded-md text-sm">
                                {errors}
                            </div>
                        )}

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition duration-300"
                        >
                            Login
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-sm text-gray-600 mt-6">
                        Don’t have an account?{" "}
                        <Link
                            to="/signup"
                            className="text-purple-600 font-semibold hover:underline"
                        >
                            Register Now
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
