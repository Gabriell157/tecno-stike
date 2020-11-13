import { listarPartidas } from "../../services/partidas-service/listar-partida.service"
import { useState, useEffect } from 'react'
import { Partida } from "../../componentes/partida-componente/partida.componente"
import { Link } from "react-router-dom"

export function ListarPartidas() {


    const [partidas, setPartidas] = useState([])

    useEffect(async () => {
        const listandoPartida = await listarPartidas()
        setPartidas(listandoPartida.content)
    }, [])


    return <div>
        <h1>Listar Partidas</h1>
        {partidas.map(
            (partida) => (<Partida datetime={partida.datetime} teamA={partida.teamA} teamB={partida.teamB} />)
        )}

        <Link to="/manutencaopartida">
            <button type="button">Crie Partidas</button>
        </Link>
    </div>
}