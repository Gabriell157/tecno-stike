import { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Texto } from '../../componentes/texto-componentes/texto.componentes'
import { criarPartida } from '../../services'

export function ManuPartida () {

    
    const history = useHistory()
    const [partida, setPartida] = useState()

    function handleChange(evento) {
        const copia = { ...partida }
        copia[evento.target.name] = evento.target.value
        setPartida(copia)
    }

    async function botaoCriarPartida(evento) {
        evento.preventDefault()
        await criarPartida(partida)
        history.push('/paginaprincipal')    
      }
    
    return <div>
        
        <Texto nome="idTeamA" tipo="text" minhaFuncao={handleChange} linha="Time A" />
        <Texto nome="idTeamB" tipo="text" minhaFuncao={handleChange} linha="Time B" />
        <Texto nome="datetime" tipo="text" minhaFuncao={handleChange} linha="Hora Partida" />

        <button onClick={botaoCriarPartida}>Criar Partida</button>

        <Link to="/paginainicial">
            <button type="button">Logar </button>
        </Link>

    </div>
}