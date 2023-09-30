import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    umpires,
    manOfTheMatch,
  } = latestMatchData

  return (
    <div className="match-container">
      <h1 className="match-heading">Latest Matches</h1>
      <div className="match-card">
        <div className="match-details-logo">
          <div className="match-details">
            <p className="team-name">{competingTeam}</p>
            <p className="match-date">{date}</p>
            <p className="match-venue">{venue}</p>
            <p className="match-venue">{result}</p>
          </div>
          <img
            className="match-logo"
            alt={`latest match ${competingTeam}`}
            src={competingTeamLogo}
          />
        </div>
        <hr className="line" />
        <div className="innings-details">
          <p className="label">First Innings</p>
          <p className="value">{firstInnings}</p>
          <p className="label">Second Innings</p>
          <p className="value">{secondInnings}</p>
          <p className="label">Man Of The Match</p>
          <p className="value">{manOfTheMatch}</p>
          <p className="label">Umpires</p>
          <p className="value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
