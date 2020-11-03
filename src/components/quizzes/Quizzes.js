import React from 'react'
import Question from './Question'
import Lywo from './Lywo'
import { getQuestions } from './QuestionsState'

export default function Quizzes() {
  const [questions, setQuestions] = React.useState(getQuestions());
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);

  React.useEffect(() => {
    // API Call here
    //setQuestions(getQuestions());
  }, []);

  const getNextQuestionCallback = () =>{
    let nextQuestionIndex = currentQuestionIndex+1;
    if (nextQuestionIndex >= questions.length){
      alert("There are no more questions! Thanks for playing");
    } else {
      setCurrentQuestionIndex(nextQuestionIndex)
    }
    
  }

  return (
    <div>
      <Lywo hint={questions[currentQuestionIndex].hint}/>
      <Question question={questions[currentQuestionIndex]}  getNextQuestionCallback={getNextQuestionCallback} />
    </div>
  )
}
