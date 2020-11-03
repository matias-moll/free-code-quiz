import React from 'react'
import Answer from './Answer'

export default function Question({question, getNextQuestionCallback}) {
  const[showAnswer, setShowAnswer] = React.useState(false);
  const[optionSelected, setOptionSelected] = React.useState(-1);
  const[correctAnswer, setCorrectAnswer] = React.useState(false);

  const onOptionSelected = (indexSelected, correctAnswerIndex) => {
    setShowAnswer(true);
    setOptionSelected(indexSelected);
    setCorrectAnswer(indexSelected===correctAnswerIndex);
  }

  const onNextQuestionClicked = (getNextQuestionCallback) =>{
    setShowAnswer(false);
    getNextQuestionCallback();
  }

  return (
    <div className="transparent appear">
      <div className="question-card">
        <h3>Question</h3>
        <p>{question.questionDesc}</p>
        <div className="answer-options">
          {question.options.map((option, index) => (
            showAnswer ?
            (
              <div key={index} 
              className={"answer-option answered " + (index === question.correctAnswer ? 
                "correct-answer" : (index === optionSelected)? "incorrect-answer": "")}>
                <span>{option} </span>
              </div>
            ):
            (
            <div key={index} className="answer-option" onClick={() => onOptionSelected(index, question.correctAnswer)}>
              <span>{option}</span>
            </div>
            )
          ))}
          
        </div>
      </div>
      {showAnswer &&
        <Answer answerDetails={{
          answerExplanation:question.answerExplanation, 
          answerHTML:question.answerHTML,
          answerIsCorrect: correctAnswer,
          onNextQuestionClicked: () => onNextQuestionClicked(getNextQuestionCallback)
        }}/>
      }
    </div>
  )
  
}
