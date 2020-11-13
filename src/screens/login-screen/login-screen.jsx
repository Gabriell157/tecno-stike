import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Texto } from '../../componentes/texto-componentes/texto.componentes'
import { login } from '../../services'

export function Login() {

  const history = useHistory()
  const [usuario, setUsuario] = useState()

  async function botaoLogin(evento) {
    evento.preventDefault()
    await login(usuario)
    history.push('/paginainicial')
  }

  function handleChange(evento) {
    const copia = { ...usuario }
    copia[evento.target.name] = evento.target.value
    setUsuario(copia)
  }

  return <div>
    <form>

      <Texto nome="username" tipo="text" minhaFuncao={handleChange} linha="Email" />
      <Texto nome="password" tipo="password" minhaFuncao={handleChange} linha="Senha" />

      <button onClick={botaoLogin}>Login</button>
    </form>

  </div>
}


