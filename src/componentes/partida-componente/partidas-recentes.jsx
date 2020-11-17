

export function PartidasLRecentes({ teamA, teamB, status }) {

    return <div>

        <p>{teamA.id}</p>
        <p>{teamB.id}</p>
        <img src={teamA.photo} alt="Time A" />
        <img src={teamB.photo} alt="Time B" />
        <p>{teamA.name}</p>
        <p>{teamB.name}</p>
        <p>{teamA.members}</p>
        <p>{teamB.members}</p>
        <p>{teamA.description}</p>
        <p>{teamB.description}</p>]
        <p>{status}</p>

    </div>

}