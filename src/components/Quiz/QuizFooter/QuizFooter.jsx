import React from 'react';

import BannerMakeSense from '../../../assets/images/LogoMakeSenseBlanco.png'


import './QuizFooter.css';

const QuizFooter = () => {
    return (
        <div>
            <footer className='quiz-footer'>
                <div className="quiz-footer-div">
                    <img src={BannerMakeSense} alt="" />
                </div>
            </footer>
        </div >
    )
}

export default QuizFooter
