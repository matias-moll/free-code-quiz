import React from 'react'

export default function Topbar() {
  return (
    <div id="topbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <a className="navbar-brand" href="/">
          {/* Add icon here*/}
          Free Code Quiz
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="!#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="!#">ScoreBoard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="!#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="!#">Collaborate</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
