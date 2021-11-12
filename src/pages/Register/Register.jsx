import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

import './Register.css';

const Register = () => {
    return (
        <div>
            <Navbar />
            <div className="register">
                <section className="register-aside"></section>
                <section className="register-form">
                    <div className="register-container">
                        <div className="register-reg-section">
                            <h2>Registrate</h2>
                            <p>¡Donde tus ideas tienen impacto!</p>
                            <label>
                                <span>Email</span>
                                <input type="email" />
                            </label>
                            <label>
                                <span>Contraseña</span>
                                <input type="password" />
                            </label>
                            <p className="register-reg-section-forgotpass">¿Ya tienes cuenta? <a href="#">Accede</a></p>
                            <button type="button" className="googleButton">Conecta con <span>Google</span></button>
                            <button type="button" className="register-reg-section-reg regButton">Accede</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Register
