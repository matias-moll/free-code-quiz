import React from 'react'
import lywoAboutImg from '../../img/LywoAbout.png'
import contributorsBadgeImg from '../../img/ContributorsBadge.png'

export default function About() {
  return (
    <div>
      <h1><span className="page-title">About</span></h1>
      <section>
        <article id="article-about-FCQ" className="grid-responsive-columns mt-5 slide-in">
          <p>
            Free Code Quiz is an <strong>Open Source & Free Project</strong> created by Matt Moll to help developers practice and flex their web development muscles while having fun and competing for the top spots of the leaderboard.
            <br/>
            <span className="hidden-small">I have always been passionate about learning, teaching and competitions so this was a great opportunity for me to put everything together and help the community. </span></p>
          <div className="flex">
            
            <img id="lywo-about" src={lywoAboutImg} alt="Lywo About" style={{width:200, height:200}}/>
          </div>
        </article>
        <article id="article-about-contribute" className="grid-responsive-columns mt-5 slide-in-delayed">
          <img src={contributorsBadgeImg} alt="Contributor Badge" style={{width:"350px", height:"auto", margin: "auto"}}/>
          <p>
            <strong>If you would like to help you can collaborate on the <a href="https://github.com/matias-moll/free-code-quiz">Github Repository</a>.</strong> 
            <br/><br/>
            Another way to add value to Free Code Quiz is by submitting questions to the app on the contribute menu. We will review the submitions weekly and approve them if they are not repeated and are correct. You will recive a notification every time we review a question you submitted and a Contributor Badge after 5 questions aproved!
          </p>
        </article>
        
      </section>
    </div>
  )
}
