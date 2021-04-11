import './App.css';
import React, { useState } from 'react'
import { Navigation } from './components/Navigation'
import { Profile } from './components/Profile'
import { TweetForm } from './components/TweetForm'
import { Tweet } from './components/Tweet'

const initialTweetData = [
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

  const [tweetData, setTweetData] = useState(initialTweetData)


  const tweets = tweetData.map((tweetData, index) => {
    return (<Tweet
      key={index}
      name={tweetData.name}
      handle={tweetData.handle}
      profile_image={tweetData.profile_image}
      text={tweetData.text}
      date={tweetData.date}
    />)
  })

  const addNewTweet = text => {
    const newTweet = {
      name: "Bobbert Mank",
      handle: '@Cadaei',
      profile_image: "https://i.imgur.com/3GvwNBf.png",
      text: text,
      date: "2 days ago"
    }

    setTweetData([newTweet, ...tweetData])
  }

  return (
    <div className="App">
      <body>
        <Navigation />
        <Profile />
        <main className="container">
          <TweetForm addNewTweet={addNewTweet} />
          <section id="tweets-container">
            {tweets}
          </section>
        </main>
      </body>
    </div>
  );
}

export default App;
