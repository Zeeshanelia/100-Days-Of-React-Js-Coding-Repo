import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

export const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    const toastId = toast.loading("Sending message...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully 🚀", { id: toastId });
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to send message ❌", { id: toastId });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-purple-900 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto z-10">

        {/* Watermark */}
        <h1 className="absolute top-12 md:top-20 left-1/2 -translate-x-1/2 text-[60px] md:text-[120px] lg:text-[140px] font-extrabold tracking-wider text-emerald-600/5 dark:text-emerald-400/5 select-none pointer-events-none">
          CONTACT
        </h1>

        {/* Header */}
        <div className="text-center mb-12 md:mb-16 relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 backdrop-blur-sm">
            <p className="text-sm font-medium uppercase tracking-wider text-emerald-600">
              Contact Me
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Let’s Talk For Your
            <span className="block text-emerald-600 mt-2">
              Next Project
            </span>
          </h2>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* FORM */}
          <div className="lg:col-span-2 bg-white/70 dark:bg-gray-900/90 backdrop-blur-md rounded-3xl p-4 md:p-8 lg:p-10 border border-gray-200/60 dark:border-gray-700/40 shadow-lg">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Name */}
              <Input
                label="Your Name*"
                name="user_name"
                placeholder="John Doe"
              />

              {/* Email */}
              <Input
                label="Email*"
                name="user_email"
                type="email"
                placeholder="example@gmail.com"
              />

              {/* Phone */}
              <Input
                label="Phone*"
                name="user_phone"
                placeholder="Enter phone number"
              />

              {/* Interest */}
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400 block mb-2">
                  I'm interested in*
                </label>
                <select
                  name="interest"
                  required
                  className="
          w-full rounded-xl
          bg-white dark:bg-gray-800/60
          border border-gray-300/60 dark:border-gray-600/50
          px-5 py-4
          text-gray-900 dark:text-gray-100
          focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20
          transition-all duration-300
          appearance-none
        "
                >
                  <option className="text-gray-900 dark:text-gray-100" value="">Select</option>
                  <option className="text-gray-900 dark:text-gray-100">Web Development</option>
                  <option className="text-gray-900 dark:text-gray-100">UI / UX Design</option>
                  <option className="text-gray-900 dark:text-gray-100">Frontend Development</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400 block mb-2">
                  Budget Range*
                </label>
                <select
                  name="budget"
                  required
                  className="
          w-full rounded-xl
          bg-white dark:bg-gray-800/60
          border border-gray-300/60 dark:border-gray-600/50
          px-5 py-4
          text-gray-900 dark:text-gray-100
          focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20
          transition-all duration-300
          appearance-none
        "
                >
                  <option className="text-gray-900 dark:text-gray-100" value="">Select</option>
                  <option className="text-gray-900 dark:text-gray-100">$500 – $1000</option>
                  <option className="text-gray-900 dark:text-gray-100">$1000 – $5000</option>
                  <option className="text-gray-900 dark:text-gray-100">$5000+</option>
                </select>
              </div>

              {/* Country */}
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400 block mb-2">
                  Country*
                </label>
                <select
                  name="country"
                  required
                  className="
          w-full rounded-xl
          bg-white dark:bg-gray-800/60
          border border-gray-300/60 dark:border-gray-600/50
          px-5 py-4
          text-gray-900 dark:text-gray-100
          focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20
          transition-all duration-300
          appearance-none
        "
                >
                  <option className="text-gray-900 dark:text-gray-100" value="">Select</option>
                  <option className="text-gray-900 dark:text-gray-100">Pakistan</option>
                  <option className="text-gray-900 dark:text-gray-100">USA</option>
                  <option className="text-gray-900 dark:text-gray-100">UK</option>
                </select>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="text-sm text-gray-600 dark:text-gray-400 block mb-2">
                  Your Message*
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="
          w-full rounded-xl
          bg-white dark:bg-gray-800/60
          border border-gray-300/60 dark:border-gray-600/50
          px-5 py-4
          text-gray-900 dark:text-gray-100
          placeholder-gray-500 dark:placeholder-gray-400
          focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20
          transition-all duration-300
          resize-none
        "
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full px-8 py-4 rounded-xl font-bold text-lg text-white transition
          ${loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-emerald-600 hover:bg-emerald-700"
                    }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* INFO CARD */}
          <div className="bg-white/70 dark:bg-gray-900/40 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 border shadow-lg flex flex-col justify-between">
            <div className="space-y-6">
              <Info title="Address" text="Model Town - Block N, Lahore" />
              <Info title="Contact" text="Email: Zeeshanelia@gmail.com" />
              <Info title="Working Hours" text="Mon–sunday: 10:00– 09:00" />
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-emerald-600 mb-4">Stay Connected</h3>
              <div className="flex gap-4">
                <Social Icon={FaFacebook} />
                <Social Icon={FaTwitter} />
                <Social Icon={FaInstagram} />
                <Social Icon={FaLinkedinIn} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ---------- Reusable Components ---------- */

const Input = ({ label, name, type = "text", placeholder }) => (
  <div>
    <label className="text-sm block mb-2">{label}</label>
    <input
      type={type}
      name={name}
      required
      placeholder={placeholder}
      className="w-full rounded-xl border px-5 py-4"
    />
  </div>
);

const Select = ({ label, name, options }) => (
  <div>
    <label className="text-sm block mb-2">{label}</label>
    <select name={name} required className="w-full rounded-xl border px-5 py-4">
      <option value="">Select</option>
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const Info = ({ title, text }) => (
  <div>
    <h3 className="text-lg font-semibold text-emerald-600 mb-2">{title}</h3>
    <p className="whitespace-pre-line">{text}</p>
  </div>
);

const Social = ({ Icon }) => (
  <a
    href="#"
    className="p-3 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 transition hover:scale-110"
  >
    <Icon size={22} />
  </a>
);
