import { useState, useEffect } from 'react'
import { PartidasLRecentes } from '../../componentes/partida-componente/partidas-recentes'
import { Link } from 'react-router-dom'
import { partidasRecentes } from '../../services'



export function PartidasRecentes() {


    const [partidas, setPartidas] = useState([])

    useEffect(async () => {
        const partidarecentes = await partidasRecentes()
        setPartidas(partidarecentes.content)
    }, [])


    return <div>
        <h1>Partidas Anteriores</h1>

        {partidas.map(
            (partidas) => (<PartidasLRecentes teamA={partidas.teamA} teamB={partidas.teamB} datetime={partidas.datetime} status={partidas.status} />)
        )}

        <Link to="/proximaspartidas">
            <button type="button">Proximas Partidas</button>
        </Link>
        <Link to="/paginainicial">
            <button type="button">Logar </button>
        </Link>

    </div>
}