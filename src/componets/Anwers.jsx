import React, { useRef } from 'react'

export  const Anwers = ({ answers, selectedAnswer, answerState,handleSelectorAnswer }) => {

    const shuffleAnswers = useRef()
    if (!shuffleAnswers.current) {
        shuffleAnswers.current = [...answers];
        shuffleAnswers.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id="answers">
            {shuffleAnswers.current.map((answ) => {
                const isSelected = selectedAnswer === answ;
                let cssClass = '';
                if (answerState === 'answered' && isSelected) {
                    cssClass = 'selected';
                }
                if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                    cssClass = answerState;
                }
                return (
                    <li key={answ} className="answer">
                        <button
                            className={cssClass}
                            onClick={() => handleSelectorAnswer(answ)}
                            disabled={answerState !== ""}>
                            {answ}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}
export default Anwers