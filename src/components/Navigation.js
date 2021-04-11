import React from 'react'
import './Navigation.css'
export const Navigation = () => {

  return (
    <nav>
      <span>tweeter</span>
      <div className="writeTweet">
        <span> <span className="bold"> Write </span> a new tweet</span>
        <i className="fas fa-angle-double-down arrow"></i>
      </div>
    </nav>
  )
}