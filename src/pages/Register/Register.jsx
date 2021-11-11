import React from 'react';

import './Register.css';

const Register = () => {
    return (
        <div>
            <section className="register">
                <div className="register-container">
                    <div className="register-title register-center">
                        <h1>HOLD <span>UP</span></h1>
                    </div>
                    <div className="register-reg-section">
                        <h2>Registrate</h2>
                        <label>
                            <span>Nombre</span>
                            <input type="text" />
                        </label>
                        <label>
                            <span>Email</span>
                            <input type="email" />
                        </label>
                        <label>
                            <span>Contraseña</span>
                            <input type="password" />
                        </label>
                        <p className="register-reg-section-alreadylog">¿Ya tienes cuenta? Inicia Sesión</p>
                        <button type="button" className="register-reg-section-reg regButton">Registrarse</button>
                        <button type="button" className="googleButton">Conecta con <span>Google</span></button>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Register
