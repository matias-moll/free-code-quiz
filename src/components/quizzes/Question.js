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

  getClassWhenSelectedOpt = (indexSelected, correctAnswer) => {
    if(indexSelected === this.state.optionSelected){
      if(indexSelected === correctAnswer){
        return "correct-answer";
      }else{
        return "incorrect-answer";
      }
    }
    return "";
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
                <div key={index} className={"answer-option " + 
                this.getClassWhenSelectedOpt.bind(this, index, question.correctAnswer) }>
                  <span>{option}</span>
                </div>
              ):
              (
              <div key={index} className="answer-option" onClick={this.onOptionSelected.bind(this, index)}>
                <span>{option}</span>
              </div>
              )
            ))}
          </div>
        </div>
        <Answer/>
      </div>
    )
  }
}
