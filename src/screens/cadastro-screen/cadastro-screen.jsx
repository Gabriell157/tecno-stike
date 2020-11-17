import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Texto } from '../../componentes/texto-componentes/texto.componentes'
import { cadastro } from '../../services'

export function Cadastro() {

  const history = useHistory()
  const [usuario, setUsuario] = useState()

  function handleChange(evento) {
    const copia = { ...usuario }
    copia[evento.target.name] = evento.target.value
    setUsuario(copia)
  }

  async function botaoCadastro(evento) {
    evento.preventDefault()
    await cadastro(usuario)
    history.push('/paginainicial')
  }

  return <div>
    <form>
      <Texto nome="name" tipo="text" minhaFuncao={handleChange} linha="Nome" />
      <Texto nome="email" tipo="text" minhaFuncao={handleChange} linha="Email" />
      <Texto nome="password" tipo="password" minhaFuncao={handleChange} linha="Senha" />
      <Texto nome="phone" tipo="tel" minhaFuncao={handleChange} linha="Telefone" />
      <Texto nome="photo" tipo="text" minhaFuncao={handleChange} linha="Foto" />
      <Texto nome="description" tipo="text" minhaFuncao={handleChange} linha="Descrição" />

      <button onClick={botaoCadastro}>Cadastrar</button>
    </form>

  </div>
}
