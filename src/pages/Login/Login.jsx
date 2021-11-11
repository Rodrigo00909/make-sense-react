import React from 'react';

import './Login.css';

const Login = () => {
    return (
        <div>
            <section className="login">
                <div className="login-container">
                    <div className="login-title login-center">
                        <h1>HOLD <span>UP</span></h1>
                    </div>
                    <div className="login-reg-section">
                        <h2>Inicia Sesión</h2>
                        <label>
                            <span>Email</span>
                            <input type="email" />
                        </label>
                        <label>
                            <span>Contraseña</span>
                            <input type="password" />
                        </label>
                        <p className="login-reg-section-forgotpass">¿Olvidaste tu contraseña?</p>
                        <button type="button" className="login-reg-section-reg regButton">Iniciar</button>
                        <button type="button" className="googleButton">Conecta con <span>Google</span></button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
