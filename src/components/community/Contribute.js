import React from 'react'
import shrineImg from '../../img/ShrineCollaborators.png'


export default function Contribute() {
  const options = ["option1", "option2", "option3", "option4"];

  return (
    <div>
      <div className="flex-space-between">
        <h1><span className="page-title">Contribute</span></h1>
        <button id="btn-github-header" className="btn btn-primary btn-github mt-4 mb-2">
          <a href="https://github.com/matias-moll/free-code-quiz">
            <i class="fab fa-github"></i> <span className="hidden-extrasmall">Collaborate</span>
          </a>
        </button>
      </div>
      <div className="grid-main-side">
        <form action="" id="form-contribute" className="transparent appear-slow">
          <div id="question-input" className="input-pair">
            <label htmlFor="question"><strong>Question: </strong></label>
            <input type="text" name="question" id="questionField" maxlength="90"/>
          </div>

          <div id="grid-inputs-contribute" className="grid-two-columns centered-90 small-100">

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
          
          <div className="flex-centered mt-3 centered-90 small-100">
            <input id="btn-collaborate" className="btn btn-primary mt-3 small-100" type="submit" value="Submit!"/>
          </div>
        </form>

        <div id="side-info" className="come-from-right slide-in-delayed">
          
          <p className="mt-3"> You can become a contributor to Free Code Quiz! Submit your question, we will then review it and let you know if it is approved!</p>
          <div>
            <div className="flex-space-between">
              <h4> Join Us </h4>
              <button id="btn-github-side" className="btn btn-primary btn-github"><a href="https://github.com/matias-moll/free-code-quiz"><i class="fab fa-github"></i> Collaborate</a></button>
            </div>
            
            <p>If you are a passionate developer looking to collaborate in an Open Source project this is your opportunity. We have a lot of features planned ready for you to jump in. Free Code Quiz is waiting for you!</p>
          </div>
          <img id="shrine" src={shrineImg} alt="Shrine" style={{width:250, height:250}}/>
        </div>
      </div>
      
    </div>
  )
  
}
