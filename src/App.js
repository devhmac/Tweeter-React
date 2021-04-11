import './App.css';

import { Navigation } from './components/Navigation'
import { Profile } from './components/Profile'
import { TweetForm } from './components/TweetForm'
import { Tweet } from './components/Tweet'

const tweetsData = [
  {
    name: "Devin MacGillivray",
    handle: '@Cadaei',
    profile_image: "https://i.imgur.com/3GvwNBf.png",
    text: "We're going to try to refactor this with react!!!!",
    date: "a few seconds ago"

  },
  {
    name: "Amy Bob",
    handle: '@Assisi',
    profile_image: "https://i.imgur.com/3GvwNBf.png",
    text: "Wow cool dots",
    date: "10 Days ago"

  }
]

function App() {
  const tweets = tweetsData.map(tweetData => {
    return (<Tweet
      name={tweetData.name}
      handle={tweetData.handle}
      profile_image={tweetData.profile_image}
      text={tweetData.text}
      date={tweetData.date}
    />)
  })

  return (
    <div className="App">
      <body>
        <Navigation />
        <Profile />
        <main className="container">
          <TweetForm />
          <section id="tweets-container">
            {tweets}
          </section>
        </main>
      </body>
    </div>
  );
}

export default App;
