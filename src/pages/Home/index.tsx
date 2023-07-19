import BarraLateral from '../../containers/BarraLateral'
import ListaTarefas from '../../containers/ListaTarefas'
import { BotaoAdicionar } from './styles'

const Home = () => (
  <>
    <BarraLateral mostraFiltros={true} />
    <ListaTarefas />
    <BotaoAdicionar to={'/novo'}>+</BotaoAdicionar>
  </>
)

export default Home
