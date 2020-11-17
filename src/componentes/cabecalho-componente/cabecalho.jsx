import Logo  from '../logo/logo.TecnoStrike.png'
import '../cabecalho-componente/cabecalho.css'
import { Link } from 'react-router-dom'

export function Cabecalho () {
    return <div className="cabecalho">
        <img src={Logo} alt="Logo"/>

        <Link className="botaoperfil" to="/perfil">
            <button type="button">perfil</button>
        </Link>

    </div>
   
}