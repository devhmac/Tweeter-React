import './TweetForm.css'

export const TweetForm = () => {

  return (
    <section className="new-tweet">
      <form className="tweetSubmit" action="/tweets" method="POST">
        <div className='errorText'></div>
        <div className="newTweetTop">
          <label for="tweet-text">What are you humming about?</label>
          <textarea name="text" className="tweet-text"></textarea>
        </div>
        <div className="newTweetBottom">
          <button type="submit">Tweet</button>
          <output name="counter" className=" counter " for="tweet-text">140</output>
        </div>
      </form>
    </section>
  )
}