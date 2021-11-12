import React from 'react';

import './Quiz.css'

import LogoMakeSense from '../../assets/images/LogoMakeSenseBlanco.png';
import Sol from '../../assets/images/sol.png'
import QuizHeader from './QuizHeader/QuizHeader';
import QuizFooter from './QuizFooter/QuizFooter';
import Relog from '../../assets/images/relog.png';

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
            <div className="quiz-div-footer">
                <p> <img className="quiz-div-footer-p-img" src={Relog} alt="relog" /> Toma 2 min</p>
                <div className="quiz-div-footer-div">
                    <button>Comenzar</button>
                    <p>Pulsa Enter</p>
                </div>
            </div>
            <QuizFooter />
        </div>
    )
}

export default Quiz
