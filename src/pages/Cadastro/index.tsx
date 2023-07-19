import BarraLateral from '../../containers/BarraLateral'
import Formulario from '../../containers/Form'
import { MainContainer } from '../../styles'

const InclusaoTarefa = () => (
  <>
    <BarraLateral mostraFiltros={false} />
    <MainContainer>
      <Formulario />
    </MainContainer>
  </>
)

export default InclusaoTarefa
