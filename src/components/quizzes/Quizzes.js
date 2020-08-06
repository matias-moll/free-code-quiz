import React, { Component } from 'react'
import Question from './Question'
import Result from './Result'
import Lywo from './Lywo'
import { getQuestions } from './QuestionsState'

export default class Quizzes extends Component {
  state= {
    questions: getQuestions(),
    currentQuestionIndex: 0
  }

  getNextQuestionCallback = () =>{
    let nextQuestionIndex = this.state.currentQuestionIndex+1;
    if(nextQuestionIndex >= this.state.questions.length){
      alert("There are no more questions! Thanks for playing");
    }else{
      this.setState({
        ...this.state, 
        currentQuestionIndex: nextQuestionIndex })
    }
    
  }

  render() {
    return (
      <div>
        <Lywo hint={this.state.questions[this.state.currentQuestionIndex].hint}/>
        <Question question={this.state.questions[this.state.currentQuestionIndex]}  getNextQuestionCallback={this.getNextQuestionCallback} />
        <Result/>
      </div>
    )
  }
}
