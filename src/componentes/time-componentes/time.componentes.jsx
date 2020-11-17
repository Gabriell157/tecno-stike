import { deletarTime } from "../../services"
import { Link } from 'react-router-dom'
import '../../screens/manutencao-screen/manutencao-time.css'


export function Time({ name, photo, members, id }) {

    async function excluirTime() {
        await deletarTime(id)
    }
    return <div>

        <table className="tabela">
            <tr>
                <th><img className='imgTimes' src={photo} alt="logo foto" /></th>
                <th>{name}</th>
            </tr>
            <tr>
                <td></td>
                <td>{members} Membros</td>
            </tr>
        </table>
        
        <button type="button" onClick={excluirTime}>Deletar</button>

        <Link to={`/editartime/${id}`}>
            <button type="button">Editar</button>
        </Link>

    </div>
}
