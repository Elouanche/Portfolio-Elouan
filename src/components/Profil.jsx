import React from 'react';
import profilImage from '../assets/img/profil.png';

const ProfilSection = () => {
    return (
        <section className="mt-8 profil" id="Profil">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
                À propos de moi
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-screen-lg mx-auto px-4 py-10">
                <div className="w-full max-w-xs md:max-w-sm overflow-hidden rounded-xl shadow-lg">
                    <img
                        className="w-full h-auto object-cover rounded-lg"
                        src={profilImage}
                        alt="Image de moi-même"
                    />
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left px-4">
                    <p className="mb-4 text-lg md:text-xl">
                        Bonjour !
                    </p>
                    <p className="mb-4 text-lg md:text-xl">
                        Ce qui me motive, c'est la créativité : que ce soit en créant des jeux ou en développant des sites web, j'y trouve un moyen d'exprimer pleinement ma passion.
                    </p>
                    
                    <p className="mb-4 text-lg md:text-xl">
                        Actuellement, je suis à la recherche d'un <span className="font-bold text-[rgba(146,38,158)]">stage ou d'une alternance</span> en <span className="font-bold text-[rgba(146,38,158)]">Développement de jeux vidéo</span>, mais je reste également ouvert à des propositions dans le <span className="font-bold text-[rgba(146,38,158)]">développement web</span>.
                    </p>
                    
                </div>
            </div>
        </section>
    );
};

export default ProfilSection;
