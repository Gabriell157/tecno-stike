import { useState, useEffect } from 'react'
import { perfil } from '../../services'

export function Perfil() {

  const [user, setUser] = useState()

  useEffect(async () => {
    setUser(await perfil())
  }, [])

  return <div>
    {user ? (
      <div>
        <img src={user.photo} alt="Foto Perfil" />
        <h1>{user.name}</h1>
        <span>{user.email}</span>
        <div>
        <span>{user.phone}</span>
        </div>
        <p>{user.description}</p>
      </div>
    ) : (
        <p>Carregando...</p>
      )}
  </div>
}

