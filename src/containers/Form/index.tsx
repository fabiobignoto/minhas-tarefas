import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { cadastrarTarefa } from '../../store/reducers/tarefas'

import * as enums from './../../utils/enums/Tarefa'

import { BotaoSalvar, Campo, Titulo } from '../../styles'
import Form, { Opcao, Opcoes } from './styles'

const Formulario = () => {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const dispatcher = useDispatch()
  const navigate = useNavigate()

  const cadastraTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    const novaTarefa = {
      titulo,
      prioridade,
      status: enums.Status.PENDENTE,
      descricao
    }
    dispatcher(cadastrarTarefa(novaTarefa))
    navigate('/')
  }

  return (
    <Form onSubmit={cadastraTarefa}>
      <Titulo>Nova Tarefa</Titulo>
      <Campo
        required
        value={titulo}
        onChange={(evento: any) => setTitulo(evento.target.value)}
        type="text"
        placeholder="Titulo da Tarefa"
      />
      <Campo
        as={'textarea'}
        value={descricao}
        onChange={(evento: any) => setDescricao(evento.target.value)}
        placeholder="Descrição da tarefa"
      />
      <Opcoes>
        <p>Prioridade</p>
        {Object.values(enums.Prioridade).map((prioridade) => (
          <Opcao key={prioridade}>
            <input
              type="radio"
              onChange={(evento) =>
                setPrioridade(evento.target.value as enums.Prioridade)
              }
              name="prioridade"
              id={prioridade}
              value={prioridade}
              defaultChecked={prioridade === enums.Prioridade.NORMAL}
            />
            <label htmlFor={prioridade}>{prioridade}</label>
          </Opcao>
        ))}
      </Opcoes>
      <BotaoSalvar>Cadastrar</BotaoSalvar>
    </Form>
  )
}

export default Formulario
