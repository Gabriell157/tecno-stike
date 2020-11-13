import { useState, useEffect } from 'react'
import { pegarTimes } from '../../services'
import { Time } from '../../componentes/time-componentes/time.componentes'
import { Link } from 'react-router-dom'




export function ManutencaoTime() {

    const [times, setTimes] = useState([])

    useEffect(async () => {
        const pegandoTime = await pegarTimes()
        setTimes(pegandoTime.content)
    }, [])

    return <div>

        

        <Link to="/cadastro">
            <button type="button">Registro</button>
        </Link>

        <Link to="/login">
            <button type="button">Logar</button>
        </Link>

        {times.map(
            (time) => (<Time name={time.name} photo={time.photo} description={time.description} members={time.members} id={time.id} />)
        )}

        <Link to="/cadastrartime">
            <button type="button">Cadastrar Time</button>
        </Link>


    </div>
}