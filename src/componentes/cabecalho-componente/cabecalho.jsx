import Logo from '../logo/logo.TecnoStrike.png'
import '../cabecalho-componente/cabecalho.css'
import { Link, useHistory} from 'react-router-dom'
import { logout } from '../../services'


export function Cabecalho() {

    const history = useHistory()

    async function botaosair(evento) {
        evento.preventDefault()
        await logout()
        history.push('/paginainicial')
    }

    return <div className="cabecalho">
        <img src={Logo} alt="Logo" />

        <div className='botaoperfil'>
            <Link to="/paginaprincipal">
                <button type="button">Início </button>
            </Link>
        
            <Link to="/perfil">
                <button type="button">Perfil</button>
            </Link>

            <button onClick={botaosair}>Sair </button>
        </div>

    </div>

}