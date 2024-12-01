import React, { useState, useEffect } from "react";
import back_contact from '../assets/img/back_contact.png'; 
import githubImage from '../assets/img/logo-github.png'; 
import linkedinImage from '../assets/img/linkedin.png'; 

const FormulaireContact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    fetch("/api/get_csrf_token.php")
      .then((res) => res.json())
      .then((data) => setCsrfToken(data.token));
  }, []);

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateEmail(email)) {
      setResponseMessage("L'email fourni est invalide.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("message", message);
    formData.append("csrf_token", csrfToken); 

    try {
      const response = await fetch("/api/contact_process.php", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResponseMessage("Votre message a été envoyé avec succès !");
        setEmail('');
        setMessage('');
      } else {
        setResponseMessage(data.message || "Erreur lors de l'envoi du message.");
      }
    } catch (error) {
      setResponseMessage("Une erreur s'est produite.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
  className="contact py-20 bg-cover bg-center relative flex justify-center items-center"
  style={{ 
    backgroundImage: `url(${back_contact})`,
    minHeight: '80vh'  
  }}
  id="Contact"
>
  <div className="contact-content bg-black bg-opacity-50 p-10 rounded-xl shadow-lg max-w-4xl w-full flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
    <div className="contact-form lg:w-[66.666%] w-full">
      <h2 className="text-2xl text-center mb-5 text-white">Convaincu ? Contactez-moi dès maintenant :</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="form-row flex flex-col lg:flex-row gap-5 mb-5">
          {/* Email */}
          <div className="form-group flex-1">
            <label htmlFor="email" className="text-white">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Adresse e-mail"
              required
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-[rgb(146,38,158)]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message" className="text-white">Message :</label>
          <textarea
            id="message"
            name="message"
            placeholder="Votre message"
            required
            className="w-full p-3 border-2 border-gray-300 rounded-md resize-none h-48 focus:outline-none focus:ring-4 focus:ring-[rgb(146,38,158)]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-4 w-full px-6 py-2 bg-[rgba(146,38,158,0.9)] text-white rounded-md hover:bg-[rgba(176, 88, 191,0.9)] focus:outline-none focus:ring-4 focus:ring-[rgb(146,38,158)]"
        >
          {loading ? "Envoi..." : "Envoyer"}
        </button>
      </form>

      {responseMessage && (
        <div className="mt-4 text-center text-white">{responseMessage}</div>
      )}
    </div>

    {/* Infos de Contact */}
    <div className="contact-info lg:w-[33.333%] w-full pl-0 lg:pl-8 border-l-0 lg:border-l-2 border-white text-center lg:text-left">
      <h2 className="text-white text-xl mb-4">CHEDALLEUX Elouan</h2>
      <p className="text-white mb-4">
        Adresse :{" "}
        <a
          href="https://maps.app.goo.gl/gDsnjpvZ5bjxvFhe8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400"
        >
          35000 Rennes
        </a>
      </p>
      <div className="social-links flex justify-center lg:justify-start space-x-4">
        <a
          href="https://github.com/Elouanche?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={githubImage}
            alt="Github link"
            className="w-14 h-14 object-contain transition-transform hover:scale-110"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/elouan-ch%C3%A9dalleux-730378210/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedinImage}
            alt="Linkedin link"
            className="w-14 h-14 object-contain transition-transform hover:scale-110"
          />
        </a>
      </div>
    </div>
  </div>
</section>
  );
};

export default FormulaireContact;
