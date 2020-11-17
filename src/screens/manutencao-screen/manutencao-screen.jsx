import { useState, useEffect } from 'react'
import { pegarTimes } from '../../services'
import { Time } from '../../componentes/time-componentes/time.componentes'
import { Link } from 'react-router-dom'
import '../manutencao-screen/manutencao-time.css'



export function ManutencaoTime() {

    const [times, setTimes] = useState([])

    useEffect(async () => {
        const pegandoTime = await pegarTimes()
        setTimes(pegandoTime.content)
    }, [])

    return <div className="tabelatimes">

        <h1>Times</h1>
        <div className='listaDeTimes'>
            {times.map(
                (time) => (<Time name={time.name} photo={time.photo} description={time.description} members={time.members} id={time.id} />)
            )}
        </div>

        <div>
            <Link to="/cadastrartime">
                <button type="button">Cadastrar Time</button>
            </Link>
        </div>



    </div>

}