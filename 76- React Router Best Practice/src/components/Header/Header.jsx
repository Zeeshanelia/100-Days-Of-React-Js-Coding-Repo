
import { Link, NavLink } from 'react-router-dom'

export default function Header() {

    const navItems = [

        { path: '/github', label: 'github' },
        { path: '/contact', label: 'contact-us' },
        { path: '/', label: 'about' },
        { path: '/brand/apple', label: 'Apple' },
    ]

    return (
        <header className="shadow sticky z-50 top-0">



            <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <h1 className="text-2xl font-bold">
                            <NavLink to="/" className="hover:text-blue-200">
                                🛍️ Router Practice
                            </NavLink>
                        </h1>

                        <div className="flex space-x-4">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
                                            ? 'bg-white text-blue-600'
                                            : 'hover:bg-blue-700'
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}










