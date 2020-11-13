import { useState } from 'react'
import { Texto } from '../../componentes/texto-componentes/texto.componentes'
import { cadastroTime } from '../../services'
import { useHistory, Link } from 'react-router-dom'

export function CadastrarTime() {

    const history = useHistory()
    const [times, setTimes] = useState()

    function handleChange(evento) {
        const copia = { ...times }
        copia[evento.target.name] = evento.target.value
        setTimes(copia)
    }

    async function botaoCadastroTime(evento) {
        evento.preventDefault()
        await cadastroTime(times)
        history.push('/paginainicial')
        
      }

    return <div>

        <Texto nome="name" tipo="text" minhaFuncao={handleChange} linha="Time" />
        <Texto nome="members" tipo="text" minhaFuncao={handleChange} linha="Membros" />
        <Texto nome="description" tipo="text" minhaFuncao={handleChange} linha="Descrição" />
        <Texto nome="photo" tipo="text" minhaFuncao={handleChange} linha="Logo" />

        <button onClick={botaoCadastroTime}>Cadastrar</button>

        <Link to="/login">
            <button type="button">Logar</button>
        </Link>

    </div>
}