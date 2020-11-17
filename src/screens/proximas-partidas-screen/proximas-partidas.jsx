import { useState, useEffect } from 'react'
import { proximasPartidas } from '../../services'
import { ProximasLPartidas } from '../../componentes/partida-componente/proximas-partidas-componentes'

export function ProximasPartidas () {

    const [partidas, setPartidas] = useState([])

    useEffect(async () => {
        const proximaspartidas = await proximasPartidas()
        setPartidas(proximaspartidas.content)
    }, [])


    return <div>
        <h1>Proximas Partidas</h1>

        {partidas.map(
            (partidas) => (<ProximasLPartidas teamA={partidas.teamA} teamB={partidas.teamB} datetime={partidas.datetime} status={partidas.status} result={partidas.result} />)
        )}
        
    </div>
}