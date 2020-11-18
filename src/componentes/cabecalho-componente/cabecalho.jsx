import Logo from '../logo/logo.TecnoStrike.png'
import '../cabecalho-componente/cabecalho.css'
import { Link } from 'react-router-dom'

export function Cabecalho() {
    return <div className="cabecalho">
        <img src={Logo} alt="Logo" />

        <div className='botaoinicioprincipal'>
            <Link to="/paginaprincipal">
                <button type="button">Início </button>
            </Link>
        </div>
        <div className="botaoperfil">
            <Link to="/perfil">
                <button type="button">Perfil</button>
            </Link>
        </div>

    </div>

}