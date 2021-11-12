import React from 'react';
import FotoPublicacion from '../../assets/images/unsplash_Zz5LQe-VSMY.png'

import './RetoPresentacion.css';

const RetoPresentacion = () => {
    return (
        <div>
            <section className="foro-section">
                <div className="foro-section-publ">
                    <img className="foro-section-publ-img" src={FotoPublicacion} alt="Logo" />
                    <div className="foro-section-publ-descrip">
                        <h4>Agua Potable</h4>
                        <p>Nuestro desafio es buscar la forma más sustentable y viable de llevar nuestros filtros al mercado</p>
                        <div className="foro-section-publ-descrip-button">
                            <button>Comentar</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RetoPresentacion
