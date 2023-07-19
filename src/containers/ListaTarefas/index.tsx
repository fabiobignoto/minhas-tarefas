import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'

import { RootReducer } from '../../store'
import { MainContainer, Titulo } from '../../styles'

const ListaTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo != undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  }

  const processaMensagem = () => {
    let mensagem = `${resultadoTarefasFiltradas.length} tarefa(s) marcada(s) com a tag `
    if (criterio === 'todas') {
      mensagem += '"todas"'
    } else {
      mensagem += `"${valor}"`
    }

    if (termo) {
      mensagem += ` e com termo "${termo}" no título`
    }
    mensagem += '.'
    return mensagem
  }

  const resultadoTarefasFiltradas = filtraTarefas()

  return (
    <MainContainer>
      <Titulo as={'p'}>{processaMensagem()}</Titulo>

      <ul>
        {resultadoTarefasFiltradas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              descricao={t.descricao}
              prioridade={t.prioridade}
              status={t.status}
              titulo={t.titulo}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}
export default ListaTarefas
