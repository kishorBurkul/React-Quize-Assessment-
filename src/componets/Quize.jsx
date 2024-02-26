import { useCallback, useRef, useState } from "react";
import QUESTIONS from '../questions';
import quizCompltedImg from '../assets/quiz-complete.png';
import QuestionTimer from "./QuestionTimer";
import  Anwers  from "./Anwers";
import Question from "./Question";
import Summary from "./Summary";

export default function Quize() {
    // const [answerState, setAnwerstate] = useState('')
    const [userAnswers, setUserAnswers] = useState([])

    const activeQuestionIndex =userAnswers.length

    const quizeCompleted = activeQuestionIndex === QUESTIONS.length;


    const handleSelectorAnswer = useCallback(
        function handleSelectorAnswer(selectedAnswer) {
        // setAnwerstate('answered');
        setUserAnswers((prevAnswer) => {
            return [...prevAnswer, selectedAnswer];
        });

        // setTimeout(() => {
        //     if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
        //         setAnwerstate("Correct");
        //     } else {
        //         setAnwerstate("Wrong")
        //     }

        //  setTimeout(()=>{
        //     setAnwerstate('')
        //  },2000)
       // }, 1000)

    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectorAnswer(null), [handleSelectorAnswer])

    if (quizeCompleted) {
       return <Summary userAnswers={userAnswers}/>
    }

    


    return <>
        <div id="quiz">
           <Question
           key={activeQuestionIndex}
           index={activeQuestionIndex}
        //    QuestionText={QUESTIONS[activeQuestionIndex].text}
        //    answers={QUESTIONS[activeQuestionIndex].answers}
        //    answerState={answerState}
        //    selectedAnswer={userAnswers[userAnswers.length - 1 ]}
           handleSelectorAnswer={handleSelectorAnswer}
           onSkipAnswers = {handleSkipAnswer}
           />
        </div>
    </>

}