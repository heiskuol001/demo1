
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faXmark
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const links = ["Home", "Services", "Products", "About"];

    // Detect scrolling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full h-16 px-6 grid grid-cols-2 md:grid-cols-3 items-center z-50 transition-all duration-300
            ${
                isScrolled
                    ? "bg-white/95 backdrop-blur-xl shadow-md"
                    : "bg-white/30 backdrop-blur-2xl"
            }`}
        >

            {/* Logo */}
            <h1 className="text-xl font-bold text-gray-900">
                Logo
            </h1>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex justify-center space-x-8">
                {links.map((link) => (
                    <li key={link}>
                        <a
                            href={`#${link.toLowerCase()}`}
                            className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
                        >
                            {link}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Desktop Login */}
            <div className="hidden md:flex justify-end">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition">
                    Login
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden justify-self-end text-xl text-gray-900"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
            >
                <FontAwesomeIcon
                    icon={isMenuOpen ? faXmark : faBars}
                />
            </button>

            {/* Mobile Dropdown */}
            {isMenuOpen && (
                <ul className="md:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-xl shadow-lg p-6 space-y-5">
                    {links.map((link) => (
                        <li key={link}>
                            <a
                                href={`#${link.toLowerCase()}`}
                                onClick={() => setIsMenuOpen(false)}
                                className="block text-gray-800 hover:text-blue-600 transition"
                            >
                                {link}
                            </a>
                        </li>
                    ))}

                    <li>
                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg w-full transition"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Login
                        </button>
                    </li>
                </ul>
            )}

        </nav>
    );
};

export default NavBar;
