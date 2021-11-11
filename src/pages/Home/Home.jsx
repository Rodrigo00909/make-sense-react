import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import BannerMakeSense from '../../assets/images/banner-makesense.png';

import './Home.css';

const Home = () => {
    return (
        <div>
            <Navbar />
            <section className="header">
                <div className="header-banner">
                    <img className="header-img-banner" src={BannerMakeSense} alt="Banner Make Sense" />
                </div>
            </section>
            <section className="main">
                <div className="main-container">
                    <div className="main-title main-center">
                        <h1>HOLD <span>UP</span></h1>
                    </div>
                    <div className="main-text main-center">
                        <h2>Plataforma de co-creación entre emprendedores socioambientales y ciudadanos para dar solución a un reto específico de un proyecto.</h2>
                    </div>
                    <div className="main-row">
                        <p className="main-text-buttons">¡Comienza Ahora!</p>
                        <div className="main-center">
                            <button className="main-btn main-btn-emprendedor">Soy Emprendedor</button>
                            <button className="main-btn main-btn-ciudadano">Soy Ciudadano</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
