import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alteraFiltro } from '../../store/reducers/filtro'
import * as enums from './../../utils/enums/Tarefa'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatcher = useDispatch()

  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = (): boolean => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    if (mesmoCriterio && mesmoValor) {
      return true
    } else {
      return false
    }
  }

  const filtrar = () => dispatcher(alteraFiltro({ criterio, valor }))

  const contaTarefas = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
  }
  const ativo: string = verificaEstaAtivo().toString()
  const contador = contaTarefas()

  return (
    <S.Card selecionado={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
