import React, { Component } from 'react'
import Answer from './Answer'

export default class Question extends Component {
  state = {
    showAnswer:false,
    optionSelected: -1,
    correctAnswer:false,
  }

  isAnswerCorrect = () =>{
    return this.optionSelected
  }
  onOptionSelected = (indexSelected, correctAnswerIndex) => {
    this.setState({showAnswer:true, optionSelected : indexSelected, 
                  correctAnswer: indexSelected===correctAnswerIndex});
  }

  onNextQuestionClicked = (getNextQuestionCallback) =>{
    this.setState({
      ...this.state, 
      showAnswer: false});

    getNextQuestionCallback();
  }

  render() {
    const {question, getNextQuestionCallback} = this.props;
    return (
      <div>
        <h3>Question</h3>
        <div className="question-card">
          <p>{question.questionDesc}</p>
          <div className="answer-options">
            {question.options.map((option, index) => (
              this.state.showAnswer ?
              (
                <div key={index} 
                className={"answer-option " + (index === question.correctAnswer ? 
                  "correct-answer" : (index === this.state.optionSelected)? "incorrect-answer": "")}>
                  <span>{option} </span>
                </div>
              ):
              (
              <div key={index} className="answer-option" onClick={this.onOptionSelected.bind(this, index, question.correctAnswer)}>
                <span>{option}</span>
              </div>
              )
            ))}
            
          </div>
        </div>
        {this.state.showAnswer &&
          <div className="flex-column">
            <div id="result-next-container">
              <h4>Answer is 
                { this.state.correctAnswer ?  
                <strong className="correct-result-text"> Correct <span role="img" aria-label="Congratz">🎉</span></strong> 
                :<strong className="incorrect-result-text"> Incorrect <span role="img" aria-label="Congratz">❌</span></strong> }
              </h4>
              <button id="btn-next-question" className="btn btn-light" 
              onClick={this.onNextQuestionClicked.bind(this, getNextQuestionCallback)}>
                Next Question
              </button>
            </div>
            
          
          
          <Answer answerDetails={{
            answerExplanation:question.answerExplanation, 
            answerHTML:question.answerHTML
          }}/>
          </div>
        }
      </div>
    )
  }
}
