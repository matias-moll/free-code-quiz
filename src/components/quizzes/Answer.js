import React from 'react'

export default function Answer({answerDetails}) {
  const {answerExplanation, answerHTML, 
    answerIsCorrect, onNextQuestionClicked} = answerDetails;
    console.log(answerDetails);

  return (
    <div className="question-card transparent appear-fast">
      <div id="result-next-container">
        <div className="flex-wrap">
          <div className="mr-2">
            <h4 className="result-answer-text">Answer: </h4>
          </div>
          <div>
            <h4>
            { answerIsCorrect ?  
              <strong className="correct-result-text"> Correct <span role="img" aria-label="Congratz">🎉</span></strong> 
              :<strong className="incorrect-result-text"> Incorrect <span role="img" aria-label="Congratz">❌</span></strong> }
            </h4>
          </div>
        </div>
        <button id="btn-next-question" className="btn btn-light" 
        onClick={onNextQuestionClicked}>
          Next Question
        </button>
      </div>
      <h4>Explanation</h4>
      <div>
        <p>{answerExplanation}</p>
        {answerHTML}
      </div>
    </div>
  )
}
