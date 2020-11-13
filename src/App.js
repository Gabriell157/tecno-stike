import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CadastrarTime } from "./screens/time-screen/cadastrar-time-screen";
import { Cadastro } from "./screens/cadastro-screen/cadastro-screen";
import { Login } from "./screens/login-screen/login-screen";
import { ManutencaoTime } from "./screens/manutencao-screen/manutencao-screen";
import { Perfil } from "./screens/perfil-screen/perfil-screen";
import { Cabecalho } from "./componentes/cabecalho-componente/cabecalho"
import { EditarTime } from "./screens/editartime-screen/editartime-screen";
import { ListarPartidas } from "./screens/partidas-screen/listar-partida";
import { ManuPartida } from "./screens/partida-manutencao-screen/manutencao-partida";


export function Apps() {

  return (
    
    <BrowserRouter>

    <Cabecalho />

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/perfil">
          <Perfil />
        </Route>
        <Route path="/cadastro">
          <Cadastro />
        </Route>
        <Route path="/manutencaotime">
          <ManutencaoTime />
        </Route>
        <Route path="/manutencaopartida">
          <ManuPartida/>
        </Route>
        <Route path="/cadastrartime">
          <CadastrarTime />
        </Route>
        <Route path="/editartime/:id">
          <EditarTime/>
        </Route>
        <Route path="/partidas">
          <ListarPartidas />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}