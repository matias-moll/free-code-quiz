import React, { Component } from 'react'

export default class Answer extends Component {
  render() {
    const {answerExplanation, answerHTML, 
      answerIsCorrect, onNextQuestionClicked} = this.props.answerDetails;
    return (
      <div className="flex-column">
        <div className="question-card">
          <div id="result-next-container">
            <div>
              <h4 className="result-answer-text">Answer is 
                  { answerIsCorrect ?  
                  <strong className="correct-result-text"> Correct <span role="img" aria-label="Congratz">🎉</span></strong> 
                  :<strong className="incorrect-result-text"> Incorrect <span role="img" aria-label="Congratz">❌</span></strong> }
              </h4>
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
      </div>
    )
  }
}
