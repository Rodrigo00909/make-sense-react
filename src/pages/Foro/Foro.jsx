import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import RetoPresentacion from '../../components/RetoPresentacion/RetoPresentacion';
import FotoCiudadano from '../../assets/images/unsplash_dXmXKPP2L4E.png'
import FiltroForo from '../../components/FiltroForo/FiltroForo';
import MenuHorizontal from '../../assets/images/carbon_overflow-menu-horizontal.png';

import AguaUrbana from '../../assets/images/1.png';
import AlimentacionSustentable from '../../assets/images/2.png';
import ConsumoResponsable from '../../assets/images/3.png';
import DiseñoUrbano from '../../assets/images/4.png';
import EnergiasLimpias from '../../assets/images/5.png';
import Movilidad from '../../assets/images/6.png';
import TejidoSocial from '../../assets/images/7.png';

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
                        <div className="filters-section-div-button"><button><img src={MenuHorizontal} alt="" /></button></div>
                        <div className="filters-section-div-perfil">
                            <img src={FotoCiudadano} alt="Foto de Ciudadano" />
                            <h3>Gabriela Gomez</h3>
                        </div>
                        <div className="filters-section-div-filter">
                            <FiltroForo filterImg={AguaUrbana} filterName='Agua Urbana' altern='Agua Urbana' />
                            <FiltroForo filterImg={AlimentacionSustentable} filterName='Alimentacion Sustentable' altern='Alimentacion Sustentable' />
                            <FiltroForo filterImg={ConsumoResponsable} filterName='Consumo Responsable' altern='Consumo Responsable' />
                            <FiltroForo filterImg={DiseñoUrbano} filterName='Diseño Urbano' altern='Diseño Urbano' />
                            <FiltroForo filterImg={EnergiasLimpias} filterName='Energias Limpias' altern='Energias Limpias' />
                            <FiltroForo filterImg={Movilidad} filterName='Movilidad' altern='Movilidad' />
                            <FiltroForo filterImg={TejidoSocial} filterName='Tejido Social' altern='Tejido Social' />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Foro
