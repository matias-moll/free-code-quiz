import React from 'react'
import lywoImg from '../../img/Lywo.png'

export default function Lywo({ hint }){
  const [showHint, setShowHint] = React.useState(false);
  React.useEffect(() => {
    setShowHint(false);
  }, [hint]);

  const onLywoClicked = event =>{
    event.preventDefault();
    setShowHint(true);
  }

  return (
    <div className="flex-centered transparent appear">
      <div id="lywo-message-container" className="clickable">
        <p id="lywo-message" onClick={onLywoClicked}> {showHint?  (<span className="transparent appear">{hint}</span>  ) : 
          (<span>I´m <span className="primary-color">Lywo </span><img id="lywo-tiny" src={lywoImg} alt="Lywo Character" style={{width:30, height:30}}/> and I will be your guide!
          I hope you have fun while learning.
            You can tap on me for hints.</span>)}
        </p>
      </div>
      <a id="lywo-image" href="!#" onClick={onLywoClicked}>
        <img src={lywoImg} alt="Lywo Character" style={{width:150, height:150}}/>
      </a>
    </div>
  )
  
}
