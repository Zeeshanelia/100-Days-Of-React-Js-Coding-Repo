import { Facebook, Twitter, Instagram } from 'lucide-react';

function Footer() {
    return (
        <footer className="">
            <div className="max-w-6xl mx-auto px-12 py-8 grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Newsletter */}
                <div>
                    <h3 className="text-purple-400 text-lg font-medium mb-3">
                        Sign up for our newsletter
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-2">
                        Don't worry, we reserve our newsletter for important news
                        so we only send a few updates a year.
                    </p>

                    <button
                        className="bg-white text-black px-6 py-1 rounded-full font-medium
                     hover:bg-gray-200 transition-colors duration-200">
                        Subscribe
                    </button>
                </div>

                {/* Help and services */}
                <div>
                    <h3 className="text-purple-400  text-lg font-medium mb-4">
                        Help and services
                    </h3>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#" className="hover:text-white transition-colors">How does it work</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* To explore */}
                <div>
                    <h3 className="text-purple-400  text-lg font-medium mb-4">
                        To explore
                    </h3>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#" className="hover:text-white transition-colors">Accommodations</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Experiences</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                    </ul>
                </div>

                {/* Other possibilities */}
                <div>
                    <h3 className="text-purple-400  text-lg font-medium mb-4">
                        Other possibilities
                    </h3>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#" className="hover:text-white transition-colors">Give away</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Subscribe</a></li>
                    </ul>

                </div>

            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-300 px-5">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center text-sm">
                    <div>© 2026 Click Shop </div>

                    <div className="flex gap-6 mt-4 sm:mt-0">
                        <a href="#"
                            className="hover:text-white transition-colors"
                            aria-label="Facebook">
                            <Facebook className="w-6 h-6" />
                        </a>

                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                            aria-label="Twitter">
                            <Twitter className="w-6 h-6" />
                        </a>

                        <a
                            href="#"
                            className="hover:text-white transition-colors"
                            aria-label="Instagram">
                            <Instagram className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;