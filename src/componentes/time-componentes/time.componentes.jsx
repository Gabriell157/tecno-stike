import { deletarTime } from "../../services"
import { Link } from 'react-router-dom'


export function Time({ name, photo, description, members, id }) {

    async function excluirTime() {
        await deletarTime(id)
    }
    return <div>
        <img src={photo} alt="logo foto" />
        <p>{name}</p>
        <p>{members}</p>
        <p>{description}</p>
        <p>{id}</p>

        <button type="button" onClick={excluirTime}>Deletar</button>

        <Link to={`/editartime/${id}`}>
            <button type="button">Editar</button>
        </Link>

    </div>
}
