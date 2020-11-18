import { useState } from 'react'
import { useHistory, useParams, Link } from 'react-router-dom'
import { Texto } from '../../componentes/texto-componentes/texto.componentes'
import { atualizarPartida } from '../../services'
import './atualizarpartida.css'

export function ManuAtualizarPartida() {

    const params = useParams()
    const history = useHistory()
    const [partida, setPartida] = useState()

    function handleChange(evento) {
        const copia = { ...partida }
        copia[evento.target.name] = evento.target.value
        setPartida(copia)
    }

    async function botaoAtualizarPartida(evento) {
        evento.preventDefault()
        await atualizarPartida(partida, params.id)
        history.push('/paginaprincipal')
    }

    return <div className='atualizarpartida'>


        <Texto nome="scoreTeamA" tipo="text" minhaFuncao={handleChange} linha="Placar Time A" />
        <Texto nome="scoreTeamB" tipo="text" minhaFuncao={handleChange} linha="Placar Time B" />
        <Texto nome="status" tipo="text" minhaFuncao={handleChange} linha="Status da Partida" />

        <button onClick={botaoAtualizarPartida}>Atualizar Partida</button>

        <Link to="/paginainicial">
            <button type="button">Logar </button>
        </Link>

    </div>
}