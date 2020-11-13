import { useState } from 'react'
import { useHistory } from 'react-router-dom'
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
        history.push('/partidas')
        
      }
    
    
    
    return <div>
        
        <Texto nome="datetime" tipo="text" minhaFuncao={handleChange} linha="Hora Partida" />
        <Texto nome="idTeamA" tipo="text" minhaFuncao={handleChange} linha="Time A" />
        <Texto nome="idTeamB" tipo="text" minhaFuncao={handleChange} linha="Time B" />

        <button onClick={botaoCriarPartida}>Criar Partida</button>

    </div>
}