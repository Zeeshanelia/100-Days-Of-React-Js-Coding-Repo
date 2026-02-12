import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import { useLocation } from "react-router-dom";

export const Nav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [activeSection, setActiveSection] = useState('home');

    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) return savedTheme;
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'light';
    });

    // Apply theme globally when it changes
    useEffect(() => {
        const root = document.documentElement;
        const body = document.body;

        if (theme === 'dark') {
            root.classList.add('dark');
            body.classList.add('dark');
        } else {
            root.classList.remove('dark');
            body.classList.remove('dark');
        }

        localStorage.setItem('theme', theme);
    }, [theme]);

    // Track active section for highlighting
    useEffect(() => {
        if (!isHomePage) return;

        const handleScroll = () => {
            const sections = ['home', 'services', 'about-me', 'projects', 'pricing', 'testimonial', 'contact-me'];
            const scrollPosition = window.scrollY + 100; // Offset for navbar

            let currentSection = 'home';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;

                    // If we've scrolled past this section's top, it's potentially active
                    if (scrollPosition >= offsetTop - 150) {
                        currentSection = section;
                    }
                }
            }

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        setTimeout(handleScroll, 100);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const menus = [
        { to: "home", icon: "ri-home-line", label: "Home" },
        { to: "services", icon: "ri-file-list-3-line", label: "Services" },
        { to: "about-me", icon: "ri-user-line", label: "About Me" },
        { to: "projects", icon: "ri-briefcase-line", label: "Projects" },
        { to: "pricing", icon: "ri-currency-line  ", label: "Pricing" },
        { to: "testimonial", icon: "ri-chat-quote-line", label: "Testimonial" },
        { to: "contact-me", icon: "ri-mail-line", label: "Contact Me" },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Scroll options configuration - removed spy since we handle it manually
    const scrollOptions = {
        smooth: true,
        offset: -80,
        duration: 800,
    };

    // Get active class based on section
    const isActive = (sectionId) => {
        if (!isHomePage) {
            return location.hash === `#${sectionId}` || (sectionId === 'home' && location.pathname === '/');
        }
        return activeSection === sectionId;
    };

    // Common styles
    const activeClasses = "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/30";
    const inactiveClasses = "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white";

    // Render navigation link based on current page
    const renderNavLink = (item) => {
        const itemIsActive = isActive(item.to);

        // If on homepage, use ScrollLink for smooth scrolling
        if (isHomePage) {
            return (
                <ScrollLink
                    key={item.to}
                    to={item.to}
                    {...scrollOptions}
                    className={`inline-flex items-center px-3 py-2 rounded-lg font-medium gap-2 text-sm transition-all duration-300 ease-in-out cursor-pointer ${itemIsActive ? activeClasses : inactiveClasses}`}
                    onClick={closeMobileMenu}
                >
                    <i className={item.icon}></i>
                    <span>{item.label}</span>
                </ScrollLink>
            );
        } else {
            // If not on homepage, use NavLink
            if (item.to === "home") {
                return (
                    <NavLink
                        key={item.to}
                        to="/"
                        end={true}
                        className={({ isActive }) =>
                            `inline-flex items-center px-3 py-2 rounded-lg font-medium gap-2 text-sm transition-all duration-300 ease-in-out ${isActive
                                ? activeClasses
                                : inactiveClasses
                            }`}
                    >
                        <i className={item.icon}></i>
                        <span>{item.label}</span>
                    </NavLink>
                );
            } else {
                return (
                    <NavLink
                        key={item.to}
                        to={`/#${item.to}`}
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                            `inline-flex items-center px-3 py-2 rounded-lg font-medium gap-2 text-sm transition-all duration-300 ease-in-out ${isActive
                                ? activeClasses
                                : inactiveClasses
                            }`}
                    >
                        <i className={item.icon}></i>
                        <span>{item.label}</span>
                    </NavLink>
                );
            }
        }
    };

    // Render mobile navigation link
    const renderMobileNavLink = (item) => {
        const itemIsActive = isActive(item.to);

        if (isHomePage) {
            return (
                <ScrollLink
                    key={item.to}
                    to={item.to}
                    {...scrollOptions}
                    onClick={closeMobileMenu}
                    className={`flex items-center px-4 py-3 rounded-md text-base font-medium gap-3 transition-all duration-200 cursor-pointer ${itemIsActive ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white" : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
                >
                    <i className={item.icon}></i>
                    <span>{item.label}</span>
                </ScrollLink>
            );
        } else {
            if (item.to === "home") {
                return (
                    <NavLink
                        key={item.to}
                        to="/"
                        end={true}
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                            `flex items-center px-4 py-3 rounded-md text-base font-medium gap-3 transition-all duration-200 ${isActive
                                ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            }`
                        }
                    >
                        <i className={item.icon}></i>
                        <span>{item.label}</span>
                    </NavLink>
                );
            } else {
                return (
                    <NavLink
                        key={item.to}
                        to={`/#${item.to}`}
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                            `flex items-center px-4 py-3 rounded-md text-base font-medium gap-3 transition-all duration-200 ${isActive
                                ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            }`
                        }
                    >
                        <i className={item.icon}></i>
                        <span>{item.label}</span>
                    </NavLink>
                );
            }
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 shadow-lg backdrop-blur-sm
                       bg-white/90 dark:bg-gray-900/90
                       transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <NavLink to="/" className="flex items-center gap-2">
                            <h1 className="md:text-2xl font-bold text-green-600 dark:text-green-400 flex items-center gap-2">
                                <i className="ri-code-s-slash-line"></i>
                                <div
                                    className="relative w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600  dark:from-emerald-600 dark:to-emerald-700 flex items-center justify-center shadow-lg ">
                                    <span className="text-2xl font-bold text-white">Z</span>
                                    <div className="absolute inset-0 rounded-full border-2 border-emerald-400/40 dark:border-emerald-500/40 animate-ping" />
                                </div>
                                <span className="hidden sm:inline">eeshanElia</span>
                            </h1>
                        </NavLink>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-2">
                            {menus.map((item) => renderNavLink(item))}
                        </div>
                    </div>

                    {/* Right side buttons */}
                    <div className="flex items-center gap-4">
                        {/* Theme toggle */}
                        <button
                            onClick={toggleTheme}
                            className="hidden sm:inline-flex items-center justify-center p-2 rounded-md
                                     text-gray-600 dark:text-gray-300
                                     hover:bg-gray-100 dark:hover:bg-gray-800
                                     transition-colors duration-300"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <i className="ri-sun-line text-xl"></i>
                            ) : (
                                <i className="ri-moon-line text-xl"></i>
                            )}
                        </button>

                        {/* Call to action button */}
                        {isHomePage ? (
                            <ScrollLink
                                to="contact-me"
                                {...scrollOptions}
                                className={`bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg px-4 py-2 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 cursor-pointer ${isActive('contact-me') ? 'ring-2 ring-green-300' : ''}`}
                            >
                                Let's Talk
                            </ScrollLink>
                        ) : (
                            <NavLink
                                to="/#contact-me"
                                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg px-4 py-2 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
                            >
                                Let's Talk
                            </NavLink>
                        )}

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md
                                   text-gray-600 dark:text-gray-400
                                   hover:bg-gray-100 dark:hover:bg-gray-800
                                   focus:outline-none focus:ring-2 focus:ring-green-500
                                   transition-colors duration-300"
                                aria-expanded={isMobileMenuOpen}
                                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                            >
                                {isMobileMenuOpen ? (
                                    <i className="ri-close-line text-2xl"></i>
                                ) : (
                                    <i className="ri-menu-line text-2xl"></i>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                    }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1
                              bg-white/95 dark:bg-gray-900/95
                              backdrop-blur-sm border-t border-gray-200 dark:border-gray-800"
                >
                    {menus.map((item) => renderMobileNavLink(item))}

                    {/* Theme toggle for mobile */}
                    <div className="pt-2 border-t border-gray-200 dark:border-gray-700 px-4">
                        <button
                            onClick={() => {
                                toggleTheme();
                                closeMobileMenu();
                            }}
                            className="flex items-center gap-3 px-4 py-3 rounded-md
                                     text-gray-600 dark:text-gray-300
                                     hover:bg-gray-100 dark:hover:bg-gray-800
                                     transition-colors w-full"
                        >
                            {theme === 'dark' ? (
                                <>
                                    <i className="ri-sun-line text-xl"></i>
                                    <span>Switch to Light Mode</span>
                                </>
                            ) : (
                                <>
                                    <i className="ri-moon-line text-xl"></i>
                                    <span>Switch to Dark Mode</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};