import './App.css';

import { Navigation } from './components/Navigation'
import { Profile } from './components/Profile'
import { TweetForm } from './components/TweetForm'
import { Tweet } from './components/Tweet'


function App() {
  return (
    <div className="App">
      <body>
        <Navigation />
        <Profile />
        <main className="container">
          <TweetForm />
          <section id="tweets-container">
            <Tweet />
          </section>
        </main>
      </body>
    </div>
  );
}

export default App;
