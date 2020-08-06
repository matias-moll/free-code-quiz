import React from 'react'
import lywoImg from '../../img/Lywo.png'

export default function Lywo() {
  return (
    <div id="lywo-container">
      <p id="lywo-message">Hello there, I´m Lywo and I will be your guide in these quizzes! Hope you have fun. Tap on me for hints.</p>
      <img src={lywoImg} alt="Lywo Character" style={{width:120, height:120}}/>
    </div>
  )
}
