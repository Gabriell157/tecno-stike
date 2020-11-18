import './listar-partida.css'

export function PartidasLRecentes({ teamA, teamB, status }) {

    return <div>

        <p>{teamA.id}</p>
        <p>{teamB.id}</p>
        <div className='partida'>
        <img className='imagenspartidas' src={teamA.photo} alt="Time A" />
        <p>{teamA.name}</p>
        <h1>VS</h1>
        <p>{teamB.name}</p>
        <img className='imagenspartidas' src={teamB.photo} alt="Time B" />
        </div>
        <div className='infodostimes'>
        <h3>{teamA.description}</h3>
        <h3>{teamB.description}</h3>
        </div>
        <div className='infodostimes'>
        <h3>Membros: {teamA.members}</h3>
        <h3>Membros: {teamB.members}</h3>
        </div>
        <div className='status' >
        <h2>{status}</h2>
        </div>

    </div>

}