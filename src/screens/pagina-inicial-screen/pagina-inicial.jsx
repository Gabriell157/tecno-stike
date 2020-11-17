import { Login } from '../login-screen/login-screen'
import Banner  from '../../componentes/banner/banner.png'
import Foto1 from '../../componentes/fotinhos-redondas/main-feature-1.png'
import Foto2 from '../../componentes/fotinhos-redondas/main-feature-2.png'
import Foto3 from '../../componentes/fotinhos-redondas/main-feature-3.png'
import '../pagina-inicial-screen/pagina-inicial.css'

export function PaginaInicial () {
    return <div>

        <img width="1350" height="400" src={Banner} alt="Banner" />
        <img className="imagensRedondinhas" src={Foto1} alt="fotinho" />
        <img className="imagensRedondinhas2" src={Foto2} alt="fotinho" />
        <img className="imagensRedondinhas3" src={Foto3} alt="fotinho" />

        <Login />
    </div>
}