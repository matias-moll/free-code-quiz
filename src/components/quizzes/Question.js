import React, { Component } from 'react'
import Answer from './Answer'

export default class Question extends Component {
  state = {
    showAnswer:false,
    optionSelected: -1
  }

  onOptionSelected = (indexSelected) => {
    this.setState({showAnswer:true, optionSelected : indexSelected});
  }

  render() {
    const {question} = this.props;
    return (
      <div>
        <h4>Question</h4>
        <div className="question-card">
          <h6 className="card-title">{question.questionDesc}</h6>
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
              <div key={index} className="answer-option" onClick={this.onOptionSelected.bind(this, index)}>
                <span>{option}</span>
              </div>
              )
            ))}
            {this.state.showAnswer && (
            <button id="btn-next-question" className="btn btn-light">Next Question</button>
            )}
          </div>
          
        </div>
        <br/>
        {this.state.showAnswer &&
        <Answer answerDetails={{
            answerExplanation:question.answerExplanation, 
            answerHTML:question.answerHTML
          }}/>}
      </div>
    )
  }
}
