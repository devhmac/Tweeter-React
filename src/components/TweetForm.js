import './TweetForm.css'
import { useState } from 'react'

export const TweetForm = (props) => {
  const { addNewTweet } = props
  const [tweetText, setTweetText] = useState("");
  const tweetRemainingLength = 140 - tweetText.length
  const counterStyle = { color: tweetRemainingLength >= 0 ? "Black" : "Red" }


  const submitTweet = event => {
    event.preventDefault()
    if (tweetRemainingLength > 0 && tweetRemainingLength < 140) {
      addNewTweet(tweetText)
      setTweetText('')
    }
  }
  return (
    <section className="new-tweet">
      <form onSubmit={submitTweet} className="tweetSubmit" action="/tweets" method="POST">
        <div className='errorText'></div>
        <div className="newTweetTop">
          <label for="tweet-text">What are you humming about?</label>
          <textarea value={tweetText} onChange={event => { setTweetText(event.target.value) }} name="text" className="tweet-text"></textarea>
        </div>
        <div className="newTweetBottom">
          <button type="submit">Tweet</button>
          <output style={counterStyle} name="counter" className=" counter " for="tweet-text">{140 - tweetText.length}</output>
        </div>
      </form>
    </section>
  )
}