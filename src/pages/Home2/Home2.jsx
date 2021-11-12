import React from 'react';

import BannerGif from '../../assets/images/banner_gif.gif';
import HoldUp from '../../assets/images/hold_up.png';
import EmprendedorExp from '../../assets/images/emprendedor_exp.png';
import CiudadanosExp from '../../assets/images/ciudadanos_exp.png';
import OnuCompleto from '../../assets/images/onu-completo.png';
import OnuPng from '../../assets/images/onu_.png';

import './Home2.css';

const Home2 = () => {
    return (
        <div>
            <nav class="navbar bg back_nav">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src="http://mexico.makesense.org/wp-content/uploads/2018/04/makesense_logo_white.png" alt="Make_Sense" id="logo" />
                    </a>
                    <ul class="nav justify-content-end item-nav ul-mobile">
                        <li class="nav-item">
                            <a class="nav-link" href="#">_nosotros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">_contacto</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div id="banner">
                <img src={BannerGif} alt="" />
            </div>
            <div id="contenedor_hold">
                <div class="hold">
                    <img src={HoldUp} alt="" id="hold-up" />
                </div>
                <div class="text_hold">
                    <p class="text_center">
                        es la plataforma de inteligencia colectiva para generar impacto socioambiental. Buscamos vincular las ideas de los emprendedores con la visión de los cuidadanos para juntos co-crear soluciones.
                    </p>
                    <p class="text_center">
                        ¿te sumas al reto?
                    </p>
                </div>
            </div>
            <div id="btn_emprendedor-ciudadano">
                <div id="emprendedor">
                    <img src={EmprendedorExp} alt="" />
                    <img class="ocultar-mobile" src={EmprendedorExp} alt="" />
                </div>
                <div></div>
                <div id="ciudadano">
                    <img src={CiudadanosExp} alt="" />
                    <img class="ocultar-mobile" src={CiudadanosExp} alt="" />
                </div>
            </div>
            <div class="onu">
                {/* <picture> */}
                {/* <img srcset={OnuCompleto} styles="(min-width: 1800px)" /> */}
                {/* <img src={OnuCompleto} alt="" /> */}
                {/* </picture> */}
                <picture>
                    {/* <img srcset={OnuPng} styles="(max-width: 1799px)" /> */}
                    <img src={OnuPng} alt="" />
                </picture>

            </div>
            <footer class="text-center footer-style">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 footer-col">
                            <h3>© make_sense 2021</h3>
                        </div>
                        <div class="col-md-4 footer-col">
                            <h3>Mis redes</h3>
                            <ul class="list-inline">
                                <li>
                                    <a target="_blank" href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a target="_blank" href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a target="_blank" href="#" class="btn-social btn-outline"><i class="fa fa-fw fa-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-4 footer-col">
                            <h3>Trabajo FreeLancer</h3>
                            <p>
                                Copyright &copy; Grupo7 <br /> CoderHack 2021
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home2;
