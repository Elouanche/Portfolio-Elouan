import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-2.5 px-5 min-h-[10vh] flex justify-center items-center text-center box-border">
      <div className="flex justify-center items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2 text-sm sm:text-xs">
          <i className="fas fa-envelope text-white text-xl sm:text-lg"></i>
          <span>
            <a href="mailto:elouan.chedalleux@gmail.com" className="text-white hover:underline">elouan.chedalleux@gmail.com</a>
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm sm:text-xs">
          <i className="fas fa-map-marker-alt text-white text-xl sm:text-lg"></i>
          <span>
            <a href="https://www.google.com/maps?q=35000+Rennes,+France" target="_blank" className="text-white hover:underline">35000 Rennes, France</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
