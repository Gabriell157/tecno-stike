import { useState, useEffect } from 'react'
import { perfil } from '../../services'
import '../perfil-screen/perfil.css'


export function Perfil() {

  const [user, setUser] = useState()

  useEffect(async () => {
    setUser(await perfil())
  }, [])

  return <div>
    {user ? (
      <div className='perfil' >
        <img src={user.photo} alt="Foto Perfil" />
        <h1>{user.name}</h1>
        <div>
        <span>Email: {user.email}</span>
        </div>
        <div>
          <span>Telefone: {user.phone}</span>
        </div>
        <span>Descrição: {user.description}</span>
      </div>
    ) : (
        <p>Carregando...</p>
      )}




  </div>
}

