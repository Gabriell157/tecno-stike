import './listar-partida.css'

export function Partida({ datetime, teamA, teamB, result, status}) {

    return <div>
 
        <p>{datetime}</p>
        <p>{teamA.id}</p>
        <p>{teamB.id}</p>
        <div className='partida'>
        <img className='imagenspartidas' src={teamA.photo} alt="Time A" /> 
        <h1>VS</h1>
        <img className='imagenspartidas' src={teamB.photo} alt="Time B" />
        </div>
        <p>{result.scoreTeamA}</p>
        <p>{result.scoreTeamB}</p>
        <p>{status}</p>

    </div>

}