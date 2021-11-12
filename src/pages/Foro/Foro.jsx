import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import RetoPresentacion from '../../components/RetoPresentacion/RetoPresentacion';
import FotoCiudadano from '../../assets/images/unsplash_dXmXKPP2L4E.png'

import './Foro.css';

const Foro = () => {
    return (
        <div>
            <Navbar />
            <div className="foro">
                <section className="foro-section">
                    <RetoPresentacion />
                    <RetoPresentacion />
                    <RetoPresentacion />
                    <RetoPresentacion />
                    <RetoPresentacion />
                </section>
                <section className="filters-section">
                    <div className="filters-section-div">
                        <p>...</p>
                        <div className="filters-section-div-perfil">
                            <img src={FotoCiudadano} alt="Foto de Ciudadano" />
                            <h3>Gabriela Gomez</h3>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Foro
