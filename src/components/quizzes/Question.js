import React, { Component } from 'react'

export default class Question extends Component {
  state = {
    question: "Which of the following methods allow you to add an element to myArray at the end?",
    options: [
      "myArray.pop(element)",
      "myArray.shift(element)",
      "myArray.unshift(element)",
      "myArray.push(element)",
    ],
    correctAnswer: 3,
  }

  onOptionSelected = (indexSelected) => {
    if(this.state.correctAnswer === indexSelected){
      alert("Correct Answer");
    }
    else{
      alert("Wrong Answer");
    }
  }

  render() {
    return (
      <div>
        <h4>Question</h4>
        <div className="question-card">
          <h6 className="card-title">{this.state.question}</h6>
          <div className="answer-options">
            {this.state.options.map((option, index) => (
              <div key={index} className="answer-option" onClick={this.onOptionSelected.bind(this, index)}>
                <span>{option}</span>
              </div>
            ))}
          </div>
        </div>
    </div>
    )
  }
}
