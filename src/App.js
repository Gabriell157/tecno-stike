import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CadastrarTime } from "./screens/time-screen/cadastrar-time-screen";
import { Cadastro } from "./screens/cadastro-screen/cadastro-screen";
import { Perfil } from "./screens/perfil-screen/perfil-screen";
import { Cabecalho } from "./componentes/cabecalho-componente/cabecalho"
import { EditarTime } from "./screens/editartime-screen/editartime-screen";
import { ManuPartida } from "./screens/partida-manutencao-screen/manutencao-partida";
import { ManuAtualizarPartida } from "./screens/partida-manutencao-screen/manutencao-atualizar-partida";
import { ProximasPartidas } from "./screens/proximas-partidas-screen/proximas-partidas";
import { PartidasRecentes } from "./screens/partidas-recentes-screen/partidas-recentes-screen"
import { PaginaPrincipal } from "./screens/pagina-principal-screen/pagina-principal"
import { PaginaInicial } from "./screens/pagina-inicial-screen/pagina-inicial";



export function Apps() {

  return (
    
    <BrowserRouter>

    <Cabecalho />

      <Switch>
      <Route path="/paginainicial">
          <PaginaInicial />
        </Route>
        <Route path="/perfil">
          <Perfil />
        </Route>
        <Route path="/cadastro">
          <Cadastro />
        </Route>
        <Route path="/paginaprincipal">
          <PaginaPrincipal />
        </Route>
        <Route path="/manutencaopartida">
          <ManuPartida/>
        </Route>
        <Route path="/atualizarpartida">
          <ManuAtualizarPartida/>
        </Route>
        <Route path="/cadastrartime">
          <CadastrarTime />
        </Route>
        <Route path="/editartime/:id">
          <EditarTime/>
        </Route>
        <Route path="/partidasrecentes">
          <PartidasRecentes />
        </Route>
        <Route path="/proximaspartidas">
          <ProximasPartidas />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}