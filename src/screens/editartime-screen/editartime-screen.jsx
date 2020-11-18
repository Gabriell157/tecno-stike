import { useState } from 'react'
import { Texto } from '../../componentes/texto-componentes/texto.componentes'
import { atualizarTime } from '../../services'
import { useHistory, useParams } from 'react-router-dom'
import './editartime.css'

export function EditarTime() {

    const params = useParams()
    const history = useHistory()
    const [time, setTimes] = useState()

    function handleChange(evento) {
        const copia = { ...time }
        copia[evento.target.name] = evento.target.value
        setTimes(copia)
    }

    async function botaoEditarTime(evento) {
        evento.preventDefault()
        await atualizarTime(time, params.id)
        history.push('/paginainicial')
    }


    return <div className='editartime'>

        <Texto nome="name" tipo="text" minhaFuncao={handleChange} linha="Time" />
        <Texto nome="members" tipo="text" minhaFuncao={handleChange} linha="Membros" />
        <Texto nome="description" tipo="text" minhaFuncao={handleChange} linha="Descrição" />
        <Texto nome="photo" tipo="text" minhaFuncao={handleChange} linha="Logo" />

        <button onClick={botaoEditarTime}>Atualizar Time </button>

    </div>
}