import { useState } from 'react'
import { useHistory, Link} from 'react-router-dom'
import { Texto } from '../../componentes/texto-componentes/texto.componentes'
import { login } from '../../services'
import '../login-screen/login.css'

export function Login() {

  const history = useHistory()
  const [usuario, setUsuario] = useState()

  async function botaoLogin(evento) {
    evento.preventDefault()
    await login(usuario)
    history.push('/paginaprincipal')
  }

  function handleChange(evento) {
    const copia = { ...usuario }
    copia[evento.target.name] = evento.target.value
    setUsuario(copia)
  }

  return <div className='botaologin'>
    <form>

      <Texto nome="username" tipo="text" minhaFuncao={handleChange} placeholder='Email' />
      <Texto nome="password" tipo="password" minhaFuncao={handleChange} placeholder='Senha' />

      <button onClick={botaoLogin}>Login</button>

      <Link to="/cadastro">
            <button type="button"> Cadastre-se </button>
        </Link>
    </form>

  </div>
}


