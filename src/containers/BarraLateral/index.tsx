import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import * as enums from './../../utils/enums/Tarefa'
import { Botao, Campo } from '../../styles'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostraFiltros: boolean
}

const BarraLateral = ({ mostraFiltros }: Props) => {
  const dispatcher = useDispatch()
  const navigate = useNavigate()

  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      {mostraFiltros ? (
        <>
          <div>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento: { target: { value: string } }) =>
                dispatcher(alteraTermo(evento.target.value))
              }
            />
            <S.Filters>
              <FiltroCard
                criterio="status"
                valor={enums.Status.PENDENTE}
                legenda="Pendentes"
              />
              <FiltroCard
                criterio="status"
                valor={enums.Status.CONCLUIDA}
                legenda="Concluídas"
              />
              <FiltroCard
                criterio="prioridade"
                valor={enums.Prioridade.URGENTE}
                legenda="Urgentes"
              />
              <FiltroCard
                criterio="prioridade"
                valor={enums.Prioridade.IMPORTANTE}
                legenda="Importantes"
              />
              <FiltroCard
                criterio="prioridade"
                valor={enums.Prioridade.NORMAL}
                legenda="Normal"
              />
              <FiltroCard criterio="todas" legenda="Todas" />
            </S.Filters>
          </div>
        </>
      ) : (
        <Botao onClick={() => navigate('/')} type="button">
          Voltar para lista de Tarefas
        </Botao>
      )}
    </S.Aside>
  )
}

export default BarraLateral
