import './Tweet.css'

export const Tweet = (props) => {
  const { name, handle, text, profile_image, date } = props
  return (
    <article className="tweet">
      <header>
        <div className="user">
          <img src={profile_image} alt="" />
          <p>{name}</p>
        </div>
        <h4>{handle}</h4>
      </header>

      <p>{text}</p>

      <footer>
        <span>{date}</span>
        <div>
          <i className="fas fa-flag" aria-hidden="true"></i>
          <i className="fas fa-retweet" aria-hidden="true"></i>
          <i className="fas fa-heart" aria-hidden="true"></i>
        </div>
      </footer>
    </article>
  )
}