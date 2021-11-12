import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

import './Login.css';

const Login = () => {
    return (
        <div>
            <Navbar />
            <div className="login">
                <section className="login-form">
                    <div className="login-container">
                        <div className="login-reg-section">
                            <h2>Inicia Sesión</h2>
                            <p>¿Necesitas una cuenta de Makesense? <br />Registrate</p>
                            <label>
                                <span>Email</span>
                                <input type="email" />
                            </label>
                            <label>
                                <span>Contraseña</span>
                                <input type="password" />
                            </label>
                            <p className="login-reg-section-forgotpass">¿Olvidaste tu contraseña?</p>
                            <button type="button" className="googleButton">Conecta con <span>Google</span></button>
                            <button type="button" className="login-reg-section-reg regButton">Accede</button>
                        </div>
                    </div>
                </section>
                <section className="login-aside"></section>
            </div>
        </div>
    )
}

export default Login
