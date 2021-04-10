export const Tweet = () => {

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