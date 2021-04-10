import './App.css';
import { Navigation } from './Navigation'
import { Profile } from './Profile'





const TweetForm = () => {

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

const Tweet = () => {

  return (
    <article class="tweet">
      <header>
        <div class="user">
          <img src="https://i.imgur.com/3GvwNBf.png" alt="" />
          <p>Rosalie Garuglieri</p>
        </div>
        <h4>@MissGaruglieri</h4>
      </header>

      <p>We're going to try to refactor this with react!!!!</p>

      <footer>
        <span>a few seconds ago</span>
        <div>
          <i class="fas fa-flag" aria-hidden="true"></i>
          <i class="fas fa-retweet" aria-hidden="true"></i>
          <i class="fas fa-heart" aria-hidden="true"></i>
        </div>
      </footer>
    </article>
  )
}

function App() {
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <TweetForm />
      <Tweet />
    </div>
  );
}

export default App;
