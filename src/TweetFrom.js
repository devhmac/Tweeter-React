export const TweetForm = () => {

  return (
    <section class="new-tweet">
      <form class="tweetSubmit" action="/tweets" method="POST">
        <div class='errorText'></div>
        <div class="newTweetTop">
          <label for="tweet-text">What are you humming about?</label>
          <textarea name="text" class="tweet-text"></textarea>
        </div>
        <div class="newTweetBottom">
          <button type="submit">Tweet</button>
          <output name="counter" class=" counter " for="tweet-text">140</output>
        </div>
      </form>
    </section>
  )
}