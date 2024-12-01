import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../components/Header';
import Profil from '../components/Profil';
import Projet from '../components/Projet';
import NavBar from '../components/NavBar'; 
import Skills from '../components/Skills'; 
import Contact from '../components/Contact'; 
import Footer from '../components/Footer'; 

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <div className="bg-white">
      <NavBar />
      <Header />
      <Profil />
      <Projet />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
