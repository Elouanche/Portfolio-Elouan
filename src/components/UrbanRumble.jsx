import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

import menuImage from "../assets/img/menu.png";
import oneGamePlayPlayerImage from "../assets/img/onegameplayplayer.png";
import twoPlayerImage from "../assets/img/twoplayer.png";
import mapImage from "../assets/img/map.png";

const UrbanRumble = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const screenshots = [
    menuImage,
    oneGamePlayPlayerImage,
    twoPlayerImage,
    mapImage,
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
     <header className="fixed top-0 left-0 w-full h-[10vh] bg-black z-30 flex justify-between items-center shadow-lg">
        <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto px-4">
          <h2>
            <Link to="/#Top" className="text-white text-2xl">
              Portfolio 2024
            </Link>
          </h2>
          <button
            className="md:hidden text-white text-3xl focus:outline-none transform transition-transform duration-300"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <div className={`burger-icon ${isMenuOpen ? 'open' : ''}`}>
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
            </div>
          </button>
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <ul className="flex md:flex-row flex-col md:space-x-8">
              <li>
                <Link to="/#Profil" className="text-white text-xl md:text-2xl hover:underline">
                  Profil
                </Link>
              </li>
              <li>
                <Link to="/#MesProjets" className="text-white text-xl md:text-2xl hover:underline">
                  Projets
                </Link>
              </li>
              <li>
                <Link to="/#Skills" className="text-white text-xl md:text-2xl hover:underline">
                  Compétences
                </Link>
              </li>
              <li>
                <Link to="/#Contact" className="text-white text-xl md:text-2xl hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Menu burger */}
        <nav className={`md:hidden ${isMenuOpen ? "flex flex-col absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 z-30 backdrop-blur-sm" : "hidden"}`}>
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            aria-label="Close navigation"
            onClick={toggleMenu}
          >
            ✖
          </button>
          <ul className="flex flex-col items-center justify-center h-full space-y-10">
            <li>
              <Link to="/#Profil" className="text-white text-3xl hover:text-yellow-400 hover:bg-white hover:rounded-md p-4 w-[80%] text-center transition-colors duration-300" onClick={toggleMenu}>
                Profil
              </Link>
            </li>
            <li>
              <Link to="/#MesProjets" className="text-white text-3xl hover:text-yellow-400 hover:bg-white hover:rounded-md p-4 w-[80%] text-center transition-colors duration-300" onClick={toggleMenu}>
                Projets
              </Link>
            </li>
            <li>
              <Link to="/#Skills" className="text-white text-3xl hover:text-yellow-400 hover:bg-white hover:rounded-md p-4 w-[80%] text-center transition-colors duration-300" onClick={toggleMenu}>
                Compétences
              </Link>
            </li>
            <li>
              <Link to="/#Contact" className="text-white text-3xl hover:text-yellow-400 hover:bg-white hover:rounded-md p-4 w-[80%] text-center transition-colors duration-300" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center p-4 mt-[10vh]">
        <div className="projet-global border-2 border-black rounded-lg bg-white shadow-md p-6 max-w-4xl">
          <div className="projet-text flex flex-col md:flex-row gap-6">
            <div className="projet-description flex-1 bg-white border-2 border-black rounded-lg p-4 shadow-md">
              <h2 className="text-xl font-semibold border-b-2 border-black pb-2 mb-4 text-gray-800">
                Description Urban Rumble
              </h2>
              <p>
                Urban Rumble est un jeu vidéo de combat créé par des étudiants en première année
                d'informatique et de 3D à Rennes Ynov Campus.
              </p>
            </div>

            <div className="projet-techno flex-1 bg-white border-2 border-black rounded-lg p-4 shadow-md">
              <h2 className="text-xl font-semibold border-b-2 border-black pb-2 mb-4 text-gray-800">
                Technologies utilisées :
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Unreal Engine (Blueprint)</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Trello</li>
              </ul>
            </div>
          </div>

          {/* screens */}
          <div className="screenshots mt-8">
            <h2 className="text-xl font-bold text-center mb-6 border-b-2 border-black pb-2">
              Captures d'écran du projet
            </h2>
            <div className="screenshot-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
              {screenshots.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg border-2 border-black cursor-pointer shadow-md hover:shadow-lg"
                  onClick={() => openModal(src)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Return */}
        <div className="return-home mt-8">
          <Link
            to="/#MesProjets" 
            className="inline-block px-6 py-3 text-white rounded-md shadow-lg border-2 border-black transition hover:opacity-80"
            style={{
              backgroundImage: "linear-gradient(#9866A8, #E36F33)",
            }}
          >
            Retourner à l'accueil
          </Link>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl"
            aria-label="Close modal"
            onClick={closeModal}
          >
            &times;
          </button>
          <img
            src={currentImage}
            alt="Screenshot"
            className="max-w-full max-h-full rounded-lg border-4 border-black"
          />
        </div>
      )}
    </div>
  );
};

export default UrbanRumble;