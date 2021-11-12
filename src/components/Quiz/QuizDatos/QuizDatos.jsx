import React from 'react';
import QuizFooter from '../QuizFooter/QuizFooter';
import QuizHeader from '../QuizHeader/QuizHeader';

import './QuizDatos.css'

const QuizDatos = () => {
    return (
        <div>
            <QuizHeader />
            <main className="quiz-datos-main">
                <div className="quiz-datos-main-div">
                    <label>
                        <span>Nombre de tu proyecto</span>
                        <input type="email" />
                    </label>
                    <label>
                        <span>Descripción</span>
                        <input type="password" />
                    </label>
                </div>
            </main>
            <QuizFooter />
        </div>
    )
}

export default QuizDatos
