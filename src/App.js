import './App.css';
import { Navigation } from './Navigation'
import { Profile } from './Profile'
import { TweetForm } from './TweetFrom'
import { Tweet } from './Tweet'








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
