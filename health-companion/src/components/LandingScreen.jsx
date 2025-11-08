const LandingScreen = ({ onStart }) => {
  return (
    <div className="screen landing-screen">
      <header className="landing-header">
        <span className="landing-pill">Better days start today</span>
        <h1>Simple daily habits that calm common diseases</h1>
        <p>
          Learn practical diet, exercise, and lifestyle steps that are backed by trusted
          health organisations. We keep the words easy, the actions clear, and always
          remind you when to contact a doctor.
        </p>
      </header>
      <button type="button" className="primary-btn" onClick={onStart}>
        Explore the guides
      </button>
      <footer className="landing-footer">
        <p>
          This app shares education only. If you feel severe pain, trouble breathing, or
          any emergency warning signals, call local emergency services or your healthcare
          provider immediately.
        </p>
      </footer>
    </div>
  )
}

export default LandingScreen
