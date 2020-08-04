import React, { Component } from 'react'
import Question from './Question'
import Result from './Result'
import Lywo from './Lywo'

export default class Quizzes extends Component {
  state= {
    questions: [
      {
        questionDesc: "Which of the following methods allow you to add an element to myArray at the end?",
        options: [
          "myArray.pop(element)",
          "myArray.shift(element)",
          "myArray.unshift(element)",
          "myArray.push(element)"
        ],
        correctAnswer: 3,
        answerExplanation: "The push() method adds new items to the end of an array, and returns the new length.",
        answerHTML: ""
      }
    ]
  }

  render() {
    return (
      <div>
        <Lywo/>
        <Question question={this.state.questions[0]}/>
        <Result/>
      </div>
    )
  }
}
