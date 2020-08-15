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
        <div className="question-card">
          <h3>Question</h3>
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
          <Answer answerDetails={{
            answerExplanation:question.answerExplanation, 
            answerHTML:question.answerHTML,
            answerIsCorrect: this.state.correctAnswer,
            onNextQuestionClicked: this.onNextQuestionClicked.bind(this, getNextQuestionCallback)
          }}/>
        }
      </div>
    )
  }
}
