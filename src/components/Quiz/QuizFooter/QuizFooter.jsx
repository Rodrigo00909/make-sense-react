import React from 'react';

import Relog from '../../../assets/images/relog.png'

import './QuizFooter.css';

const QuizFooter = () => {
    return (
        <div>
            <footer className="quiz-footer">
                <p> <img className="quiz-footer-p-img" src={Relog} alt="relog" /> Toma 2 min</p>
                <div className="quiz-footer-div">
                    <button>Comenzar</button>
                    <p>Pulsa Enter</p>
                </div>
            </footer>
        </div>
    )
}

export default QuizFooter
