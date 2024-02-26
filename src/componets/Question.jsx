import React, { useState } from 'react'
import QuestionTimer from './QuestionTimer'
import Anwers from './Anwers'
import QUESTIONS from '../questions.js'
const Question = ({index, handleSelectorAnswer, onSkipAnswers }) => {


    const [answer , setAnswer] =useState({
        selectedAnswer:'',
        isCorrect:null
    })

 let timer = 10000; 
 if(answer.selectedAnswer){
    timer = 1000;
     }
     if(answer.isCorrect !==null){
        timer =2000;

     }



    function handlerSelectedAnswer(answer){
        setAnswer({
            selectedAnswer:answer,
        isCorrect:null      
      })
      setTimeout(()=>{
        setAnswer({
            selectedAnswer:answer,
            isCorrect:QUESTIONS[index].answers[0] === answer
        })
        setTimeout(()=>{
            handleSelectorAnswer(answer)
        },2000)
      },1000)

    }

    let answerState = '';
    if(answer.selectedAnswer && answer.isCorrect !==null){
        answerState = answer.isCorrect ? 'Correct':'Wrong';
    }else if(answer.selectedAnswer){
        answerState="answered";
    }

    return (
        <div id="question">
            <QuestionTimer
            key={timer}
                timeOut={timer}
                onTimeout={answer.selectedAnswer=== ''? onSkipAnswers:null} 
                mode={answerState}
                />
            <h2>{QUESTIONS[index].text}</h2>

            <Anwers
                answers={QUESTIONS[index].answers}
                selectedAnswer={answer.selectedAnswer
                }
                answerState={answerState}
                handleSelectorAnswer={handlerSelectedAnswer}

            />

        </div>
    )
}

export default Question