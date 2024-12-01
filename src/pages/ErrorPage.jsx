import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goToTop = () => {
    navigate("/#Top");
    setTimeout(() => {
      const element = document.querySelector("#Top");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 0); 
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl">Oups ! Que cherchez-vous ?</p>        
        <p className="mt-4">Retournez à l'accueil en cliquant sur le bouton ci-dessous.</p>
        <button
          onClick={goToTop}
          className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-600 transition"
        >
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
