const Contact = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className=" rounded-2xl p-10 w-full max-w-4xl shadow-2xl">

                {/* Title */}
                <h1 className=" text-3xl font-bold text-center mb-10">
                    Get in Touch with <span className="text-red-400">Clich Shop Online Store</span>
                </h1>

                <div className="flex gap-10">

                    {/* Left - Contact Info */}
                    <div className="w-1/2 space-y-4">
                        <h2 className=" text-xl font-bold">Contact Info</h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Have a question or need support? We're here to help you with your electronics journey.
                        </p>

                        <div className="space-y-3 mt-4">
                            <p className="text-gray-600 text-sm flex items-center gap-2">
                                <span>📍</span>
                                <span><span className="font-semibold text-green-400">Address:</span> 123 Tech Lane, Johar Town, Lahore</span>
                            </p>
                            <p className="text-gray-600 text-sm flex items-center gap-2">
                                <span>✉️</span>
                                <span><span className="font-semibold text-green-400">Email:</span> support@clickshop.com</span>
                            </p>
                            <p className="text-gray-600 text-sm flex items-center gap-2">
                                <span>📞</span>
                                <span><span className="font-semibold text-green-400">Phone:</span> +92 0000 43210</span>
                            </p>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className="w-1/2 space-y-4">

                        {/* Your Name */}
                        <div className="space-y-1">
                            <label className="text-gray-600 text-sm">Your Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full bg-white/60  placeholder-gray-400
                                rounded-lg px-4 py-3 focus:outline-none focus:ring-2
                                focus:ring-purple-500 border border-white/10"
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-1">
                            <label className="text-gray-600 text-sm">Email Address</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                className="w-full bg-white/60  placeholder-gray-400
                                rounded-lg px-4 py-3 focus:outline-none focus:ring-2
                                focus:ring-purple-500 border border-white/10"
                            />
                        </div>

                        {/* Message */}
                        <div className="space-y-1">
                            <label className="text-gray-600 text-sm">Your Message</label>
                            <textarea
                                placeholder="Type your message..."
                                rows={2}
                                className="w-full bg-white/60   placeholder-gray-400
                                rounded-lg px-4 py-3 focus:outline-none focus:ring-2
                                focus:ring-purple-500 border border-white/10 resize-none"
                            />
                        </div>

                        {/* Send Button */}
                        <button className="w-full py-3 rounded-lg font-semibold text-white
                            bg-gradient-to-r from-red-500 to-purple-600
                            hover:from-red-600 hover:to-purple-700
                            transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
                            Send Message 🚀
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;