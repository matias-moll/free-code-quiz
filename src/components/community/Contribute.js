import React, { Component } from 'react'
import shrineImg from '../../img/ShrineCollaborators.png'


export default class Contribute extends Component {
  render() {
    const options = ["option1", "option2", "option3", "option4"];
    return (
      <div>
        <h1><span className="page-title">Contribute</span></h1>
        <div className="flex">
          
        </div>
        <div className="grid-main-side">
          <form action="" id="form-contribute">
            <div id="question-input" className="input-pair">
              <label htmlFor="question"><strong>Question: </strong></label>
              <input type="text" name="question" id="questionField" maxlength="90"/>
            </div>

            <div className="grid-two-columns centered-90">

              { options.map((elem,index) => (
                <div className="input-pair" key={index}>
                  <label htmlFor={elem}>Option {index+1}:</label>
                  <input type="text" name={elem} id={elem} maxlength="30"/>
                </div>
              ))}

              <div id="correct-option" className="input-pair input-section">
                <label htmlFor="correctOption"><strong>Correct Option: </strong></label>
                <input type="number" name="correctOption" id="correctOptionField" min="1" max="4"/>
              </div>
              <div className="input-pair input-section">
                <label htmlFor="category"><strong>Category: </strong></label>
                <select name="category" id="categoryField">
                  <option value="javascript">Javascript</option>
                  <option value="HTML">HTML</option>
                  <option value="CSS">CSS</option>
                  <option value="generalDevelopment">General Development</option>
                </select>
              </div>

              <div className="input-pair input-section">
                <label htmlFor="hint"><strong>Hint: </strong></label>
                <input type="text" name="hint" id="hintField" maxlength="100"/>
              </div>
              <div className="input-pair input-section">
                <label htmlFor="communication"><strong>Twitter/Email: </strong></label>
                <input type="text" name="communication" id="communicationField" maxlength="40"/>
              </div>

            </div>
           
            <div className="flexed-space-between mt-3 centered-90">
              <input id="btn-collaborate" className="btn btn-primary mt-3" type="submit" value="Submit!"/>
              <button id="btn-github" className="btn btn-primary mt-3"><a href="https://github.com/matias-moll/free-code-quiz"><i class="fab fa-github"></i> Collaborate</a></button>
            </div>
          </form>

          <div id="side-info">
            
            <p className="mt-3"> You can become a contributor to Free Code Quiz! Simply submit your question here and we will review it and let you know if it is approved!</p>
            <div>
              <h4> Join Us </h4>
              <p>If you are a passionate developer looking to collaborate to an Open Source project but you have a hard time starting, this is your opportunity. We have a lot of features planned that are waiting for you. And some small tweaks and bugs too. Free Code Quiz is waiting for you!</p>
            </div>
            <img id="shrine" src={shrineImg} alt="Shrine" style={{width:200, height:200}}/>
          </div>
        </div>
        
      </div>
    )
  }
}
