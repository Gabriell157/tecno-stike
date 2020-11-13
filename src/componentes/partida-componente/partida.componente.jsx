

export function Partida({ datetime, teamA, teamB }) {

return <div>

    <p>{datetime}</p>
    <p>{teamA.id}</p>
    <p>{teamB.id}</p>
    <img src={teamA.photo} alt=""/>
    <img src={teamB.photo} alt=""/>

</div>

}