import React from 'react';

import './Quiz.css'

import LogoMakeSense from '../../assets/images/LogoMakeSenseBlanco.png';
import Sol from '../../assets/images/sol.png'
import QuizHeader from './QuizHeader/QuizHeader';
import QuizFooter from './QuizFooter/QuizFooter';

const Quiz = () => {
    return (
        <div class="quiz">
            <QuizHeader />
            <main className="quiz-main">
                <img className="quiz-main-img" src={LogoMakeSense} alt="Logo Make Sense" />
                <div className="quiz-main-div">
                    <p>¡Hola!</p>
                    <p>Completa las siguientes preguntas para que podamos ayudarte a realizar tu piblicación</p>
                    <p className="quiz-main-div-p3">¿Arrancamos? <img src={Sol} alt="Sol" /></p>
                </div>
            </main>
            <QuizFooter />
        </div>
    )
}

export default Quiz
