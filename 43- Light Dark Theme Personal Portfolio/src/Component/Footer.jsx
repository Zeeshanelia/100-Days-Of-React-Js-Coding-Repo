import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer
      className="relative pt-16 md:pt-20 lg:pt-24 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-purple-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 overflow-hidde ">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Top CTA + Heading */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200/60 dark:border-gray-700/40 pb-10 md:pb-14 mb-12 md:mb-16">
          <div className="mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Let's{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                Connect
              </span>{" "}
              Today
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg">
              Ready to turn your ideas into reality?
            </p>
          </div>

          <button
            className="group relative inline-flex items-center gap-3 px-7 py-4 md:px-9 md:py-5 rounded-full font-semibold text-lg bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 text-white hover:from-emerald-600 hover:to-emerald-700 dark:hover:from-emerald-700 dark:hover:to-emerald-800 transition-all duration-300 shadow-lg shadow-emerald-500/20 dark:shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/30 dark:hover:shadow-emerald-500/40 hover:-translate-y-1">
            Hire Me Now
            <i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 pb-16 md:pb-20">
          {/* Brand / About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="relative w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600  dark:from-emerald-600 dark:to-emerald-700 flex items-center justify-center shadow-lg ">
                <span className="text-2xl font-bold text-white">Z</span>
                <div className="absolute inset-0 rounded-full border-2 border-emerald-400/40 dark:border-emerald-500/40 animate-ping" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Zeeshan Elia</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Web Developer
                </p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-8 max-w-sm">
              Passionate about building clean, modern, and high-performance web experiences that help businesses grow.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: <FaFacebook size={20} />, href: "#" },
                { icon: <FaTwitter size={20} />, href: "#" },
                { icon: <FaInstagram size={20} />, href: "#" },
                { icon: <FaLinkedinIn size={20} />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-300/70 dark:border-gray-700/50 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-emerald-500 hover:text-white hover:border-emerald-500/50 hover:scale-110 active:scale-95 transition-all duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-emerald-600 dark:text-emerald-400 font-semibold text-lg mb-6 flex items-center gap-2">
              <i className="ri-links-line" />
              Navigation
            </h4>
            <ul className="space-y-3">
              {["Home", "Services", "About Me", "Projects", "Pricing", "Contact"].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="
                      flex items-center gap-2.5
                      text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400
                      transition-colors duration-300 group text-sm ">
                    <i className="ri-arrow-right-s-line text-emerald-500/60 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-emerald-600 dark:text-emerald-400 font-semibold text-lg mb-6 flex items-center gap-2">
              <i className="ri-contacts-line" />
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
              {/* <li className="flex items-center gap-3">
                <i className="ri-phone-fill text-emerald-500/70" />
                +92 123 456 789
              </li> */}
              <li className="flex items-center gap-3">
                <i className="ri-mail-fill text-emerald-500/70" />
                zeeshanelia@gmail.com
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-fill text-emerald-500/70 mt-1" />
                Model Town - Block N, Lahore, Pakistan
              </li>
              {/* <li className="flex items-center gap-3">
                <i className="ri-global-line text-emerald-500/70" />
                www.zeeshanelia.com
              </li> */}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-emerald-600 dark:text-emerald-400 font-semibold text-lg mb-6 flex items-center gap-2">
              <i className="ri-mail-send-line" />
              Newsletter up coming
            </h4>

            <p className="text-gray-700 dark:text-gray-300 text-sm mb-5">
              Stay updated with new projects, tips & offers.
            </p>

            {/* <form className="relative group">
              <input
                type="email"
                placeholder="Your email address"
                className=" w-full px-5 py-4 rounded-full bg-white/80 dark:bg-gray-800/70 backdrop-blur-md border border-gray-300/70 dark:border-gray-700/50 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"/>
              <button
                type="submit"
                className=" absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 text-white flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300">
                <i className="ri-send-plane-fill text-lg" />
              </button>
            </form> */}

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
              We respect your privacy — unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200/60 dark:border-gray-700/40 pt-8 pb-2">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400 gap-4">
            <p>© {new Date().getFullYear()} Zeeshan Elia. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 animate-bounce-slow "
        aria-label="Back to top">

        <i className="ri-arrow-up-line text-xl" />
      </button>
    </footer>
  );
};