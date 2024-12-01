import React from 'react';
import headerImage from '../assets/img/header.png'; 

const Header = () => {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - window.innerHeight * 0.11, 
                behavior: 'smooth',
            });
        }
    };

    return (
        <header id="Top" className="relative w-full h-screen overflow-hidden flex flex-col items-center pt-[10vh]">
            <div
                className="absolute w-full h-full top-0 left-0 z-1 bg-no-repeat bg-center bg-cover"
                style={{
                    backgroundImage: `url(${headerImage})`,
                    filter: 'brightness(0.7)'
                }}
            ></div>

            <div className="relative w-full h-[calc(100%+20vh)] flex flex-col justify-center items-center text-white text-center z-10 p-5 text-[1.2em]">
                <h1 className="text-[clamp(2rem,5vw,4rem)] mb-0">CHEDALLEUX Elouan</h1>
                <h2 className="text-[clamp(1.2rem,3.5vw,2.5rem)] mt-0 mb-[5%]">
                    <strong>Recherche Stage / Alternance</strong>
                    <br />Développement de jeux vidéo 
                </h2>
                <button
                    onClick={() => scrollToSection('Profil')}
                    className="cursor-pointer text-decoration-none bg-[rgba(146,38,158,0.9)] text-white py-2 px-5 rounded-full transition duration-300 ease-in-out text-[clamp(1rem,3vw,2rem)] hover:bg-[rgba(176, 88, 191,0.9)] transition-colors"
                >
                    QUI SUIS-JE ?
                </button>
            </div>
        </header>
    );
};

export default Header;
