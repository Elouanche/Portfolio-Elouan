import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom'; 

import urbanLogo from '../assets/img/logo_urban.png';
import transLogo from '../assets/img/trans.png';
import prototypeLogo from '../assets/img/prototype.jpg';

const projects = [
    {
        logo: urbanLogo,
        name: 'Projet Urban',
        description: 'Projet jeux vidéo',
        bgColor: 'bg-urban',
        link: '/urban-rumble'
    },
    {
        logo: transLogo,
        name: 'Projet Trans',
        description: 'Projet application web',
        bgColor: 'bg-trans',
        link: '/transmusicales'
    },
    {
        logo: prototypeLogo,
        name: 'Projet Prototype',
        description: 'Projet de jeux vidéo',
        bgColor: 'bg-prototype',
        link: '/project-2D-October'
    }
];

function Projet() {
    const navigate = useNavigate(); 

    const handleLinkClick = (path) => {
        window.scrollTo(0, 0); 
        navigate(path); 
    };

    return (
        <section className="mt-8 px-4" id="MesProjets">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">Mes projets</h2>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <div
                            onClick={() => handleLinkClick(project.link)} 
                            className={`p-6 rounded-lg shadow-lg text-white text-center ${project.bgColor} cursor-pointer`}
                        >
                            <img 
                                src={project.logo} 
                                alt={`${project.name} logo`} 
                                className="w-20 h-20 sm:w-24 sm:h-24 object-contain mx-auto" 
                            />
                            <h3 className="mt-4 text-lg sm:text-xl font-semibold">{project.name}</h3>
                            <p className="mt-2 text-sm sm:text-base">{project.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Projet;
