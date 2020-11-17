

export function Partida({ datetime, teamA, teamB, result, status}) {

    return <div>

        
        <p>{datetime}</p>
        <p>{teamA.id}</p>
        <p>{teamB.id}</p>
        <img src={teamA.photo} alt="Time A" />
        <img src={teamB.photo} alt="Time B" />
        <p>{result.scoreTeamA}</p>
        <p>{result.scoreTeamB}</p>
        <p>{status}</p>

    </div>

}