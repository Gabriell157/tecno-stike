import Foto1 from '../../componentes/fotinhos-redondas/main-feature-1.png'
import Foto2 from '../../componentes/fotinhos-redondas/main-feature-2.png'
import Foto3 from '../../componentes/fotinhos-redondas/main-feature-3.png'
import { ListarPartidas } from '../partidas-screen/listar-partida'
import { ManutencaoTime } from '../manutencao-screen/manutencao-screen'
import '../pagina-principal-screen/pagina-principal.css'


export function PaginaPrincipal() {
    return <div>
        <div className='imagensRedondinhas'>
            <img src={Foto1} alt="fotinho" />
            <img src={Foto2} alt="fotinho" />
            <img src={Foto3} alt="fotinho" />
        </div>

        <div className='video'>
            <iframe title="Video BackGround" width="1350" height="600" src="https://www.youtube.com/embed/S4o-wwXWzYo?start=23&autoplay=1" ></iframe>
        </div>
        < ManutencaoTime />
        < ListarPartidas />
    </div>
}