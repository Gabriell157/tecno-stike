import { listarPartidas } from "../../services/partidas-service/listar-partida.service"
import { useState, useEffect } from 'react'
import { Partida } from "../../componentes/partida-componente/partida.componente"
import { Link } from "react-router-dom"
import "./listar.css"

export function ListarPartidas() {


    const [partidas, setPartidas] = useState([])

    useEffect(async () => {
        const listandoPartida = await listarPartidas()
        setPartidas(listandoPartida.content)
    }, [])


    return <div>
        <h1>Partidas</h1>
        {partidas.map(
            (partida) => (<Partida result={partida.result} datetime={partida.datetime} teamA={partida.teamA} teamB={partida.teamB} status={partida.status} />)
        )}

        <div className='botoes'>
            <Link to="/manutencaopartida">
                <button type="button">Manutenção Partidas</button>
            </Link>
            <Link to="/atualizarpartida">
                <button type="button">Atualizar Partidas</button>
            </Link>
            <Link to="/partidasrecentes">
                <button type="button">Partidas Recentes</button>
            </Link>
        </div>
    </div>
}