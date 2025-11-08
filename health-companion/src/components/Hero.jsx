const Hero = ({ onExplore }) => {
  return (
    <section className="hero">
      <p className="hero-tag">Daily health wins for every household</p>
      <h1 className="hero-title">
        Small habits can ease common diseases without leaving home
      </h1>
      <p className="hero-subtitle">
        Explore simple diet, exercise, and lifestyle actions that are backed by trusted
        health experts. Learn what to do, when to rest, and when to call a doctor. Easy
        words, visual guides, and quick logging make progress clear for every family
        member.
      </p>
      <button className="primary-btn" onClick={onExplore}>
        Discover my health guide
      </button>
      <p className="disclaimer">
        This app shares general education only. Always seek emergency help for severe
        symptoms and follow medical advice from your healthcare team.
      </p>
    </section>
  )
}

export default Hero
