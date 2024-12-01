import React, { useState, useEffect } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - window.innerHeight * 0.09,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className={`fixed top-0 left-0 w-full h-[10vh] z-30 flex justify-between items-center transition-all duration-600 ${isScrolled ? 'bg-black' : 'bg-transparent'}`}>
            <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto px-4">
                <h2>
                    <a href="#Top" className="text-white text-2xl">Portfolio 2024</a>
                </h2>
                <button
                    className="md:hidden text-white text-3xl focus:outline-none transform transition-transform duration-300"
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}
                >
                    <div className={`burger-icon ${isOpen ? 'open' : ''}`}>
                        <span className="block w-6 h-0.5 bg-white mb-1"></span>
                        <span className="block w-6 h-0.5 bg-white mb-1"></span>
                        <span className="block w-6 h-0.5 bg-white mb-1"></span>
                    </div>
                </button>
                <nav className="hidden md:flex md:items-center md:space-x-8">
                    <ul className="flex md:flex-row flex-col md:space-x-8">
                        <li>
                            <a
                                href="#Profil"
                                className="text-white text-xl md:text-2xl hover:underline"
                                onClick={(e) => { e.preventDefault(); scrollToSection('Profil'); }}
                            >
                                Profil
                            </a>
                        </li>
                        <li>
                            <a
                                href="#MesProjets"
                                className="text-white text-xl md:text-2xl hover:underline"
                                onClick={(e) => { e.preventDefault(); scrollToSection('MesProjets'); }}
                            >
                                Projets
                            </a>
                        </li>
                        <li>
                            <a
                                href="#Skills"
                                className="text-white text-xl md:text-2xl hover:underline"
                                onClick={(e) => { e.preventDefault(); scrollToSection('Skills'); }}
                            >
                                Compétences
                            </a>
                        </li>
                        <li>
                            <a
                                href="#Contact"
                                className="text-white text-xl md:text-2xl hover:underline"
                                onClick={(e) => { e.preventDefault(); scrollToSection('Contact'); }}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Menu burger */}
            <nav className={`md:hidden ${isOpen ? 'flex flex-col absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 z-30 backdrop-blur-sm' : 'hidden'}`}>
                <button
                    className="absolute top-5 right-5 text-white text-3xl"
                    aria-label="Close navigation"
                    onClick={toggleMenu}
                >
                    ✖
                </button>
                <ul className="flex flex-col items-center justify-center h-full space-y-10"> 
                    <li>
                        <a
                            href="#Profil"
                            className="text-white text-3xl hover:text-yellow-400 hover:bg-white hover:rounded-md p-4 w-[80%] text-center transition-colors duration-300"
                            onClick={(e) => { e.preventDefault(); scrollToSection('Profil'); closeMenu(); }}
                        >
                            Profil
                        </a>
                    </li>
                    <li>
                        <a
                            href="#MesProjets"
                            className="text-white text-3xl hover:text-yellow-400 hover:bg-white hover:rounded-md p-4 w-[80%] text-center transition-colors duration-300"
                            onClick={(e) => { e.preventDefault(); scrollToSection('MesProjets'); closeMenu(); }}
                        >
                            Projets
                        </a>
                    </li>
                    <li>
                        <a
                            href="#Skills"
                            className="text-white text-3xl hover:text-yellow-400 hover:bg-white hover:rounded-md p-4 w-[80%] text-center transition-colors duration-300"
                            onClick={(e) => { e.preventDefault(); scrollToSection('Skills'); closeMenu(); }}
                        >
                            Compétences
                        </a>
                    </li>
                    <li>
                        <a
                            href="#Contact"
                            className="text-white text-3xl hover:text-yellow-400 hover:bg-white hover:rounded-md p-4 w-[80%] text-center transition-colors duration-300"
                            onClick={(e) => { e.preventDefault(); scrollToSection('Contact'); closeMenu(); }}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
