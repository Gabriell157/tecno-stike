import moment from 'moment'

export function CriarPartida({ datetime, idTeamA, idTeamB, })


return <div>

        <p>{moment.utc(datetime).format('MMMM/do/YYYY HH:mm:ss a')}</p>
        <p>{idTeamA}</p>
        <p>{idTeamB}</p>

</div>